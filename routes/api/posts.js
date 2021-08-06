const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const db = require('../../db/models');
const { User, Comment, Follow, Like, Post, Reblog, Tag } = db;
const { requireAuth, getUserToken } = require('../../utils/auth');

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

// get all of the posts of the current user, as well 
// as the posts of the users that the user follows
router.get('/api/posts/:userId', asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.userId, 10);
    const user = await User.findByPk(userId)
    let users = await Follow.findAll({ where: { followerId: userId }, include: User });
    const follows = Object.values(users).map(user => user.followedUserId);
    let posts = await Post.findAll({where: { userId: [userId, ...follows] }, order: [['updatedAt', 'DESC']], include: [ { model: Tag }, { model: Like } ] });
    
    users = users.map(user => user.User);
    let allUsers = users.map(user => {
        return {
            id: user.id, 
            username: user.username, 
            profilePic: user.profilePic, 
            banner: user.banner, 
            aboutTitle: user.aboutTitle, 
            aboutContent: user.aboutContent, 
            likes: user.Likes, 
            follows: user.Follows
        }
    })
    let allPosts = posts.map(post => {
        return {
            id: post.id,
            userId: post.userId,
            type: post.type,
            title: post.title,
            content: post.content,
            imgUrl: post.imgUrl,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            tags: post.Tags.map(tag => tag.description),
            likes: post.Likes.map(like => like.userId)
        }
    })
    res.json({ posts: allPosts, users: [...allUsers, user]});
}))

// create a new post
router.post('/api/posts', asyncHandler(async (req, res, next) => {
    const { userId, type, title, content, imgUrl } = req.body;
    // handle errors
    if (type === 'image') {
        const post = await Post.create({ userId, type, imgUrl, content });
        res.json({ post })
    } else {
        const post = await Post.create({ userId, type, title, content });
        res.json({ post })
    }
}))

// change a post, only if current user is owner of post
router.put('/api/posts/:postId', asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.postId, 10);
    const { userId, type, title, content, imgUrl } = req.body.post;
    // handle errors
    const updatedPost = await Post.findByPk(id);
    await updatedPost.update({ userId, type, title, content, imgUrl });
    res.json({ post: updatedPost })
}))

// delete a post, if the current user is the one that posted the post
router.delete('/api/posts/:postId', asyncHandler(async (req, res, next) => {
    let { userId } = req.body;
    const postId = parseInt(req.params.postId, 10);
    userId = parseInt(userId);
    const post = await Post.findByPk(postId);
    if (post.userId === userId) {
        await post.destroy();
        res.status(201).json({ msg: 'Post deleted successfully.' });
    } else {
        res.status(401).json({ msg: "Sorry, you can't do that." })
    }
}));

// user likes a post
router.post('/api/posts/:postId/like', asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.postId, 10);
    const { userId } = req.body;
    const like = await Like.create({ userId, postId });
    res.json({ like });
}))

// user unlikes a post, if the post is a post that they'vew laready liked before
router.delete('/api/posts/:postId/like', asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.postId, 10);
    const { userId } = req.body;
    await Like.destroy({ where: { userId, postId } })
    res.status(201).json({ msg: 'Like successfully removed.' });
}))

// user reblogs a post
router.post('/api/posts/:postId/reblog', requireAuth, asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.postId, 10);
    const { userId } = req.body;
    const post = await Post.findByPk(postId);
    await Reblog.create({ postId, userId })
    res.json({ post })
}))

// get all the posts that match the search query
router.get('/api/search/:query', asyncHandler(async (req, res, next) => {
    // url decode, parse, etc
    let query = req.params.query;
    const results = await Post.findAll({
        where: 
        { [Op.or]: 
            [ { title: 
                { [Op.iLike]: `%${query}%` } }, 
                { content: 
                    { [Op.iLike]: `%${query}%` } } ] }, 
        order: [[ 'createdAt', 'DESC' ]],
        include: [ { model: User }, { model: Like } ]
    })
    let users = [];
    results.forEach(post => users.push(post.User))
    res.json({ results, users });
}))

// get all the posts that have the specified tag
router.get('/api/search/tags/:tag', asyncHandler(async (req, res, next) => {
    const tag = req.params.tag;
    const results = await Tag.findAll({ where: { description: tag }, include: Post });
    res.json({ results })
}))

// add a tag to post
router.post('/api/posts/:postId/tags/:tag', asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.tag, 10);
    const tag = req.params.tag;
    const tnewTag = await Tag.create({ postId, description: tag })
    const post = await Post.findByPk(postId, { include: Tag })
    res.json({ post })
}))

// delete tag from post
router.delete('/api/posts/:postId/tags/:tag', asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.tag, 10);
    const tagContent = req.params.tag;
    const post = await Post.findByPk(postId)
    const tag = Tag.findOne({ where: { description: tagContent, postId } })
    await tag.destroy();
    res.json({ post })
}))

module.exports = router;



const sendPosts = (posts) => posts.map(post => {
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

const sendPost = (post) => ({
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
})

const sendUsers = (users) => users.map(user => {
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

const sendUser = (user) => ({
    id: user.id,
    username: user.username,
    profilePic: user.profilePic,
    banner: user.banner,
    aboutTitle: user.aboutTitle,
    aboutContent: user.aboutContent,
    likes: user.Likes,
    follows: user.Follows
})


module.exports = { sendPosts, sendPost, sendUsers, sendUser };
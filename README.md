backend at https://github.com/wren1/bumble-backend.git

<br />
<p align="center">
<a href="https://hangry-yelp-clone.herokuapp.com/">
    <img src="readmeImages/hangry-alt-logo.png" alt="Logo" width="120" height="auto"
    ></a>
<a href="https://hangry-yelp-clone.herokuapp.com/">
  <h3 align="center">Bumble</h3></a>
  


</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technical-stack">Technical Stack</a></li>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#mvp">MVP</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api-frontend">API Frontend</a></li>
    <li><a href="#api-backend">API Backend</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
* .
![splash]()

* .
![login]()

* .
![signup]()

* Initial load page that displays posts.
![feed](readmeImages/business.png)

* User profile page.
![profile](readmeImages/review.png)

* Search page.
![search](readmeImages/search.png)

* Business owner user can create business.
![createbusiness](readmeImages/createbusiness.png)

* Database Schema
![database](documentation/DBschema.png)


### Technical Stack

* Frontend built with JavaScript, React, Redux.
* Backend built with Express and Sequelize.


### Introduction

A blogging website where users can make posts and follow others.


### MVPs

1. Login / Sign-up
    * login with demo user
    * make new account
2. Feed
    * show posts of users that user follows
      * posts show number of likes
      * user can like / unlike post
      * user can reblog post
3. Profile
    * show posts made by and reblogged by user
4. Search
    * search for posts by content or tags
    


<!-- GETTING STARTED -->
## Getting Started
-----------

<!-- To get a local copy up and running follow these simple steps. -->

1. 

### Prerequisites


### Installation
<!-- 

1. Clone the repo
   ```sh
   git clone https://github.com/ransonk/group-yelp-project.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create your postgres database and connect it to the app.

4. On the root directory to run frontend and backend
   ```sh
   npm start
   ```
5. browse to http://locahost:8080. -->


<!-- USAGE EXAMPLES -->
## Usage
-----------



## Frontend Routes
--------------------------

'/'
    - navbar
        - home
        - search
        - login / signup | signout / profile
    - post options
        - text / photo / quote / link /  video
    - feed: posts of users that current user follows in most recent order
        - post: user that posted / content / original poster / tags
'/login'
    - login form to log user in
'/signup'
    - signup form to create a new user
'/user/:userId'
    - user info: username, profile picture, banner, page title, about
    - user's posts
        - user's post: user reblogged from, post content, original poster, tags
'/user/:userId/likes'
    - posts that the user liked
'/search'
    - navbar
    - posts that match the searched query
'/tags/:tag'
    - navbar
    - posts with the matching tag

--------------------------

## API Backend
-----------
|                Path                 | HTTP Verb |                      Meaning                         |
|-------------------------------------|-----------|------------------------------------------------------|
| /api/users/token          | POST   | logs in user                                                      |
| /api/users                | POST   | creates a new user                                                |
| /api/users/:userId        | PUT    | makes changes to a user's details (such as their profile picture) |
| /api/users/:userId/posts  | GET    | gets all of the posts that the user has posted                    |
| /api/users/:userId/likes  | GET    | shows all the liked posts of the user                             |
| /api/posts/:userId        | GET    | get all of the posts from the users that the current user follows |
| /api/posts                | POST   | user creates a new post                                           |
| /api/posts/:postId        | PUT    | makes changes to a post                                           |
| /api/posts/:postId        | DELETE | deletes a post                                                    |
| /api/posts/:postId/like   | POST   | current user likes a post                                         |
| /api/posts/:postId/like   | DELETE | current user unlikes an already liked post                        |
| /api/posts/:postId/reblog | POST   | current user reblogs a post                                       |
| /api/search/:query        | GET    | shows all post results that match the given query                 |
| /api/posts/:tag           | GET    | gets all the posts that have the selected / searched tag          |



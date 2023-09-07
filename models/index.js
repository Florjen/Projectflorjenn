//Do te importojme te gjithe model schema 
import { User } from './user/userModel.js'

import { Category } from './category/catModel.js'

import { Post } from './post/postModel.js'

import { Like } from './post/likeModel.js'
import { Comment } from './post/commentModel.js'

//lidhjen mes skemave do ta bejme pikerisht ne kete file 
//shembull postimi i perket nje perdoruesi 
//shembull 2 perdoruesi ka me shume se 1 blog
//shembull 3 komenti i perket nj eblogu dhe nje perdoruesi

//Blog
//Postimi i perket nje perdoruesi me celes id 
Post.belongsTo(User,{foreignKey:"userId",as:"user"})
Post.hasMany(Comment,{as:'postComments',onDelete:'cascade'})
Post.hasMany(Like,{as:'postLikes',onDelete:"cascade"})
//User
User.hasMany(Post,{as:"userPosts",onDelete:'cascade'})
User.hasMany(Comment,{as:"userComments",onDelete:'cascade'})
Like.hasMany(Like,{as:"userLikes",onDelete:'cascade'})

//Category
Category.hasMany(Post,{foreignKey:"catId",as:"categoryBlogs"})

//Likes
Like.belongsTo(User)
Like.belongsTo(Post)

//Comments
Comment.belongsTo(User)// do te na krijohen userId
Comment.belongsTo(Post) //do te na krijohen postId

//I eksportojme ato 
export {
    User,
    Category,
    Post,
    Like,
    Comment
}
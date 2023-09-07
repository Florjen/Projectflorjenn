import { Comment } from "../models/index.js";


const commentData = [
    {
        text:"Komenti per postimin me id 1 user 1",
        userId:1,
        postId:1
    },
    {
        text:"Komenti per postimin me id 2 user 2",
        userId:2,
        postId:2
    },
    
    {
        text:"Komenti per postimin me id 3 user 3",
        userId:3,
        postId:3
    },
    
]

export const seedComments = () => Comment.bulkCreate(commentData)
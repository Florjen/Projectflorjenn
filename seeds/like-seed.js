import { Like } from "../models/index.js"

const likeData = [
{
    state:true,
    userId:1,
    postId:1
},
{
    state:true,
    userId:2,
    postId:2
},
{
 state:true,
 userId:3,
 postId:3
},
]

export const seedLikes = () => Like.bulkCreate(likeData)
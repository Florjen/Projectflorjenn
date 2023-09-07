import {Post} from '../models/index.js'



const postData = [
    {
        userId:1,
        catId:1,
        title:"Titulli i blogut te pare",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a",
        image:"/images/post/durres.jpg.jpg",
        createdAt:"2023-21-07 20:20:17"

    },

    {
        userId:2,
        catId:2,
        title:"Titulli i blogut te dyte",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a",
        image:"/images/post/lali.jpg.jpg",
        createdAt:"2023-21-07 20:20:17"

    },
    {
        userId:3,
        catId:3,
        title:"Titulli i blogut te trete",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when a",
        image:"/images/post/natyraa.jpg.jpg",
        createdAt:"2023-21-07 20:20:17"

    },
]

export const seedPosts = () => Post.bulkCreate(postData)
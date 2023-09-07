import express from 'express'
const router = express.Router()

//importojme Like schema nga /models/index.js
import { Like } from '../../models/index.js'

//importojme middleware jwt token 
import {returnUserId} from '../../middlewares/jwt.js'
//router.post
router.post('/',returnUserId,async(req,res) => {

try {
    //ruajme new like ne database
    const like = {
    userId:req.userId,
    postId:6,
    state:true
    }
    

const newLike = await Like.create(like)
//pasi kemi krijuar liken nderhyjme ne tabelen e postimeve dhe rrisim numrin e likeve me +1
return res.send(newLike)
} catch (err) {
    console.log(err)
    return res.status(500).send(err)
}


})

export default router
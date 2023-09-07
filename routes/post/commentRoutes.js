import express from 'express'
//import { newComment } from '../../controllers/post/commentController'


//route ne kete file eshte http://localhost:5000/api/comment
const router = express.Router()

//importojme middleware
import {returnUserId}from '../../middlewares/jwt.js'


import {newComment,getComments} from '../../controllers/post/commentController.js'
//importojme {newComment} nga controllers
router.post("/",returnUserId,newComment)



//route per te shfaqur komentet e nje postimi me Id X //route ne kete file eshte http://localhost:5000/api/comment/bypostid/1
router.get("/bypostid/:id",getComments)

export default router

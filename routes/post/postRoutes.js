import express from 'express';
const router = express.Router();

//importojme multer storage for image 
import { featuredImage } from '../../middlewares/multer.js';
//import { newPost } from '../../controllers/post/postController.js';
import { returnUserId } from '../../middlewares/jwt.js';

//importojme funksionet nga controllers
import {newPost,allPost, singlePost,updatePost,deletePost} from '../../controllers/post/postController.js'




//Create new post Route
//API Route http://localhost:5000/api/post/new
router.post("/new",returnUserId,featuredImage,newPost)

//Shfaq te gjitha postimet route
//API Route http://localhost:5000/api/post/new
router.get("/",allPost)

//Shfaq vetem nje postim
//API Route http://localhost:5000/api/post/5
router.get("/:id",singlePost)

//prerditesojme vetem nje postim
//API Route http://localhost:5000/api/post/update:id
router.put("/update/:id",returnUserId,updatePost)

//Fshijme vetem nje postim
//API Route http://localhost:5000/api/post/delete:id
router.delete("/delete/:id",returnUserId,deletePost)

//Eksportojme routerin 
export default router;
import express from 'express';
const router = express.Router();

//importojme multer storage for image 
import { catImage } from '../../middlewares/multer.js';


//importojme funksionet nga controllers
import {newCategory} from '../../controllers/category/index.js'





//Register Route
//API Route http://localhost:5000/api/auth/category
router.post("/new",catImage,newCategory)


//Eksportojme routerin 
export default router;
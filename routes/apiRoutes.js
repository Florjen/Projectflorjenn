import express from 'express';
const router = express.Router();


//importojme routes
import authRoutes from './user/auth.js'
import categoryRoutes from './category/catRoutes.js'
import postRoutes from './post/postRoutes.js'
import likeRoutes from './post/likeRoutes.js'
import commentRoutes  from './post/commentRoutes.js'

//API Route http://localhost:5000/api
router.get("/",(req,res) => {
    res.send("/api")
})

//auth Route http://localhost:5000/api/auth
router.use("/auth",authRoutes)

// category Route http://localhost:5000/api/category
router.use("/category",categoryRoutes)

// category Route http://localhost:5000/api/post
router.use("/post",postRoutes)  // e ke post dhe jo posts

// like Route http://localhost:5000/api/like
router.use("/like",likeRoutes)

// comment Route http://localhost:5000/api/comment
router.use("/comment",commentRoutes)

//Eksportojme routerin 
export default router;

///  NODEMON     ??? ca eshte lkjo qe e ke startu
//duhet vtm ta startoj me npm run dev adi ? sepse dhe nodemon funksiononte ne start prandaj e kam perdorur

//nuk e di si te ka funksionuar me nodemon ty ...  dhe url per postime e kishe post ne njejes ne backend ndersa ne frontend e kishe ne shumes

// keshtu eshte adi kur nuk shkoj ne route e ti shikoj 

// get requests i kontrollon nga browseri dhe sigurohesh qe backend eshte ok

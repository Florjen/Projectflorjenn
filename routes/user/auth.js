import express from 'express';
const router = express.Router();

//importojme funksionet nga controllers
import {register,login,logout} from '../../controllers/users/auth.js'

//API Route http://localhost:5000/api/auth
router.get("/",(req,res) => {
    res.send("/auth")
})



//Register Route
//API Route http://localhost:5000/api/auth/register
router.post("/register",register)
//Login Route
//API Route http://localhost:5000/api/auth/login
router.post("/login",login)
//Login Route
//API Route http://localhost:5000/api/auth/logout
router.post("/logout",logout)

//Eksportojme routerin 
export default router;
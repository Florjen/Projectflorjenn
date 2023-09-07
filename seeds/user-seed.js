import {User} from '../models/index.js'
import bcrypt from 'bcryptjs'



const userData = [
    {
        firstName:"John",
        lastName:'Smith',
        email:'smith@asd.asd',
        password: bcrypt.hashSync("asdasd",10)
    },

    {
        firstName:"Bruce",
        lastName:'Wayne',
        email:'bruce@asd.asd',
        password:bcrypt.hashSync("asdasd",10)
    },


    {
        firstName:"Clark",
        lastName:'kent',
        email:'kent@asd.asd',
        password:bcrypt.hashSync("asdasd",10)
        
    },


]
const seedUsers = () => User.bulkCreate(userData)
export default seedUsers

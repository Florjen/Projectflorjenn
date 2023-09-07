//importojme sequelize funksionin qe na ben lidhjen me databasen
import  sequelize  from '../config/connectDB.js'
import seedCategory from './category-seed.js'
import { seedComments } from './comment-seed.js'
import { seedLikes } from './like-seed.js'
import { seedPosts } from './post-seed.js'
//importojme te gjithe seeed
import seedUsers from './user-seed.js'



const seedAll = async () => {
    //fshijme te gjithe tabelat 
await sequelize.sync({force:true})
//bejme seedUsers()
await seedUsers()
console.log("users seeded")
//bejme seed kategorite 
await seedCategory()
console.log("category seeded")
///bejme seed postimet
await seedPosts()
console.log("Post seeded")
//bejme seed comentet
await seedComments()
console.log("Comments seded")
//bejme seed liket
await seedLikes()
console.log("Like seeded")


//pasi kemi bere sedd te gjithe funksionet 
process.exit(0)
}
///e therrasim si funksion dhe e ekzekutojme 
seedAll()
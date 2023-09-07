import multer from 'multer'
import path from 'path'
import fs from 'fs'


//krijojme 12 muajt e vitit
const monthNames = ["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nentor","dhjetor"];

const d = new Date()
//gjejme muajin aktual dhe e pasojme ne indeixn e monthNames
const month = monthNames[d.getMonth()]
const year = new Date().getFullYear()



//multer storage 
const catStorage = multer.diskStorage({
    destination:(req,file,cb) =>{
        console.log(file)
        //krijojme path ku do te ruajme fotot e kategorise
        const imgPath = `./public/images/category/${year}/${month}/`
        //perdorim fs per te krijuar ate direktori nese nuk ekziston
        fs.mkdirSync(imgPath,{recursive:true})
        //nese kemi errork null dhe nese gjithcka kashkuar mire kthejme imgPath
        cb(null,imgPath)
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

//krijojme multer middleware 
export const catImage = multer({
    storage:catStorage,
    fileFilter:(req,file,cb) => {
        if(file.mimetype = "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
       cb(null,true)
        } else {
            cb(null,false)
            return cb(new Error("Vetem formate .png . jpg dhe .jpeg jane te lejuara"))
        }
    }

    //limits:fileSize:'1000000' 1mb,
}).single('catImage')

// featured image for the blog post 
const featuredImageStorage = multer.diskStorage({
    destination:(req,file,cb) =>{
        console.log(file)
        //krijojme path ku do te ruajme fotot e kategorise
        const imgPath = `./public/images/post/${year}/${month}/`
        //perdorim fs per te krijuar ate direktori nese nuk ekziston
        fs.mkdirSync(imgPath,{recursive:true})
        //nese kemi errork null dhe nese gjithcka kashkuar mire kthejme imgPath
        cb(null,imgPath)
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

//krijojme multer middleware 
export const featuredImage = multer({
    storage:featuredImageStorage,
    fileFilter:(req,file,cb) => {
        if(file.mimetype = "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
       cb(null,true)
        } else {
            cb(null,false)
            return cb(new Error("Vetem formate .png . jpg dhe .jpeg jane te lejuara"))
        }
    }

    //limits:fileSize:'1000000' 1mb,
}).single('image')
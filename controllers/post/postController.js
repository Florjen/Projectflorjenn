import { Post,Like,Comment } from "../../models/index.js"

//Funksioni per te krijuar nje postim te ri dhe e ruajme ne database 
export const newPost = async (req,res) => {
    //presim te dfhenat e postimit ne req.body
const imgPath = req.file.destination.replace("./public","")
const imageString = imgPath + req.file.filename
    try {
        const post = {
        title:req.body.title,
        description:req.body.description,
        image:imageString,
        catId:1,
        userId:1,
        }
        const newPost = await Post.create(post)
        console.log(req.body,req.file)
        return res.send(req.body)
    } catch (err) {
        return res.status(500).send(err)
    }
}
//Funksioni per te kthyer ne frontend te gjitha postimet 
export const allPost = async (req,res) => {
    console.log("new request")  // nuk vje fare kerkesa ne backend
try {
const posts = await Post.findAll()
return res.status(200).send(posts)
} catch (err){
    return res.status(500).send(err)
}
}

//Funksioni pper te gjetur postimin nepermjet id
export const singlePost = async (req,res) => {
    try {
        console.log(req.params)
    const post = await Post.findOne({where:{id:req.params.id},
    //include:[
   // {model:Like,as:"postLikes"},
     // {model:Comment,as:"postComments",attributes:["text","id"]}
 //   ]
})
    return res.status(200).send(post)
    } catch (err){
        return res.status(500).send(err)
    }
    }
    
//Funksioni per te perditesuar nje postim
export const updatePost = async (req,res) => {
    //na duhet userId qe eshte identifikuar ne frontend

console.log(req.params.id)
console.log(req.body.title)
try {
   // const post = Post.findByPk(1)
   // if(req.userId !==post.userId) {
//nese userid nuk eshte i njejte me userId qe na kthen ne post
//nuk lejojme ndryshimet  //
//eturn res.send("Perditesimi deshtoi") 
   // }




const updatedPost = await Post.update({
    title:req.body.title},
    {where:{id:req.params.id}}
    )
return res.status(201).send(updatedPost)
} catch (err) {
    return res.status(500).send(err)
}
}

//Funksioni per te fshire nje postim
export const deletePost = async (req,res) => {
    try {
        //ppasi kemi id e blogut
        //id e perdoruesit = req.userId
        
  //Disa kushte para se te fshijme blogun/ /


//shikojme nese blogu me x id ekziston //


//nese ekziston verifikojme nese perdoruesi qe ka derguar //
//kerkesen per te fshire blogun eshte autori i atij blogu //
 const deleteBlog = await Post.destroy({where:{id:req.params.id}})
 return res.send("Postimi u fshi")
    } catch (err) {
        return res.status(500).send(err)
    }
    }
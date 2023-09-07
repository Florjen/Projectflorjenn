

//importojme models schema nga /models/index.js
import {Comment} from '../../models/index.js'

//Importojme 
//funksioni per te ruajtur ne database
export const newComment = async (req,res) => {
    console.log("user id i marre nga token",req.userId,req.headers.authorization)

    try {
//na duhet id e perdoruesit do e marrim nga credentials qe dergohen ne req.headers
//na duhet id e postimit do e pasojme ne rontend ose ne req.body req.params ose req.query
//na duhet teksti qe perdoruesi ka shkruar dhe do e marrrim nga req.body
    

//pasi i marrim keto vlera bejme disa kontrolle nese cfare kemi permbushur kontrollet
const comment = {
    userId:1,
    postId:3,
    text:"Alamet postimi"
}
//pasi kemi gjithcka qe na duhet ruajme comentin ne database 
const komenti = await Comment.create(comment)
//pasi kemi krijuar komentin nderhyjme ne tabelen e postimeve dhe rrisim numrin e komenteve me +1
return res.status(201).send(komenti)
    } catch (err){
        return res.status(500).send(err)
    }
}


//funksioni nga ku e kthejme komentet qe i perkasin nje postimi me id X
export const getComments = async (req,res) =>{
    //marrim id nga req.params
const {id} = req.params
//marrim id  e postimit dhe ne baze te id e marrim te gjithe ato komente qe kanre postId == me id qe na vjen nga frontend
//dhe i kthejme ato ne frontend

try {
const komentet = await Comment.findAll({
    where:{
        
        postId:1
     

    }
})
console.log(komentet)
return res.status(200).send(komentet)
} catch (err) {
   return res.status(500).send(err)
}

}
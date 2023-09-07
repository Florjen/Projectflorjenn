import jwt from 'jsonwebtoken'

//krijojme funksionin per te gjenenruar token 
export const generateToken = (id,firstName,lastName,email,role) => {
    return jwt.sign({id,firstName,lastName,email,role},process.env.JWTSECRET,{expiresIn:"1d"})

    }


    //Krijojme funksionin per te cdekoduar token
   export const returnUserId = (req,res,next) => {
   //token presim qe ta marrim nga req.cookie ose /authorization /
   

    try { 
const cookies = req.headers.cookie || req.headers.authorization
if (cookies) {
    let token = cookies
    .split(";")
    .find((rrjesht) => rrjesht.trim().startsWith("jwt="))
    .split("=")[1]
//nese kemi nje token vazhdojme 
    if(token){
     jwt.verify(token,process.env.JWTSECRET,(err,decoded)=>{
        if(err) return res.status(401).send("unathorizatied")

        //nese nuk kemi nj error kemi nje etoken te cdekoduar
        req.userId = decoded.id
        next()
     })
    }
}
    } catch (err){
      return res.status(500).send(err)
    }
    }
     
   //krijojme funksionin per te lejuar vetem admin akses ne x route
    export const adminRole = (req,res,next) => {
        //token presim qe ta marrim nga req.cookie ose /authorization /
        
     
         try { 
     const cookies = req.headers.cookie || req.headers.authorization
     if (cookies) {
         let token = cookies
         .split(";")
         .find((rrjesht) => rrjesht.trim().startsWith("jwt="))
         .split("=")[1]
     //nese kemi nje token vazhdojme 
         if(token){
          jwt.verify(token,process.env.JWTSECRET,(err,decoded)=>{
             if(err) return res.status(401).send("unathorizatied")
     
             //nese nuk kemi nj error kemi nje etoken te cdekoduar
            if(decoded.role !== 'admin') {
            return res.status(401).send("unathorizatied")
            } else {
              next()
            }
            next()
          })
         }
     }
         } catch (err){
           return res.status(500).send(err)
         }
         }

    
   //export const adminRole = (req,res,next) => {

//let decoded = {
  //  id:2,
   // role:'admin',
    //firstName:'Adi',
    //lastName:'Kica',
    //email:'adi-dr@info.al',
    //iat:1672865054,
    //exp:1672951454
//}
  //  if(decoded.role === 'admin') {
    //       next()
    //}
     //}


     
   
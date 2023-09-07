//Importojme bcryptin 
import bcrypt from 'bcryptjs'


//Importojme user Schema 
import { User } from "../../models/index.js"

// importojme funksionin per te gjeneruar token 
import { generateToken } from '../../middlewares/jwt.js'


//funksioni qe regjistrojme nje perdorues
export const register = async (req,res) => {
    //ketu presim te dhenat qe na vijne  nga frontend ose user inputs
    //te dhenat qe do te na vijne ne req.body 

    //kontrollojme nese te dhenat plotesojne x kushte
    if(req.body.password.length < 6) return res.send ("Passwordi nuk i ploteson kushtet")
    

     try {
    //kontrollojme nese emaili qe na vjen nga req.body nuk ekziston ne database 
    const checkEmail = await User.findOne({where:{email:req.body.email}})
    //nese checkEamil na kthen true 
    if(checkEmail) return res.status(409).send("Ky email ekziston")
    //enkryptojme passwordin 
    const encryptedPass = bcrypt.hashSync(req.body.password,10)
    //ruajme perdoruesin ne database 
    const user = {
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:encryptedPass
    }
const newUser = await User.create(user)
    //kthejme dicka ne frontend
    //mos kthe ne frontend asnjehere password
    //delete newUser.dataValues.password
       // console.log(req.body)
        return res.status(201).send(newUser)
     } catch (err) {
        console.log(err)
        return res.status(500).send(err)

     }
    

    }



    //funksioni qe indetifikojme nje perdorues
    export const login = async (req,res) => {
  try {
const checkEmail = await User.findOne({where:{email:req.body.email}})
//nese checkEamil na kthen true 
if(!checkEmail) return res.status(409).send("Ky email nuk ekziston")
//kontrollojme nese ne req.body.password === me checkEmail.password
//console.log(req.body.password,checkEmail.password)
const checkPass = bcrypt.compareSync(req.body.password,checkEmail.password)
//nese passwordi nuk eshte 101% i sakte kthejme ne frontend
if(!checkPass) return res.status(500).json({mesazhi:"Kredenciale te gabuara"})
//nese gjithcka ka shkuar mire fillojme me gjenerimin e token dhe e ekthejme ne frontend
const {id,firstName,lastName,email,role} = checkEmail
const token = generateToken(id,firstName,lastName,email,role)
//kthejme tokenin ne frontend si cookie 
return res.status(200).cookie("jwt",token,{httpOnly:true,maxAge:60*60*24*30}).json({mesazhi:"indetifikimi ishte i sukseshem"})
} catch (err) {
console.log(err)
return res.status(500).send(err)
}
    

    }


    //Funksioni logout 
    //thjesht kthejme ne browser nje cookie bosh me vlefshmeri 0ms te skaduar
    export const logout = async (req,res) => {
return res.cookie("jwt","",{httpOnly:true,maxAge:0}).json({mesazhi:"Ju u shkeputet nga webi"})
    }
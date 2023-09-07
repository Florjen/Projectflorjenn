"use client"
import { useEffect } from "react";

export default function LogOut(){

//logout route backend http://localhost:5000/api/auth/logout

useEffect(() =>{fetch("http://localhost:5000/api/auth/logout",{
    method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"
   }).then(res =>{ 
if(res.status == 200){
    window.location = '/login'
}
})
  .catch(err => console.log(err))
},[])

}
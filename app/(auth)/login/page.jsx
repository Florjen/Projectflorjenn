"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage () {
const router = useRouter()

const [state,setState] = useState(null)
console.log(state)
//funksioni per te pasuar inputs ne state
const handleChange = (e) =>{
const name = e.target.name  
const value = e.target.value
setState(data =>({...state,[name]:value}))
}
//funksioni per te derguar te dhenat ne backend
//backend url http://localhost:5000/auth/login
const handleSubmit = (e) =>{
    e.preventDefault()
    //dergojme te dhenat ne backend
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,{
        method:"POST",
        credentials:"include",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",

        },
        body:JSON.stringify({...state})

    })
    .then(res => res.json())
    .then(res =>{
        console.log(res)
      //  router.back('/')
      router.push('/user/profile')
    }).catch(err => console.log(err))

}


    return (
        <>
        <p>Login Page</p>
        <form onSubmit={handleSubmit}className="flxcol " >
            <div className="flxcol ">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={(e) => handleChange(e)}/>
            </div>
            <div className="flxcol ">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={(e) => handleChange(e)} />
            </div>
            <div>
            <input type="submit" value="Submit"/>
            </div>

          
        </form>
        </>
    )
}
//importojme Link nga next link
import Link from "next/link"



const headerLinks = [
    {
        label:"Home",
        route:"/"
    },
    {
        label:"Postimet",
        route:"/posts"
    },
    {
        label:"Postimi i Ri",
        route:"/user/posts/new"
    },
    {
        label:"Login",
        route:"/login"
    },
    {
        label:"Register",
        route:"/register"
    },
    {
        label:"LogOut",
        route:"/logout"
    },
]

export default function HeaderNav(){
    return (
        <header>
            <nav>
                <ul>
                    {
                    headerLinks.map(({label,route}) =>(
                        <li key={label}><Link href={route}>{label}</Link></li>
                    ))
                    }
                </ul>
            </nav>
        </header>
    )
}
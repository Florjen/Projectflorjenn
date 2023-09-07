
import {NextResponse} from 'next/server'
import jwt_decode from 'jwt-decode'

const user = {
    role:'admin'
}





export function middleware(req){
    //marrim tokie nga cookies
    const token = req.cookies.get("jwt")?.value

    let user = {}
    //nese nuk kemi nje tooken e dergojme menjehere ne login page 
    if(!token || token == "undefined") {
        return NextResponse.rewrite(new URL('/login',req.url))
    } else {
        //nese kemi nje token e cdekodojme ate
        user = jwt_decode(token)
    }
    console.log(user,"user from middleware")
    //kontrollojme nese urlja fillon me /user
if(req.nextUrl.pathname.startsWith('/user')){
    //per te aksesuar route user role kerkohet ose user ose admin
  if(user.role == 'user'|| user.role == 'admin'){
    return NextResponse.next()
} else {
    return NextResponse.rewrite(new URL('/login',req.url))
}


}
//per te mbrojtur admin routes pak a shume e njejta gje
}

//route qe vezhgojme i pasojme ne array
export const config = {
    matcher:['/user/:path*']
}
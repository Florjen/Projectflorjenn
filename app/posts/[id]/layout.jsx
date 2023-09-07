import Image from "next/image"
import Link from "next/link"

const getSinglePost = (id) =>{
    return fetch(`${process.env.API_URL}/post/${id}`).then(res =>res.json())
}






export default async function LayoutPost({children,params}){
    const {id} = params
const postimi = await getSinglePost(id)
console.log(postimi)
    return (
    
<>
<div>
    <h1>{postimi.title}</h1>
    <Image src={`${process.env.IMAGE_URL + postimi.image}`} width="500" height={300} alt={postimi.title}/>
    <p>{postimi.description}</p>
    <p>Komente: {postimi.komente}</p>
    {
        postimi.komente >=1 ? <Link href={`/posts/${postimi.id}/comments`}>Lexo Komentet</Link> : null
    }
 
</div>
{children}

</>
    )
}
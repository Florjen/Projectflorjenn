//Importojme Image nga Next
import Image from "next/image"
import Link from "next/link"

export default function  PostCard ({post}) {
    return (
        <Link href={`/posts/${post.id}`}>

        <article>
            <h3>{post.title}</h3>
            <Image src={`${process.env.IMAGE_URL + post.image}`} width="200" height="160" alt={post.title} />
            
            <div>
                <p></p>
           
            </div>
        </article>
        </Link>
    )
}

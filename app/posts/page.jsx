
//importojme PostCard nga components
import PostCard from "../components/Posts/Card"


const fetchPosts = async () =>{

  const res = await fetch(`${process.env.API_URL}/post`)
  //mund te kishim bere disa check nese gjithcka ka sshkuar mire
 return await res.json()
}





const PostimetPage = async () =>{
  const postimet = await fetchPosts()
 console.log(postimet)
  return (
    <div className='flxrow fgap2'>
      {
        postimet.map(post => (
          <div key = {post.id}> 
          <PostCard post={post}/>
          </div>
        ))
      }
    </div>
  )
}
export default PostimetPage
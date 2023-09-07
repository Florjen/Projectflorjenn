
//ne backend do marrim komentet qe i perkasin psotimit me id X
const fetchComments = async (id) => {
//http://localhost:5000/api/comment/bypostid/1
    return fetch(`${process.env.API_URL}/comment/bypostid/${id}`).then(res => res.json())
}

//kishe harru  /
// mire e ke tani ??
//po adi 
export default async function Comments({params}){

const {id} = params
const comments = await fetchComments(id)
console.log(comments)

    return (
        <div>
       {
        comments?.map(c =>(
            <li key={c.id}>{c.text}</li>
        ))
       }
        </div>

    )
}
import React, {useState, useEffect} from 'react' ;
import axios from 'axios';

const Posts  = ()=> {

    const [post, setPosts] = useState();
    
    //componentDidMount
    useEffect( ()=> {

        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            const responsePosts = res.data;
            setPosts(responsePosts);
        });

    }, []);

    return (

        <div>
            <h1>
                {post && post.map((post)=>{
                    const{id, title} = post;
                    return(
                        <div key={id}>
                            <h5>Title: {title}</h5>
                            <h6>Assigned to user: {id}</h6>
                        </div>
                    )
                })}
            </h1>
        </div>

    )

}

export default Posts;
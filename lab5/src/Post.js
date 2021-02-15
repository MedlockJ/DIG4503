import React, {useState, useEffect} from 'react' ;
import axios from 'axios';

const Post  = ()=> {

    const [post, setPost] = useState();

    useEffect( ()=> {


    }, []);

    return (

        <div>
            <h1>
                {post && post.map((post)=>{
                    const{id, title} = post;
                    return(
                        <div key={id}>
                            <h5>{title}</h5>
                            <h6>Assigned to user: {id}</h6>
                        </div>
                    )
                })}
            </h1>
        </div>

    )

}
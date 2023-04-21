import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {API} from '../../api';


export default function PostsPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        API.get('posts')
        .then( resp => setPosts(resp.data))
    }, [])


    
    return (
        <ul>
            {posts.map( p => 

                <li key={p.id}>
                    <button>
                    <Link to={`/post/delete/${p.id}`}>удалить</Link>
                    </button>
                    <Link to={`/posts/${p.id}`}>{p.title}</Link>
                </li>

            )}
        </ul>
    )
};
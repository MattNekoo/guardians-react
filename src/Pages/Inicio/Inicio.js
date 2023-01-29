import React, { useState } from 'react'
import Zerados from './Zerados'
import PostDetail from '../../components/PostDetail'
import "../../hooks/useFetchDocuments";
import { useFetchDocuments } from '../../hooks/useFetchDocuments';


const Inicio = () => {
    const { documents: posts, loading } = useFetchDocuments('posts');

    return (
        <div>
            {/* <Zerados /> */}
            {posts && posts.map((post) => <PostDetail key={post.id} post={post}  />)}
        </div>
    )
}

export default Inicio
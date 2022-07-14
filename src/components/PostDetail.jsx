import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import {db} from "../firebase";


const PostDetail = () => {
  const [post, setPost] = useState([]);
  const {postId} = useParams();
  useEffect(() => {
    async function getDocument (coll, id) {
      const snap = await getDoc(doc(db, coll, id))
      if (snap.exists()){
        console.log('snapshot', snap.data());
        setPost(snap.data());
      }
        
      else
        return Promise.reject(Error(`No such document: ${coll}.${id}`))
    }
    
    getDocument("posts", postId);
    
  }, [])
  
  return (
    <div className='post-detail'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default PostDetail
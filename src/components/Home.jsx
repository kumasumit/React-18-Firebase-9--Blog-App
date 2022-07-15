import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {collection,getDocs, doc } from "firebase/firestore";
import {db} from "../firebase";


const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    
async function getPosts (coll) {
  const newPosts=[];
  const querySnapshot = await getDocs(collection(db, coll));
 
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const post = doc.data();
      post.id = doc.id;
      newPosts.push(post);
    });
    // console.log('posts', newPosts);
    setPosts(newPosts);
}

getPosts("posts");    
}, [])
  
  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Kumar Sumit</div>
      {/* Map through the posts array */}
      {posts.map((post, index)=>(
        <div className='post' key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))

      }
    </div>
  )
}

export default Home
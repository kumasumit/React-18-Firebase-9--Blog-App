import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Navbar, Home, CreatePost, PostDetail} from "./Index";

const App = () => {
  return (
    <div className="container">
      <Navbar/>
    <Routes>
      <Route path="/" element={Home}/>
      <Route path="/post:postId" element={PostDetail}/>
      <Route path="/create-post" element={CreatePost}/>
    </Routes>

    </div>
  )
}

export default App;



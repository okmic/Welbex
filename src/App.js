import React, { useState, useEffect } from 'react'
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App1 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10)


  const updateData = (data) => {

    return data.map(i => ({
      id: i.id,
      date: "0" + (Math.floor(Math.random() * 7) + 1) +  ".0" + (Math.floor(Math.random() * 8) + 1) + ".2021",
      title: i.title,
      amount: Math.floor(Math.random() * 7) + 1,
      distance: Math.floor(Math.random() * 7) + 1
    })) 
  }

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const newData = updateData(res.data)
      setPosts(newData)
      setLoading(false)
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Posts posts={currentPosts} loading={loading} />
    </div>

  );
};
const App = () => {

  return <>
  <BrowserRouter>
    <Routes>
      
      <Route path="*" element={<App1/>} />
  
    </Routes>
  </BrowserRouter>

  </>
}

export default App;

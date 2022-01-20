import React, { useState, useEffect } from 'react'
import Posts from './components/Posts'
import Pagination from './components/Pagination'
import axios from 'axios'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const dataNames = ["welbex", "ozon", "apple", "microsoft", "google", "github", "meta", "tesla", "windows", "linux"]

const WelBex = () => {
  const [posts, setPosts] = useState([]);
  const [stateOrder, setStateOrder] = useState(true)
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10)
  const [sort, setSort] = useState(true)



  const updateData = (data) => {
// Data generation
    return data.map(i => ({
      id: i.id,
      date: "0" + (Math.floor(Math.random() * 7) + 1) +  ".0" + (Math.floor(Math.random() * 8) + 1) + ".2021",
      title: dataNames[Math.floor(Math.random() * 10)],
      amount: Math.floor(Math.random() * 7) + 1,
      distance: Math.floor(Math.random() * 7) + 1
    })) 
  }

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const newData = updateData(res.data)
      setPosts(newData)
      setLoading(false)
    }
    fetchPosts()
    
  }, [stateOrder])

  // Get current posts


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>WELBEX</h1>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Posts 
      posts={posts} 
      loading={loading} 
      setPosts={setPosts}
      setStateOrder={setStateOrder}
      currentPage={currentPage}
      postsPerPage={postsPerPage}
      sort={sort}
      setSort={setSort}
      />
    </div>

  );
};
const App = () => <BrowserRouter>
    <Routes>
      <Route path="*" element={<WelBex/>} />
    </Routes>
  </BrowserRouter>

export default App

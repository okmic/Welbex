import React, { memo, useEffect, useState } from 'react'
import { Data } from '../App';
import { switchMorLess } from './auxiliary/sortFunctions';
import Input from './Input';
import SelectCom  from './Select';
import Table from './Table';

type PropsType = {
  posts: Array<Data>
  loading: boolean
  setPosts: (p: Array<Data>) => void
  currentPage: number
  postsPerPage: number
  sort: boolean
  setSort: (s: boolean ) => void
  setStateOrder: (o: boolean) => void
  stateOrder: boolean
}

const Posts: React.FC<PropsType> = ({ posts, loading, setPosts, currentPage, postsPerPage, sort, setSort, setStateOrder, stateOrder}) => {
  
  const [currentPosts, setCurrentPosts] = useState<Array<Data>>([])
  const [select, setSelect] = useState('') 

//get 10 objects for page
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost))
  }, [posts, currentPage, sort, postsPerPage])

  useEffect(() => {
    //sort swiches, a function for external use that allows you to determine which filter to use based on input parameters (greater than, less than, equal to)
    switchMorLess(select, posts, setPosts, sort, setSort, setSelect)
  }, [select])

  const handleSubmit = () => {
    setStateOrder(!stateOrder)
    setSort(!sort)
  }
  
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <table className="table">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Name</th>
        <th scope="col">Amount</th>
        <th scope="col">Distance</th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th scope="col">
            <button onClick={handleSubmit}>Remove Filters<sup>&#10006;</sup></button>
        </th>
        <th scope="col">
          <Input posts={posts} setPosts={setPosts} 
          setSelect={setSelect} setSort={setSort}
          sort={sort} />
        </th>
        <th scope="col">
        <SelectCom less='lessAmount' more='moreAmount' setSelect={setSelect} />
        </th>
        <th scope="col">
        <SelectCom less='lessDistance' more='moreDistance' setSelect={setSelect} />
        </th>
      </tr>
    </thead>
    {currentPosts.map(table => <Table key={table.id} 
    date={table.date} 
    title={table.title} 
    amount={table.amount} 
    distance={table.distance} />)}
  </table>
}

export default memo(Posts)

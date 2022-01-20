import React, { memo, useEffect, useState } from 'react'
import { Data } from '../App';
import { contains, switchMorLess } from '../auxiliary/sortFunctions';
import SelectCom  from './Select';

type PropsType = {
  posts: Array<Data>
  loading: boolean
  setPosts: (p: Array<Data>) => void
  currentPage: number
  postsPerPage: number
  sort: boolean
  setSort: (s: boolean) => void
  setStateOrder: (o: boolean) => void
  stateOrder: boolean
}

const Posts: React.FC<PropsType> = ({ posts, loading, setPosts, currentPage, postsPerPage, sort, setSort, setStateOrder, stateOrder}) => {
  
  const [currentPosts, setCurrentPosts] = useState<Array<Data>>([])
  const [select, setSelect] = useState('') 
  const [value, setValue] = useState('')

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const handleSearch = () => {
    contains(posts, setPosts, value, sort, setSort)
    setSelect('')
  }

//get 10 objects for page
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost))
  }, [posts, currentPage, sort, postsPerPage])

  useEffect(() => {
    //sort swiches
    switchMorLess(select, posts, setPosts, sort, setSort, setSelect)
  }, [select])

  
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
            <button onClick={() => setStateOrder(!stateOrder)}>Remove Filters <sup>&#10006;</sup></button>
        </th>
        <th scope="col">
          <input type="text" value={value} onChange={(event) => onChangeInput(event)} />
          <button onClick={handleSearch}>search</button>
        </th>
        <th scope="col">
        <SelectCom less='moreAmount' more='lessAmount' setSelect={setSelect} />
        </th>
        <th scope="col">
        <SelectCom less='lessDistance' more='moreDistance' setSelect={setSelect} />
        </th>
      </tr>
    </thead>
    {currentPosts.map(table => <tbody key={table.id}>
      <tr>
        <th scope="row">{table.date}</th>
        <td>{table.title}</td>
        <td>{table.amount}</td>
        <td>{table.distance}</td>
      </tr>
    </tbody>)}
  </table>
}

export default memo(Posts)

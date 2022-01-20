import React, { useEffect, useState } from 'react'
import { contains, equality, switchMorLess } from '../auxiliary/sortFunctions';
import { SelectCom } from './Select';


const Posts = ({ posts, loading, setPosts, currentPage, postsPerPage, sort, setSort, setStateOrder}) => {

  const [currentPosts, setCurrentPosts] = useState([])
  const [select, setSelect] = useState('')
  const [value, setValue] = useState('')

  const onChangeInput = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost))
  }, [posts, currentPage, sort, postsPerPage])

  useEffect(() => {
      switchMorLess(select, posts, setPosts, sort, setSort)
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
            <button onClick={() => setStateOrder(prev => !prev)}>Remove Filters <sup>Х</sup></button>
        </th>
        <th scope="col">
          <input type="text" value={value} onChange={(event) => onChangeInput(event)} />
          <button onClick={() => contains(posts, setPosts, value)}>search</button>
        </th>
        <th scope="col">
          <select onChange={(e) => setSelect(e.target.value)}>
            <option value="">Nothing</option>
            <option value="moreAmount">More</option>
            <option value="lessAmount">Les</option>
            <option value="equality">Equality</option>
          </select>
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

export default Posts;

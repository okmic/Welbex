import React, { useEffect, useState } from 'react'
import { Data } from '../App';
import { contains, equality, switchMorLess } from '../auxiliary/sortFunctions';
import { SelectCom } from './Select';

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

export type SwitchType =  "moreAmount" | "lessAmount" | "moreDistance" | "lessDistance" | "equality" | "nothing"

const Posts: React.FC<PropsType> = ({ posts, loading, setPosts, currentPage, postsPerPage, sort, setSort, setStateOrder, stateOrder}) => {
  
  const [currentPosts, setCurrentPosts] = useState<Array<Data>>([])
  const [select, setSelect] = useState('') 
  const [value, setValue] = useState('')

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            <button onClick={() => setStateOrder(!stateOrder)}>Remove Filters <sup>Х</sup></button>
        </th>
        <th scope="col">
          <input type="text" value={value} onChange={(event) => onChangeInput(event)} />
          <button onClick={() => contains(posts, setPosts, value, sort, setSort)}>search</button>
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

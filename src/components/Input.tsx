import React, { memo, useState } from "react"
import { Data } from "../App"
import { contains } from "./auxiliary/sortFunctions"

type PropsType = {
    posts: Array<Data>
    setPosts: (p: Array<Data>) => void
    sort: boolean
    setSort: (s: boolean) => void
    setSelect: (s: string) => void
}

const Input: React.FC<PropsType> = ({posts, setPosts, sort, setSort, setSelect}) => {

    const [value, setValue] = useState('')

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
      }
      const handleSearch = () => {
        // sort contains
        contains(posts, setPosts, value, sort, setSort)
        setSelect('')
      }

    return <>
        <input type="text" value={value} onChange={(event) => onChangeInput(event)} />
        <button onClick={handleSearch}>search</button>
    </>
}

export default memo(Input)
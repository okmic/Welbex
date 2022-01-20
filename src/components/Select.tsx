import React, { memo } from 'react'

type PropsType = {
    setSelect: (e: string) => void
    more: string
    less: string
}
const SelectCom: React.FC<PropsType> = ({setSelect, more, less}) => {

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value)
    }

    return <select onChange={(e) => onChangeSelect(e)}>
    <option value="">Nothing</option>
    <option value={more}>More</option>
    <option value={less}>Less</option>
    <option value="equality">Equality</option>
    </select>
}
export default memo(SelectCom)
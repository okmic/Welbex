import React from 'react'

type PropsType = {
    setSelect: (e: string) => void
    more: string
    less: string
}
export const SelectCom: React.FC<PropsType> = ({setSelect}) => <select onChange={(e) => setSelect(e.target.value)}>
<option value="">Nothing</option>
<option value="moreDistance">More</option>
<option value="lessDistance">Les</option>
<option value="equality">Equality</option>
</select>
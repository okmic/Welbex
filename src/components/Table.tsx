import React, { memo } from "react"

type PropsType = {
    date: string | undefined
    title: string | undefined
    amount: number | undefined
    distance: number | undefined
}

const Table: React.FC<PropsType> = ({ date, title, amount, distance }) => <tbody>
    <tr>
        <th scope="row">{date}</th>
        <td>{title}</td>
        <td>{amount}</td>
        <td>{distance}</td>
    </tr>
</tbody>

export default memo(Table)
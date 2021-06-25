import React from "react";
import { IState as IProps } from "../App";
import '../App.css'

const List: React.FC<IProps> = ({ form }) => {
    const mapList = (): JSX.Element[] => {
        return (
            form.map((i, index) => {
                return (
                    <tr key={index}>
                        <td>{i.name}</td>
                        <td>{i.rate}</td>
    					<td>{i.review}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div className="tableDiv">
            <table>
                <tr>
                    <th>Movie</th>
                    <th>Rate</th>
                    <th>review</th>
                </tr>
                {mapList()}
            </table>
        </div>

    )
}

export  default List
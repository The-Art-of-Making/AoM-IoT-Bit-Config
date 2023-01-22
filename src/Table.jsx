import { useState } from "react"
import classnames from "classnames"

export default function Table(props) {
    const [hideBody, setHideBody] = useState(props.hide)
    return (
        <>
            <table className="table table-hover mt-3 mb-0">
                <thead className="darken" style={{fontSize: 20, cursor: "pointer"}} onClick={() => setHideBody(!hideBody)}>
                    <tr>
                        <th className="dropdown-toggle">{props.title}</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
            <table className={classnames(hideBody ? "table table-hover mb-3 d-none" : "table table-hover mb-3")}>
                <thead>
                <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Value</th>
                </tr>
                </thead>
                <tbody>
                    {props.body}
                </tbody>
            </table>
        </>
    )
}
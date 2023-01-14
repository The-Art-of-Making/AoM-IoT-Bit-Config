export default function Input(props) {
    return (
        <tr>
            <th scope="row">{props.label}</th>
            <td></td>
            <td></td>
            <td>
                <input
                    className="form-control"
                    type="text"
                    onChange={(e) => props.setInput(e.currentTarget.value)}
                    placeholder={props.currentInput}
                    value={props.currentInput}
                />
            </td>
        </tr>
    )
}

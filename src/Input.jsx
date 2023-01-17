export default function Input(props) {
    return (
        <tr>
            <td><p style={{fontWeight: "bold"}}>{props.label}</p><p>{props.description}</p></td>
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

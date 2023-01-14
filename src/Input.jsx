export default function Input(props) {
    return (
        <div className="form-group m-1">
            <h6>{props.label}</h6>
            <fieldset>
                <input
                    type="text"
                    onChange={(e) => props.setInput(e.currentTarget.value)}
                    placeholder={props.currentInput}
                    value={props.currentInput}
                />
            </fieldset>
        </div>
    )
}

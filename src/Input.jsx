export default function Input(props) {
    return (
        <div className="row m-1">
            <div>
                <input
                    id="greet-input"
                    onChange={(e) => props.setInput(e.currentTarget.value)}
                    placeholder={props.currentInput}
                />
            </div>
        </div>
    )
}

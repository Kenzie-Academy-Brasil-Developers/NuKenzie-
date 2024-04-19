


export const TexteareaDescription = ({label, placeholder, id, newValue, setValue }) => {

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div>
            <label className="spans" htmlFor={id}>{label}</label>
            <textarea name={id} id={id} placeholder={placeholder} value={newValue} onChange={(event) => setValue(event.target.value)} />
        </div>
    )
}
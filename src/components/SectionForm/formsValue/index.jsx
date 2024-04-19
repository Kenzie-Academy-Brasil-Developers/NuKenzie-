import { useState } from "react"

export const InputsValues = () => {

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    
    const submit = () => {
        setDescription("")
        setValue("")
    }
    return (
        <div>
            <label htmlFor="">Descrição</label>
            <input type="text" placeholder="Digite aqui sua descrição" onChange={(event) => setDescription(event.target.value)} />
            <label htmlFor="">Valor (R$)</label>
            <input type="number" placeholder="1" onChange={(event) => setValue(event.target.value)}  /> 
         </div>
    )

}
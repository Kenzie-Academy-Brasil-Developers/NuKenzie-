import { useState } from "react";
import { Select } from "./select";
import { ResultValue } from "../ResultFinance";
import { InputValue } from "./input";
import { TexteareaDescription } from "./textearea";


export const FormValue = ({addValue}) => {

    
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    
    const submit = (event) => {
        event.preventDefault();
        addValue({value,description})
        setDescription("")
        setValue("")
    }
    return(
        <section>
            <form onSubmit={submit}>
                <TexteareaDescription name="Description" id="Description" label="Descrição" placeholder="Digite aqui sua descrição" newValue={description} setValue={setDescription} />
                <span className="spans form">Ex: Compra de roupas</span>
                <InputValue label="Valor (R$)" placeholder="1" type="number" id="number" valueFinance={value} setValueFinance={setValue} />
                <Select />
                <button className="bntAddValue" type="submit">Inserir Valor</button>
            </form>
            <ResultValue />
        </section>
    )
}
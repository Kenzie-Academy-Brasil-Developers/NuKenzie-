import { useState } from "react"

export const Select = () => {

    const [selectValue, setValue] = useState("");

    const SelectChange = (e) =>{
        setValue(e.target.value)
     
        console.log({selectValue})
    }
    return(
        <div>
            <label className="spans" htmlFor="">Tipo de valor</label>
                <select value={selectValue} onChange={SelectChange} name="type" id="">
                    <option  value="option 1">despesa</option>
                    <option  value="option 2">entrada</option>
                </select>
        </div>
      
    )
}
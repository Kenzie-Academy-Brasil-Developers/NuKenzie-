import { useState } from "react"
import { FormValue } from "../SectionForm"
import { FinancialList } from "./lists"
import { v4 as uuidv4 } from 'uuid';

export const SectFinance = () => {
    const [nodeList, setNodeList] = useState([]);

    const addValue = (newData) => {
        const newValueData = {...newData, id: uuidv4() }
        
         setNodeList([...nodeList, newValueData])
    }

    const deleteCard = (removeId) => {
        const newList = nodeList.filter(node => node.id !== removeId)
        setNodeList(newList)
    }
    return(
        <>
        <FormValue addValue={addValue} />
        <FinancialList nodeList={nodeList} deleteCard={deleteCard} /> 
        </>
        
    )
}
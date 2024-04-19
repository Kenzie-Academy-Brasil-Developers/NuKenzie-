
export const Cards = ({description, id, type, value, deleteCard}) => {
    return(

        <li>
        <div>
            <h2 className="title three">{description}</h2>
            <span className="title body">{type}</span>
        </div>
        <div>
            <p className="title body">{value}</p>
            <button className="bntDelete" onClick={() => deleteCard(id)}>Excluir</button> 
        </div>
    </li>
    )
}
import { Cards } from "../cards"


export const FinancialList = ({nodeList, deleteCard }) => {
    return(
        <section>
            <h1 className="title three">Resumo Financeiro</h1>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <ul>
                {nodeList.map(node => (
                    <Cards key={node.id} id={node.id} description={node.description} value={node.value} type={node.type} deleteCard={deleteCard} />
                ))}
            </ul>

            <div>
                <h2 className="title three">Valor Total</h2>
                <p className="title body">O Valor se refere ao saldo</p>
            </div>
            <div>
                <p className="title three one">R$ 888,00</p>
            </div>
        </section>
    )
}
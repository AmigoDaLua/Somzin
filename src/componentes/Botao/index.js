import "./Botao.css"


// "children" é tudo que está DENTRO DO COMPONENTE
const Botao = (props) => {
    return (
        <button className="botao">
            {props.children}
        </button>
    )
}

export default Botao
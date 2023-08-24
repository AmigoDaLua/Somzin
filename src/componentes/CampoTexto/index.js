import "./CampoTexto.css"

// O React entrega o "props" nativamente (como o "evento", no navegador)
const CampoTexto = (props) => {

    // Pegando a "prop" correta para preencher o componente
    const placeholderModificado = `${props.placeholder}`

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input  value={props.valor} onChange={aoDigitar} required={props.required} placeholder={placeholderModificado}/>
        </div>
    )
}

export default CampoTexto
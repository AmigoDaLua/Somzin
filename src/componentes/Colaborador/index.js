import "./Colaborador.css"

// Passando as "props" separadas como objetos individuais:
// Ao invés de enviar tudo, enviamos somente aquilo que interessa
// para aquele componente -- o que pode levar a PROP DRILLING: algo que 
// NÃO É BOM :O
const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className="rodape">
                <h4 >{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador
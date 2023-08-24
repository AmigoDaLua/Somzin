import Colaborador from "../Colaborador"
import "./Time.css"

// O Time é um "DUMB COMPONENT": só recebe parâmetros do "props" e exibe na tela
const Time = (props) => {
    const estiloCss = { backgroundColor: props.corSecundaria }

    // O início do return mostra como o React usa CONDICIONAIS 
    // para renderizar ou não o conteúdo:
    //  <condicional> + && + <coisaParaRenderizar>
    //                      ou
    //  "props.colaboradores.length > 0" + && + <section .../>
    return (
        props.colaboradores.length > 0 && <section className="time" style={estiloCss} >
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="colaboradores">
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria}/>)}
            </div>
        </section>

    // Versão do mesmo código acima mas com OPERADOR TERNÁRIO:

       // (props.colaboradores.length >) ? <section className="time" style={estiloCss} >
            // <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            // <div className="colaboradores">
            // {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            // </div>
       // </section>
       // : "" (ou, "do contrário, nada--string vazia!")

    )
}

export default Time
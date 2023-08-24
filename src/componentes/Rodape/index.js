import "./Rodape.css"

const Rodape = () => {
    return(
        <section className="Rodape">
           <img className="Rodape__logo" src="/imagens/banner_somzin.svg" alt="logo da Organo"></img>
           <p>Desenvolvido por <a className="Rodape__link" rel="noreferrer" href="https://github.com/AmigoDaLua" target="_blank">Matheus Pantunes</a></p> 
        </section>
    )
}

export default Rodape
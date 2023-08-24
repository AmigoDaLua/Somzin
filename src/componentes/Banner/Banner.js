import "./Banner.css"

function Banner() {
    return (
        //JSX --> forma como o React trabalha com a parte VISUAL
        <header className="banner">
            <img className="banner__logo" src="/imagens/banner_somzin.svg" alt="Banner principal da página do Organo"></img>
        </header>
       )
}

export default Banner
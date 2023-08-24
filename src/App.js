import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/';
import Time from './componentes/Time/';
import Rodape from './componentes/Rodape/index.js';

// import CampoTexto from './componentes/CampoTexto/'; // <-- Se você nomeia o componente de "index.js" na pasta, pode omitir o nome aqui (só precisa do nome da pasta)

function App() {

  // Objeto com todos os times e suas propriedades
  const times = [
    {
      "nome": "Samba",
      "corPrimaria": "#57c278",
      "corSecundaria": "#d9f7e9"
    },
    {
      "nome": "Rock",
      "corPrimaria": "#82CFFA",
      "corSecundaria": "#E8F8FF"
    },
    {
      "nome": "Pagode",
      "corPrimaria": "#A6D157",
      "corSecundaria": "#F0F8F2"
    },
    {
      "nome": "Pop",
      "corPrimaria": "#E06B69",
      "corSecundaria": "#FDE7E8"
    },
    {
      "nome": "Forró",
      "corPrimaria": "#DB6EBF",
      "corSecundaria": "#FAE9F5"
    },
    {
      "nome": "Funk",
      "corPrimaria": "#FF8A05",
      "corSecundaria": "#FFF5D9"
    },
    {
      "nome": "Axé",
      "corPrimaria": "#FF8A29",
      "corSecundaria": "#FFEEDF"
    }
  ]

  const [colaboradores, setColaboradores] = useState([]) // Aqui o <useState> é uma lista porque vai receber uma lista de colaboradores e não apenas um

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    //Aqui o setColabs. está pegando todos os colaboradores
    // que já existem e, no final, da array deles, ADICIONANDO o novo
  }


  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {/* Renderizando times dinamicamente a partir da array "times" */}
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} // <-- podia ter usado isso aqui pra filtrar as categorias no Alurageek D:
      />)}
      
      <Rodape />
    </div>
  );
}

export default App;

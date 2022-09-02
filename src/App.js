import './App.css';
import Evento from './Evento';
import TipoIngresso from './TipoIngresso';
import Contador from './Contador';

function App() {

  let name = 'anderson';
  const data = '22/08';
  const hr = '20:16';
  let local = 'fag';
  let cidade = 'cascavel';
  const genero = 'Masculino';

  let camaroteOpen = 'CamaroteOpen : $';
  const camarote = 'Camarote : $';
  const FrontStage = 'Front-Stage : $';
  let pista = 'Pista : $';

  let camaroteOpenPreco = 150;
  let camarotePreco = 100;
  let FrontStagePreco = 60;
  let pistaPreco = 30;


  return (
    <div className="App">
      <header className="App-header">
       <h1>Anderson da Rocha Ritter</h1>
      </header>
      
        <Evento 
         name={name}
         dia={data}
         hr={hr}
         local={local}
         cidade={cidade}
         genero={genero}
         /> 

         <h1>Ingressos</h1>

        <TipoIngresso 
         camaroteOpen={camaroteOpen}
         camarote={camarote}
         FrontStage={FrontStage}
         pista={pista}
        
         preco1={camaroteOpenPreco}
         preco2={camarotePreco}
         preco3={FrontStagePreco}
         preco4={pistaPreco}
         /> 
    
        <h1>CONTADOR</h1>
        
        <Contador/>

    </div>
  );
}

export default App;

import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Quotes from "./components/Quotes";
import "./App.css";

function App() {

  //Obteniendo registros del Local Storage - JSON = ArrayList
  let iniQuotes = JSON.parse(localStorage.getItem('quotes'));
  if(!iniQuotes){
    iniQuotes = [];

  }
  //useState inicial de los registros de localStorage
  const [quotes, saveQuote]= useState(iniQuotes);

  //useEffect (document.ready)
  useEffect( () => {
      //Guardando quotes en el localStorage
      localStorage.setItem('quotes', JSON.stringify(quotes));//ArrayList = JSON
  }, [quotes]); //Inicializa cada que hay cambios en quotes
  

  //Función para guardar los datos ingresados en la cita 
  const newQuote =  (quote) => {
    // console.log(quote)
    saveQuote([...quotes,
      quote])
  }

  //Función filtrar por id
  const eliminarMeet = id => {
    const newQuote = quotes.filter(corredor2 => corredor2.id !== id);
    saveQuote(newQuote);
  }


  return (
    <Fragment>
      <div className="app">
        <div className="Window">
          <div className="title">
            <h1>&#x2396; schedule</h1>
          </div>
          <Form
          newQuote={newQuote}
           />
        </div>
        <div className="quotes">
        {quotes.map( corredor1 => (
          <Quotes
          key={corredor1.id}
          quotes={corredor1}
          eliminarMeet={eliminarMeet}
          />
       
        ))}
        </div>
        
    
        </div>
    </Fragment>
  );
}

export default App;

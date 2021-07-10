import React from "react";

const Quotes = ({ quotes, eliminarMeet }) => {
  const { asunto, nombre, fecha, hora, desc, id} = quotes;


  return (
      <div className="quote">
      <div className="head">
      <h3>{asunto}</h3>
        <button
        onClick={ () => eliminarMeet (id)}
        >&#x2705;&#xfe0e;
        </button>
      </div>
        
        <p>
          <span>nombre</span>
          {nombre}
        </p>
        <p><span>fecha</span>{fecha}</p>
        <p><span>hora</span>{hora}</p>
        <p><span>resumen</span>{desc}</p>
      </div>
  );
};

export default Quotes;

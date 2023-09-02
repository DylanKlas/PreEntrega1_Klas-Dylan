import React from "react";

const Greetings = ({ mensajePrincipal, mensajeSecundario }) => {
  return (
    <>
      <div>
        <h2>{mensajePrincipal}</h2>
      </div>
      <div>
        <h3>{mensajeSecundario}</h3>
      </div>
    </>
  );
};

export default Greetings;

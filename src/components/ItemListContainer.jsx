import React from "react";
import Greetings from "./Greetings";

const ItemListContainer = () => {
  const mensajePrincipal = "Bienvenido a Lapse! ";
  const mensajeSecundario = "Sentite cómodo de explorar los nuevos diseños";
  
  return (
    <>
      <Greetings
        mensajePrincipal={mensajePrincipal}
        mensajeSecundario={mensajeSecundario}
      />
    </>
  );
};

export default ItemListContainer;

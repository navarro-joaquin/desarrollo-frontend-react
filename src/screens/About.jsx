import { useSelector } from "react-redux";
import { useState } from "react";

const About = () => {
  // Los hooks en react son funciones ya definidas
  // Los hooks siempre tienen el prefijo use
  // hook useState, useEffect, useContext, useRef, useTransition
  // Es posible crear nuestros propios hooks: useService, useImage, useForm

  // El book useState me permite manejar variables de estado

  const [nameComponent, setNameComponent] = useState('About')

  const initialValue = useSelector((state) => state.product.initialValue);
  return (
    <>
      <p>Component Name: {nameComponent}</p>
      <p>Initial Value: {initialValue}</p>
      <button onClick={() => {setNameComponent('Curso de React')}}>Press</button>
    </>
  );
}

export default About;
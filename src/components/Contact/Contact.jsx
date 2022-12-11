import React from "react";
import { useState,useContext } from "react";
import { useRef } from "react";
import './Contact.css'
import {themeContext} from '../context/Context';

const Contact = () => {
  const theme= useContext(themeContext)
  const darkMode= theme.state.darkMode;

    const form = useRef();

    const [done,SetDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
        SetDone(true)
      
    };
  return (
    <div className="contact-form" id='contactame'>
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode?'white':''}}>ponte en contacto</span>
          <span >contactame</span>
          <div
            className="blur s-blur1"
            style={{ background: "#abf1ff94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='user_name' className="user" placeholder="Nombre"/>
        <input type='email' name="user_email" className="user" placeholder="Correo"/>
        <textarea name="mensaje" className="user" placeholder="mensaje"/>
        <input type='submit' value='Enviar' className="button" />
        <span>{done && 'Gracias por contactarme'}</span>
        <div className="blur c-blur1" style={{background:'var(--purpura)'}}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

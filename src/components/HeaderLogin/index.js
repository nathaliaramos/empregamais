import React from "react";
import logo from "../../utils/logo.png"
import vagas from "../../utils/vagas.jpeg"
import "../Header/index.css"

const HeaderLogin = () => (
   <div className="header">
      <a href="./login.js"><img src={logo} className="img-logo" alt="logo"></img></a>
      <a href="./login.js" className="vagas"><img src={vagas} className="img-vagas" alt="vagas"></img>
      </a><a href="./login.js"><h3>Vagas</h3></a>

      <h1 className="risco">|</h1>
      <a href="./login.js"><div className="botao"> Cadastre-se </div></a>
   

   </div>
);
export default HeaderLogin;
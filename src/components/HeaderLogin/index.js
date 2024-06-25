import React from "react";
import logoL from "../../utils/logo.png"
import vagas from "../../utils/vagas.jpeg"
import "../HeaderLogin/index.css"

const HeaderLogin = () => (
   <div className="headerLogin">
      <a href="./login.js"><img src={logoL} className="img-logoL" alt="logoL"></img></a>
      <a href="./login.js" className="vagas"><img src={vagas} className="img-vagas" alt="vagas"></img>
      </a><a href="./login.js"><h3 className="vougue">Vagas</h3></a>

      <h1 className="risco">|</h1>
      <a href="./login.js"><div className="botao"> Cadastre-se </div></a>
   

   </div>
);
export default HeaderLogin;
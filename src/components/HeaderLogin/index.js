import React from "react";
import logoL from "../../utils/logo.png"
import vagas from "../../utils/vagas.jpeg"
import "../HeaderLogin/index.css"

const HeaderLogin = () => (
   <div className="headerLogin">
      <a href="/"><img src={logoL} className="img-logoL" alt="logoL"></img></a>
      <a href="/main/available-jobs" className="vagas"><img src={vagas} className="img-vagas" alt="vagas"></img>
      </a><a href="/main/available-jobs"><h3 className="vougue">Vagas</h3></a>

      <h1 className="risco">|</h1>
      <a href="/"><div className="botao"> Cadastre-se </div></a>
      {/* colocar aqui o link para tela de cadastro de aluno ou empresa */}
   

   </div>
);
export default HeaderLogin;
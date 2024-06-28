import React, { useState } from "react";
import logoL from "../../utils/logo.png";
import vagas from "../../utils/vagas.jpeg";
import "../HeaderLogin/index.css";
import { useNavigate } from "react-router-dom";

const HeaderLogin = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleOptionClick = (tipo) => {
    setShowPopup(false);
    if (tipo === "aluno") {
      navigate("/cadastro-aluno");
    } else if (tipo === "empresa") {
      navigate("/cadastro-empresa");
    }
  };

  return (
    <div className="headerLogin">
      <a href="/">
        <img src={logoL} className="img-logoL" alt="logoL"></img>
      </a>
      <a href="/main/available-jobsD" className="vagas">
        <img src={vagas} className="img-vagas" alt="vagas"></img>
      </a>
      <a href="/main/available-jobsD">
        <h3 className="vougue">Vagas</h3>
      </a>

      <h1 className="risco">|</h1>
      <button className="botao" onClick={handleButtonClick}>
        Cadastre-se
      </button>

      {showPopup && (
        <div className="popup">
          <p>Selecione o tipo de cadastro:</p>
          <button onClick={() => handleOptionClick("aluno")}>Aluno</button>
          <button onClick={() => handleOptionClick("empresa")}>Empresa</button>
        </div>
      )}
    </div>
  );
};
export default HeaderLogin;

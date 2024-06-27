import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    user: "aluno",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    if (formData.user === "aluno") {
      navigate("/main/company-jobs");
    } else if (formData.user === "empresa") {
      navigate("/main/applied-jobs");
    }
  };

  return (
    <form className="form-containerL" onSubmit={handleSubmit}>
      <h1 className="titleL">Entrar</h1>
      <div className="form-section">
        <div className="input-groupL">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemplo@exemplo.com"
              required
            />
          </label>
        </div>
        <div className="input-groupL">
          <label>
            Senha
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="exemplo123"
              required
            />
          </label>
        </div>
        <div className="radios">
          <label>
            <input
              type="radio"
              name="user"
              value="aluno"
              onChange={handleChange}
              checked={formData.user === "aluno"}
            />{" "}
            Aluno
          </label>
          <label>
            <input
              type="radio"
              name="user"
              value="empresa"
              onChange={handleChange}
              checked={formData.user === "empresa"}
            />{" "}
            Empresa
          </label>
        </div>
      </div>
      <p className="forgot-password">
        <a href="./login.js">Esqueceu sua senha?</a>
      </p>
      <button className="submeter" type="submit">
        ENTRAR
      </button>
      <p className="signup-text">
        Não tem uma conta? <a href="/">Cadastre-se já!</a>
      </p>
    </form>
  );
};

export default Form;

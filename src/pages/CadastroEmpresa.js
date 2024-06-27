import React, { useState } from "react";
import "./CadastroEmpresa.css";

function CadastroEmpresa({ onRegister }) {
  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    dataFundacao: "",
    setor: "",
    email: "",
    telefone: "",
    celular: "",
    whatsapp: false,
    cep: "",
    cidadeEstado: "",
    bairro: "",
    rua: "",
    numero: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <div className="cadastro-empresa-container">
      <h1>Cadastro de Empresa</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Informações da Empresa</h2>
          <label>Nome da Empresa*</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <label>CNPJ*</label>
          <input
            type="text"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
            required
          />
          <label>Data de Fundação*</label>
          <input
            type="date"
            name="dataFundacao"
            value={formData.dataFundacao}
            onChange={handleChange}
            required
          />
          <label>Setor*</label>
          <input
            type="text"
            name="setor"
            value={formData.setor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-section">
          <h2>Informações Para Contato</h2>
          <label>E-mail*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Telefone*</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          <label>Celular*</label>
          <input
            type="text"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
          <label>
            <input
              type="checkbox"
              name="whatsapp"
              checked={formData.whatsapp}
              onChange={handleChange}
            />{" "}
            Possuo Whatsapp com esse número
          </label>
        </div>
        <div className="form-section">
          <h2>Informações Para Localização</h2>
          <label>CEP*</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            required
          />
          <label>Cidade/Estado*</label>
          <input
            type="text"
            name="cidadeEstado"
            value={formData.cidadeEstado}
            onChange={handleChange}
            required
          />
          <label>Bairro*</label>
          <input
            type="text"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            required
          />
          <label>Rua*</label>
          <input
            type="text"
            name="rua"
            value={formData.rua}
            onChange={handleChange}
            required
          />
          <label>Número*</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-section">
          <h2>Informações de Login</h2>
          <label>Nome de Usuário*</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label>Senha*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">CADASTRAR</button>
      </form>
    </div>
  );
}

export default CadastroEmpresa;

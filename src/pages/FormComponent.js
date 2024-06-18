import React, { useState } from "react";
import "./FormComponent.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    cpf: "",
    cep: "",
    cityState: "",
    neighborhood: "",
    street: "",
    number: "",
    email: "",
    phone: "",
    gender: "",
    disability: "",
    disabilityType: "",
    educationLevel: "",
    course: "",
    institution: "",
    area: "",
    hours: "",
    jobTitle: "",
    lastEducationLevel: "",
    formation: "",
    jobType: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    companyName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form submission logic here
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Cadastre seu currículo!</h1>
      <div className="form-section">
        <h2>Informações Pessoais</h2>
        <label>
          Nome*
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Data de Nascimento*
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          CPF*
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="form-section">
        <h2>Informações Para Localização</h2>
        <label>
          CEP*
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cidade/Estado*
          <input
            type="text"
            name="cityState"
            value={formData.cityState}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Bairro*
          <input
            type="text"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Rua*
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Número*
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="form-section">
        <h2>Informações Para Contato</h2>
        <label>
          E-mail*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Celular*
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="form-section">
        <h2>Informações Do Perfil</h2>
        <label>
          Gênero
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </label>
        <label>
          Possui Deficiência (PCD)?
          <input
            type="text"
            name="disability"
            value={formData.disability}
            onChange={handleChange}
          />
        </label>
        <label>
          Tipo de Deficiência
          <input
            type="text"
            name="disabilityType"
            value={formData.disabilityType}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-section">
        <h2>Informações Acadêmicas</h2>
        <label>
          Escolaridade*
          <input
            type="text"
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cursos
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
        </label>
        <label>
          Instituição de ensino*
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Área de atuação
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
          />
        </label>
        <label>
          Horas*
          <input
            type="text"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="form-section">
        <h2>Informações Para Candidatura</h2>
        <label>
          Função pretendida*
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nível da última formação*
          <input
            type="text"
            name="lastEducationLevel"
            value={formData.lastEducationLevel}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Formação*
          <input
            type="text"
            name="formation"
            value={formData.formation}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="form-section">
        <h2>Informações Profissionais</h2>
        <label>
          Tipo de emprego
          <input
            type="text"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          />
        </label>
        <label>
          Início*
          <input
            type="text"
            name="startMonth"
            value={formData.startMonth}
            onChange={handleChange}
            required
          />
          /
          <input
            type="text"
            name="startYear"
            value={formData.startYear}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Término*
          <input
            type="text"
            name="endMonth"
            value={formData.endMonth}
            onChange={handleChange}
            required
          />
          /
          <input
            type="text"
            name="endYear"
            value={formData.endYear}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nome da empresa*
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button type="submit">CADASTRAR</button>
    </form>
  );
};

export default FormComponent;

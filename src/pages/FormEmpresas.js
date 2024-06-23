import React, { useState } from 'react';
import "./FormEmpresas.css";



const FormEmpresas = () => {
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
            <h1>Cadastre sua vaga!</h1>
            <div className="form-section">
                <h2>Informações da Empresa</h2>
                <label>
                    Nome da Empresa*
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Data de Criação da Empresa*
                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    CNPJ*
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
                <h2>Informações Da Vaga</h2>
                <label>
                    Tipo de Vaga (PJ, CLT)
                    <input
                        type="text"
                        name="vaga"
                        value={formData.vaga}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Módulo de emprego (Home Office, Presencial)
                    <input
                        type="text"
                        name="modulo"
                        value={formData.modulo}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Você está abrindo vaga para
                    <input
                        type="text"
                        name="tipo"
                        value={formData.tipo}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Jornada de trabalho
                    <input
                        type="text"
                        name="jornada"
                        value={formData.jornada}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Salário estipulado
                    <input
                        type="text"
                        name="salario"
                        value={formData.salario}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Beneficios (Se tiver)
                    <input
                        type="text"
                        name="beneficios"
                        value={formData.beneficios}
                        onChange={handleChange}
                    />
                </label>

            </div>

            <div className="form-section">
                <h2>Exigências da vaga</h2>
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
                    Nivel de profissionalismo
                    <input
                        type="text"
                        name="profissionalismo"
                        value={formData.profissionalismo}
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
                    Função*
                    <input
                        type="text"
                        name="funcao"
                        value={formData.funcao}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Cargo*
                    <input
                        type="text"
                        name="cargo"
                        value={formData.cargo}
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
            </div>

            <button type="submit">CADASTRAR</button>
        </form>
    );
};

export default FormEmpresas;

import React, { useState } from "react";
import "./form.css";
const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        user: ""

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
        <form className="form-containerL" onSubmit={handleSubmit}>
            <h1 className="titleL">Entrar</h1>
            <div className="form-section">
                <div className="input-groupL">
                </div>
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
                <div class="input-groupL">
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
                    <input
                        type="radio"
                        name="usuario"
                        value={formData.user}
                        onChange={handleChange}
                        checked
                    /> Aluno
                    <input
                        type="radio"
                        name="usuario"
                        value={formData.user}
                        onChange={handleChange}
                    /> Empresa
                </div>
            </div>
             <p class="forgot-password"><a href="./login.js">Esqueceu sua senha?</a></p>
            <button className="submeter" type="submit" >ENTRAR</button>
            {/* colocar aqui o caminho relativo ao imput radio */}
            <p class="signup-text">Não tem uma conta? <a href="#">Cadastre-se já!</a></p>
        </form>
    );
};
export default Form;
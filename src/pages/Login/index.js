import React from "react";
import "../Login/index.css"
import foto from "../../utils/Foto.png"
import HeaderLogin from "../../components/HeaderLogin/index";
import Form from "./form";
import foto2 from "../../utils/Foto2.png"
const Login = () => (

    <div>
        <HeaderLogin />
        <div className="container">
            <div className="texto1">
                <h1>Encontre a <span>Oportunidade</span> Perfeita para Seu Futuro</h1>
                <h4>
                    <p>Na EmpregaMais, conectamos alunos talentosos com as melhores oportunidades de emprego.
                    </p>
                    <p>Se você está em busca do estágio dos seus sonhos ou do primeiro passo na sua carreira, está no lugar certo. Cadastre seu currículo, explore vagas abertas pelas empresas e dê um grande passo rumo ao sucesso profissional.</p>
                </h4>
            </div>

            <div className="fundo" />
            <div className="entrar">
                <Form />
            </div>
        </div>
        <br></br>
        <br></br>
        <img src={foto} alt="estudante" className="estudante" />
        <div className="texto2">
            <h1>Por Que Escolher a <span>EmpregaMais</span>?</h1>
            <h4>
                <p>Oportunidades Exclusivas: Encontre vagas que combinam com suas habilidades e aspirações.</p>
                <p>Fácil de Usar: Nossa plataforma intuitiva facilita o cadastro e a candidatura às vagas.</p>
                <p>Conexões Valiosas: Conecte-se com empresas que estão procurando talentos como você.</p>
            </h4>

        </div>
        <div className="texto3">
            <h1>Como <span>Funciona</span>?</h1>
            <h4>
                <p>Cadastre-se: Crie sua conta gratuita em minutos.</p>
                <p>Complete seu Perfil: Adicione suas informações, habilidades e preferências de emprego.</p>
                <p>Explore Vagas: Navegue por vagas exclusivas e receba recomendações personalizadas.</p>
                <p>Candidate-se: Envie seu currículo diretamente pela plataforma.</p>
                <p>Conecte-se: Entre em contato com empregadores e participe de entrevistas.</p>
            </h4>

        </div>
        <img src={foto2} alt="estudante2" className="estudante2" />
    </div>

);
export default Login;

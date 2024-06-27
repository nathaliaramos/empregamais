import React, { useState } from "react";
import "./EditProfile.css";

function EditProfile() {
  const [courses, setCourses] = useState([
    { curso: "", instituicao: "", horas: "" },
  ]);

  const handleAddCourse = () => {
    setCourses([...courses, { curso: "", instituicao: "", horas: "" }]);
  };

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = courses.map((course, i) =>
      i === index ? { ...course, [field]: value } : course
    );
    setCourses(updatedCourses);
  };

  return (
    <div className="edit-profile-container">
      <h1>Editar Perfil</h1>
      <form>
        <div className="form-section">
          <h2>Informações Pessoais</h2>
          <label>Nome*</label>
          <input type="text" required defaultValue="Nome Atual" />
          <label>Data de Nascimento*</label>
          <input type="date" required defaultValue="2000-01-01" />
          <label>CPF*</label>
          <input type="text" required defaultValue="123.456.789-00" />
        </div>
        <div className="form-section">
          <h2>Informações Para Localização</h2>
          <label>CEP*</label>
          <input type="text" required defaultValue="00000-000" />
          <label>Cidade/Estado*</label>
          <input type="text" required defaultValue="Cidade/Estado" />
          <label>Bairro*</label>
          <input type="text" required defaultValue="Bairro Atual" />
          <label>Rua*</label>
          <input type="text" required defaultValue="Rua Atual" />
          <label>Número*</label>
          <input type="text" required defaultValue="123" />
        </div>
        <div className="form-section">
          <h2>Informações Para Contato</h2>
          <label>E-mail*</label>
          <input type="email" required defaultValue="email@exemplo.com" />
          <label>Celular*</label>
          <input type="text" required defaultValue="(00) 00000-0000" />
          <label>
            <input type="checkbox" /> Possuo Whatsapp com esse número
          </label>
        </div>
        <div className="form-section">
          <h2>Informações Acadêmicas</h2>
          <label>Escolaridade*</label>
          <select required>
            <option value="">Selecione</option>
            <option value="ensino_medio" selected>
              Ensino Médio
            </option>
            <option value="graduacao">Graduação</option>
            <option value="pos_graduacao">Pós-Graduação</option>
          </select>
          {courses.map((course, index) => (
            <div key={index} className="course-section">
              <label>Curso</label>
              <input
                type="text"
                value={course.curso}
                onChange={(e) =>
                  handleCourseChange(index, "curso", e.target.value)
                }
              />
              <label>Instituição de ensino*</label>
              <input
                type="text"
                required
                value={course.instituicao}
                onChange={(e) =>
                  handleCourseChange(index, "instituicao", e.target.value)
                }
              />
              <label>Horas*</label>
              <input
                type="number"
                required
                value={course.horas}
                onChange={(e) =>
                  handleCourseChange(index, "horas", e.target.value)
                }
              />
            </div>
          ))}
          <button type="button" onClick={handleAddCourse}>
            Adicionar outro curso
          </button>
        </div>
        <div className="form-section">
          <h2>Informações Do Perfil</h2>
          <label>Gênero</label>
          <label>
            <input type="radio" name="genero" value="masculino" checked />{" "}
            Masculino
          </label>
          <label>
            <input type="radio" name="genero" value="feminino" /> Feminino
          </label>
          <label>
            <input type="radio" name="genero" value="outros" /> Outros
          </label>
          <label>Possui Deficiência (PCD)?</label>
          <label>
            <input type="radio" name="pcd" value="sim" /> Sim
          </label>
          <label>
            <input type="radio" name="pcd" value="nao" checked /> Não
          </label>
          <label>Tipo de Deficiência</label>
          <input type="text" />
        </div>
        <div className="form-section">
          <h2>Informações Profissionais</h2>
          <label>
            <input type="checkbox" /> Não possuo experiência
          </label>
          <label>Título</label>
          <input type="text" defaultValue="Título Atual" />
          <label>Tipo de emprego</label>
          <select>
            <option value="">Selecione</option>
            <option value="integral" selected>
              Integral
            </option>
            <option value="meio_periodo">Meio Período</option>
            <option value="temporario">Temporário</option>
          </select>
          <label>Início*</label>
          <input type="month" required defaultValue="2020-01" />
          <label>Término*</label>
          <input type="month" required defaultValue="2023-01" />
          <label>Nome da empresa*</label>
          <input type="text" required defaultValue="Empresa Atual" />
        </div>
        <button type="submit">SALVAR</button>
      </form>
    </div>
  );
}

export default EditProfile;

import React from 'react';
import JobList from './JobList';
import './styles.css';
import logo from './logo.png'; 

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <button className="nav-button">Início</button>
          <button className="nav-button">Cadastre-se</button>
        </nav>
      </header>
      <div className="main-content">
        <JobList />
      </div>
    </div>
  );
};

export default App;

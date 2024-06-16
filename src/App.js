import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { FaHome, FaUserEdit, FaBriefcase } from 'react-icons/fa';
import logo from './logo.png';
import styled from 'styled-components';
import AppliedJobs from './AppliedJobs';
import AvailableJobs from './AvailableJobs';

const WelcomeText = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #0D3FBF;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: white;
  color: #0D3FBF;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  margin-left: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const NavButton = styled.button`
  background-color: #F33A6A;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

const Footer = styled.footer`
  background-color: #0D3FBF;
  color: white;
  padding: 20px;
  text-align: left;
  font-size: 18px;
`;

const FooterSeparator = styled.hr`
  width: 80%;
  margin: 0 auto;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

const FooterColumns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const FooterColumn = styled.div`
  flex: 1;
  padding: 10px;
  max-width: 300px;
`;

const FooterHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  white-space: nowrap;
`;

const FooterList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const FooterListItem = styled.li`
  margin: 10px 0;
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Header>
          <Logo src={logo} alt="Logo" />
          <Nav>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <NavButton>
                <FaHome /> Início
              </NavButton>
            </Link>
            <Link to="/available-jobs" style={{ textDecoration: 'none' }}>
              <NavButton>
                <FaBriefcase /> Vagas
              </NavButton>
            </Link>
            <NavButton>
              <FaUserEdit /> Editar Perfil
            </NavButton>
          </Nav>
        </Header>
        <MainContent>
          <Routes>
            <Route path="/" element={<AppliedJobs />} />
            <Route path="/available-jobs" element={<AvailableJobs />} />
          </Routes>
        </MainContent>
        <Footer>
          <FooterSeparator />
          <FooterColumns>
            <FooterColumn>
              <FooterHeading>Sobre nós</FooterHeading>
              <FooterList>
                <FooterListItem>Quem somos</FooterListItem>
                <FooterListItem>Nossa missão</FooterListItem>
                <FooterListItem>Blog</FooterListItem>
              </FooterList>
            </FooterColumn>
            <FooterColumn>
              <FooterHeading>Suporte</FooterHeading>
              <FooterList>
                <FooterListItem>FAQ</FooterListItem>
                <FooterListItem>Contato</FooterListItem>
                <FooterListItem>Termos de Serviço</FooterListItem>
                <FooterListItem>Política de Privacidade</FooterListItem>
              </FooterList>
            </FooterColumn>
            <FooterColumn>
              <FooterHeading>Conecte-se Conosco</FooterHeading>
              <FooterList>
                <FooterListItem>Facebook</FooterListItem>
                <FooterListItem>Twitter</FooterListItem>
                <FooterListItem>LinkedIn</FooterListItem>
                <FooterListItem>Instagram</FooterListItem>
              </FooterList>
            </FooterColumn>
          </FooterColumns>
          <FooterBottom>
            <p>© 2024 EmpregaMais. Todos os direitos reservados.</p>
          </FooterBottom>
        </Footer>
      </AppContainer>
    </Router>
  );
};

export default App;

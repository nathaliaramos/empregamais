import React from "react";
import styled from "styled-components";
import FooterColumn from "./footer/FooterColumn";

const FooterContainer = styled.footer`
  background-color: #0d3fbf;
  color: white;
  padding: 20px;
  text-align: left;
  font-size: 18px;
`;

const Separator = styled.hr`
  width: 80%;
  margin: 0 auto;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;

const Columns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const Bottom = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Separator />
      <Columns>
        <FooterColumn
          title="Sobre nós"
          items={["Quem somos", "Nossa missão", "Blog"]}
        />
        <FooterColumn
          title="Suporte"
          items={[
            "FAQ",
            "Contato",
            "Termos de Serviço",
            "Política de Privacidade",
          ]}
        />
        <FooterColumn
          title="Conecte-se Conosco"
          items={["Facebook", "Twitter", "LinkedIn", "Instagram"]}
        />
      </Columns>
      <Bottom>
        <p>© 2024 EmpregaMais. Todos os direitos reservados.</p>
      </Bottom>
    </FooterContainer>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";

const Column = styled.div`
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

const FooterColumn = ({ title, items }) => {
  return (
    <Column>
      <FooterHeading>{title}</FooterHeading>
      <FooterList>
        {items.map((item, index) => (
          <FooterListItem key={index}>{item}</FooterListItem>
        ))}
      </FooterList>
    </Column>
  );
};

export default FooterColumn;

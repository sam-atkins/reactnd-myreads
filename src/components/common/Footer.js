import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2vh;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.div`
  font-size: 0.8em;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      Built with ♥ by <a href="https://github.com/cubiio">Cubiio</a>. View
      source code on{' '}
      <a href="https://github.com/cubiio/reactnd-myreads">Github</a>.
    </FooterText>
  </FooterWrapper>
);

export default Footer;

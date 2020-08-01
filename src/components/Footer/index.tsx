import React from 'react';
import { FooterBase } from './styles';

const Footer = () => {
  return (
    <FooterBase>
      <p>
        Made with by{' '}
        <a
          href="https://rayanneandrade.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rayanne Andrade
        </a>{' '}
        during the "Imersão React" event by{' '}
        <a
          href="https://alura.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alura
        </a>
        .
      </p>
    </FooterBase>
  );
};

export default Footer;

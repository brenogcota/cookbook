import React from 'react';

import { Link } from 'react-router-dom'

import { FooterContainer, FooterContent } from './styles';
import footerImage from '../../assets/cooker.png'

function Footer() {
  return (
      <FooterContainer>
          <img src={footerImage} alt=""/>

          <FooterContent>
              <h2>Quer receber receitas exclusivas?</h2>
              <h2>Conheça nosso e-book!</h2>
              <Link to="/">Acesse</Link>
          </FooterContent>
      </FooterContainer>
  );
}

export default Footer;
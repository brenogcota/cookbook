import React from 'react';
import { Link } from 'react-router-dom';

import { PageHeader } from './styles';

function Header() {
  return (
      <PageHeader>
        <Link to="/">
          <h2>Meu mundo doce</h2>
        </Link>
        <Link to="/">
          E-book
        </Link>
      </PageHeader>
  );
}

export default Header;
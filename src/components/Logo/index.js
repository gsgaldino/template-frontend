import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import logo from '~/assets/logo.svg';

export default function Logo() {
  return (
    <Link to="/">
      <S.Logo>
        <img src={logo} alt="My logo alternative" />
      </S.Logo>
    </Link>
  );
}

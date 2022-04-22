import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '~/components/Wrapper';
import Logo from '~/components/Logo';
import Button from '~/components/Button';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <Wrapper>
        <S.Header>
          <div>
            <Logo />
          </div>

          <div>
            <Link to="/">
              <Button type="ghost">home</Button>
            </Link>
            <Link to="/about">
              <Button type="ghost">about</Button>
            </Link>
            <Link to="/privacy-policy">
              <Button type="ghost">privacy policy</Button>
            </Link>
            <Button type="ghost">contact</Button>
          </div>
        </S.Header>
      </Wrapper>
    </S.Container>
  );
}

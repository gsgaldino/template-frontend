import React from 'react';

import Header from '../_layout/Header';
import Wrapper from '~/components/Wrapper';
import Typography from '~/components/Typography';

import * as S from './styles';

export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <S.Section>
        <Header />

        <Typography variant="body-default">Privacy Policy</Typography>
      </S.Section>
    </Wrapper>
  );
}

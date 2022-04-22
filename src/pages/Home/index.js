import React from 'react';

import Header from '../_layout/Header';
import Wrapper from '~/components/Wrapper';
import Typography from '~/components/Typography';
import Notification from '~/components/Notification';

import * as S from './styles';

export default function Home() {
  return (
    <Wrapper>
      <S.Section>
        <Header />

        <Typography variant="body-default">Home</Typography>
        <Notification
          title="My title"
          content="My content"
        />

      </S.Section>
    </Wrapper>
  );
}

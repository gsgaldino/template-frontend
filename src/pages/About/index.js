import React from 'react';

import Provider from '~/components/Provider';
import Typography from '~/components/Typography';

import * as S from './styles';

export default function About() {
  return (
    <Provider>
      <S.Section>

        <Typography variant="body-default">About</Typography>

      </S.Section>
    </Provider>
  );
}

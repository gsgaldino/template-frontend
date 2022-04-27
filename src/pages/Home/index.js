import React from 'react';

import Provider from '~/components/Provider';

import Main from './components/Main';

import * as S from './styles';

export default function Home() {
  return (
    <Provider>
      <S.Section>

        <Main />

      </S.Section>
    </Provider>
  );
}

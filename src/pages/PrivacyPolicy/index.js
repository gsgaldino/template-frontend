import React from 'react';

import Provider from '~/components/Provider';
import Typography from '~/components/Typography';

import * as S from './styles';

export default function PrivacyPolicy() {
  return (
    <Provider>
      <S.Section>

        <Typography variant="body-default">Privacy Policy</Typography>

      </S.Section>
    </Provider>
  );
}

import React from 'react';
import Spinner from '../Spinner';

import * as S from './styles';

function LoadingFullScreen() {
  return (
    <S.Background>
      <Spinner />
    </S.Background>
  );
}

export default LoadingFullScreen;

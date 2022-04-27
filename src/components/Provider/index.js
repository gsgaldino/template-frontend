import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

const Provider = forwardRef((props, ref) => (
  <S.Provider ref={ref}>{props.children}</S.Provider>
));

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

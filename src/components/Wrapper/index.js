import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

const Wrapper = forwardRef((props, ref) => (
  <S.Wrapper ref={ref}>{props.children}</S.Wrapper>
));

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;

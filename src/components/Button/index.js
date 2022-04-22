import React, { forwardRef } from 'react';
import cc from 'classcat';

import PropTypes from 'prop-types';

import * as S from './styles';

const Button = forwardRef((props, ref) => (
  <S.Button className={cc([props.type])} ref={ref}>
    {props.children}
  </S.Button>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['contained', 'outlined', 'ghost']),
};

Button.defaultProps = {
  type: 'contained',
};

export default Button;

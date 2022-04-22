import React from 'react';
import PropTypes from 'prop-types';

import cc from 'classcat';

import * as S from './styles';

function Typography({ variant, children, as }) {
  return (
    <S.Container as={as} className={cc([variant])}>
      {children}
    </S.Container>
  );
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  variant: PropTypes.oneOf(['body-default', 'h1-normal']),
};

Typography.defaultProps = {
  as: 'p',
  variant: 'body-default',
};

export default Typography;

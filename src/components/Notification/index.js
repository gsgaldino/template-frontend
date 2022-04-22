import React from 'react';
import PropTypes from 'prop-types';

import Typography from '../Typography';

import * as S from './styles';

function Notification({ title, content }) {
  return (
    <S.Container>
      <Typography variant="h3-normal">{title}</Typography>
      <Typography variant="body-default">{content}</Typography>
    </S.Container>
  );
}

Notification.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Notification.defaultProps = {
  title: '',
  content: '',
};

export default Notification;

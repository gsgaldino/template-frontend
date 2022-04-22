import styled, { css } from 'styled-components';

const BodyDefault = css`
  font-size: var(--body-default-font-size);
`;

const h1Normal = css`
  &.h1-normal {
    font-size: 2em;
  }
`;

const h1Heavy = css`
  &.h1-heavy {
    font-size: 2em;
    font-weight: bold;
  }
`;

const h2Normal = css`
  &.h2-normal {
    font-size: 1.8em;
  }
`;

const h2Heavy = css`
  &.h2-heavy {
    font-size: 1.8em;
    font-weight: bold;
  }
`;

const h3Normal = css`
  &.h3-normal {
    font-size: 1.6em;
  }
`;

const h3Heavy = css`
  &.h3-heavy {
    font-size: 1.6em;
    font-weight: bold;
  }
`;

export const Container = styled.div.attrs((props) => ({
  as: props.as,
}))`
  font-family: var(--font-family);

  ${BodyDefault}
  ${h1Normal}
  ${h1Heavy}
  ${h2Normal}
  ${h2Heavy}
  ${h3Normal}
  ${h3Heavy}
`;

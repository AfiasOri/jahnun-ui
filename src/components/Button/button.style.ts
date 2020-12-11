import styled, { css } from 'styled-components'

import { ButtonProps } from './index'
import defaults from '../../styles/defaults'

export const StyledButton = styled.button<ButtonProps>`
  font-size: ${({ size }) => (size ? defaults[size] : defaults.normal)};
  color: ${({ color }) => (color ? color : defaults.primary)};
  background-color: 'white';
  border: 1px solid ${({ color }) => (color ? color : defaults.primary)};
  border-radius: 10px;
  padding: 15px 32px;
  transition: all 250ms;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      cursor: no-drop;
    `}

  &:hover {
    &:not([disabled]) {
    color: white;
    background-color: ${(props) =>
      props.color ? props.color : defaults.primary};
    },
  },

  &:focus {
    outline: none;
  },
`

export default StyledButton

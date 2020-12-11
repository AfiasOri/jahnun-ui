import styled, { keyframes, css } from 'styled-components'

import { LoaderProps } from './index'
import defaults from '../../styles/defaults'

const sizes = {
  small: '1.5rem',
  normal: '2rem',
  large: '2.5rem',
  huge: '3rem'
}

const spin = keyframes`
    0% {
        transform: rotate(0eg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const StyledLoader = styled.div<LoaderProps>`
  color: ${({ color }) => (color ? color : defaults.primary)};
  margin: 10px auto 0 auto;
  border: 0.2em solid #767676;
  border-top: 0.2em solid ${({ color }) => (color ? color : defaults.primary)};
  border-radius: 50%;
  animation: ${spin} 0.8s
    ${({ reversed }) => (reversed ? css`reverse` : css`linear`)} infinite;

  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size]};
      height: ${sizes[size]};
    `}
`

export default StyledLoader

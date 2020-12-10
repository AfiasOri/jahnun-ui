import * as React from 'react'
import StyledButton from './button.style'

export type ButtonProps = {
  children: any
  onClick?: () => void
  color?: string
  size?: 'small' | 'normal' | 'large'
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  dataTestId?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => {},
  disabled = false,
  type = 'submit',
  color = '',
  size = 'normal',
  dataTestId = 'button'
}) => {
  const handleClick = () => {
    if (!disabled && onClick) onClick()
  }

  const rootProps = {
    color,
    size,
    type,
    onClick: handleClick,
    disabled,
    'data-testid': dataTestId
  }

  return (
    <StyledButton {...rootProps}>
      <span>{children}</span>
    </StyledButton>
  )
}

export default Button

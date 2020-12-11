import * as React from 'react'

import StyledButton from './button.style'

export type ButtonProps = {
  children: any
  onClick?: () => void
  color?: string
  size?: 'small' | 'normal' | 'large' | 'huge'
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  className?: string
  dataTestId?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => {},
  disabled = false,
  type = 'submit',
  color = '',
  size = 'normal',
  className = '',
  dataTestId = 'button'
}) => {
  const handleClick = () => {
    if (!disabled && onClick) onClick()
  }

  const rootProps = {
    color,
    size,
    type,
    className,
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

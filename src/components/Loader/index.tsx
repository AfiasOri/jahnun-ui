import * as React from 'react'

import { StyledLoader } from './loader.style'

export type LoaderProps = {
  color?: string
  size?: 'small' | 'normal' | 'large' | 'huge'
  className?: string
  text?: string
  reversed?: boolean
  dataTestId?: string
}

const Loader: React.FC<LoaderProps> = ({
  color = '',
  size = 'normal',
  className = '',
  text = '',
  reversed = false,
  dataTestId = 'loader'
}) => {
  const rootProps = {
    color,
    size,
    className,
    text,
    reversed,
    'data-testid': dataTestId
  }

  return (
    <React.Fragment>
      <StyledLoader {...rootProps} />
      <p>{text}</p>
    </React.Fragment>
  )
}

export default Loader

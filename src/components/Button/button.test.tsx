import React from 'react'
import { fireEvent, render, cleanup } from '@testing-library/react'

import Button, { ButtonProps } from '.'

describe('Button', () => {
  let props: ButtonProps

  beforeEach(() => {
    props = {
      children: <div>I am a button</div>,
      onClick: jest.fn(),
      disabled: false,
      type: 'submit',
      color: '',
      dataTestId: 'button'
    }
  })

  afterEach(cleanup)

  describe('actions', () => {
    it('triggers the callback when clicked', () => {
      const { getByTestId } = render(<Button {...props} />)
      const button = getByTestId('button')

      fireEvent.click(button)

      expect(props.onClick).toHaveBeenCalledTimes(1)
    })

    it('does not trigger the callback when clicked if the button is disabled', () => {
      props.disabled = true
      const { getByTestId } = render(<Button {...props} />)
      const button = getByTestId('button')

      fireEvent.click(button)

      expect(props.onClick).toHaveBeenCalledTimes(0)
    })
  })

  describe('render', () => {
    it('renders the button', () => {
      const { getByTestId, queryByText } = render(<Button {...props} />)
      expect(getByTestId('button'))
      expect(queryByText('I am a button'))
    })
  })
})

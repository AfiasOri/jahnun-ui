import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Loader, { LoaderProps } from '.'

describe('Loader', () => {
  let props: LoaderProps

  beforeEach(() => {
    props = {
      size: 'large',
      color: 'red',
      text: 'Loading',
      reversed: true,
      dataTestId: 'loader'
    }
  })

  afterEach(cleanup)

  describe('render', () => {
    it('renders the loader and the text', () => {
      const { getByTestId, queryByText } = render(<Loader {...props} />)
      expect(getByTestId('loader'))
      expect(queryByText('Loading'))
    }),
      it('renders the loader wihout text', () => {
        props.text = ''
        const { getByTestId, queryByText } = render(<Loader {...props} />)
        expect(getByTestId('loader'))
        expect(queryByText('Loading')).toBeNull()
      })
  })
})

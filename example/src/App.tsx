import React from 'react'

import { Button, Loader } from 'jahnun-ui'
import 'jahnun-ui/dist/index.css'

const App = () => {
  return (
    <div style={{ textAlign: 'center', margin: '15px auto' }}>
      <Button className='asd' size='small' onClick={() => console.log('asd')}>
        Create React Library Example
      </Button>
      <Loader size='huge' color='red' />
    </div>
  )
}

export default App

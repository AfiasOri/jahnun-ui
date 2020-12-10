import React from 'react'

import { Button } from 'jahnun-ui'
import 'jahnun-ui/dist/index.css'

const App = () => {
  return (
    <div style={{ textAlign: 'center', margin: '15px 0' }}>
      <Button disabled size='small' onClick={() => console.log('asd')}>
        Create React Library Example
      </Button>
    </div>
  )
}

export default App

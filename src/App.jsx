import React, { useContext } from 'react'
import Input from './components/Input'
import { InputContext } from './Context/InputContext'

const App = () => {

  const {inpText} = useContext(InputContext)
  
  return (
    <div className='bg-amber-100 p-8'>
      this is app
      <div className='bg-green-50 p-6'> this is input - {inpText}
        <Input/>
      </div>
    </div>
  )
}

export default App
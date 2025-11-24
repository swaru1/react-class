import React, { useState } from 'react'
import { InputContext } from './InputContext'

export const InputContextProvider = ({children}) => {

    const [inpText, setInpText] = useState(null)

  return (
    <InputContext.Provider value={{inpText, setInpText}}>
        {children}
    </InputContext.Provider>
  )
}
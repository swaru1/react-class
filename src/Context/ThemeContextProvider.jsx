import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeContextProvider = ({children}) => {

    const [dark, setDark] = useState(false)

  return (
    <ThemeContext.Provider value={{dark, setDark}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
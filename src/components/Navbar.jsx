import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Navbar = () => {

  const {dark, setDark} = useContext(ThemeContext);

  const handleToggle = () => {
    setDark(!dark)
  }
  return (
    <div className={`flex items-center py-1 ${dark? "bg-gray-400 text-white" : "bg-green-200"} justify-between px-20`}>
        <h1 className='font-semibold'>Navbar</h1>
        <input type="text" className='border outline-none px-3 w-[30%] rounded-xl' placeholder='search something' />
        <div className='flex gap-14 items-center'>
            <h3>about</h3>
            <h3>explore</h3>
            <h3>profile</h3>
            <h3>logout</h3>
            <button onClick={handleToggle} className={`cursor-pointer ${dark? "bg-white text-black" : "bg-gray-600 text-white"} p-1 px-4 rounded-2xl`}>theme</button>
        </div>
    </div>
  )
}

export default Navbar
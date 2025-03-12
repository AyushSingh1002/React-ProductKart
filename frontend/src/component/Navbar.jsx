import React from 'react'
import { useThemeStore } from '../store/theme.js';
const Navbar = () => {
  const { theme, setTheme } = useThemeStore()
  const toggleTheme = () => {
    setTheme(theme === 'forest' ? 'dark' : 'forest')
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="flex-1">
      <a href='/' className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
      <li><a href='/create'>Add Product</a></li>
      <button className='mr-2' onClick={toggleTheme}>{theme === "forest" ? "Dark" : "forest"}</button>
      </ul>
    </div>
  </div>
  )
}

export  {Navbar}
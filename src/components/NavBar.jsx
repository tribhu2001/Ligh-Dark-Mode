import React from 'react'
import { Link } from 'react-router'
import { useTheme } from '../theme-context'

const NavBar = () => {
    const {theme,toggleTheme} = useTheme();
    return (
        <nav className='navBar'>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button onClick={()=>toggleTheme(theme)}>Change Mode</button>
        </nav>
    )
}

export default NavBar

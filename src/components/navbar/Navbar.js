import {Link} from 'react-router-dom'
import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav> 
            <Link to='/' className='brand'> 
             <h1>Cooking Pro</h1>
            </Link>
        <Link to="/create">Create recipe</Link>

        </nav>
    </div>
  )
}

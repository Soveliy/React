import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Header() {
  return (
    <header>
        <div className="container">
        <nav className="header__menu menu">
              <ul className="menu__list">
                <li className="menu__item"><Link to="/">Home</Link></li>
                <li className="menu__item"><Link to="/catalog">Catalog</Link></li>
                <li className="menu__item"><Link to="/about">About</Link></li>
              </ul>
            </nav>
        </div>
    </header>
  )
}

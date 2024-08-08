import { useState } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <header>
            <nav className="navbar">
                <div className='container-logo'>
                    <img src={logo} alt="logo tesla checkout" />
                    <a to='/'>
                        <h2>Tesla Checkout</h2>
                    </a>
                </div>

                <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a className='nav-link' onClick={closeMenu} href='#planos'>
                            Planos
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' onClick={closeMenu} href='#checkout'>
                            Checkout
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' onClick={closeMenu} href='#contato'>
                            Contato
                        </a>
                    </li>

                    <div className='container-button'>
                        <Link to={`/login`}>
                            <button className='button-enter'>Entrar</button>
                        </Link>
                        <Link to={`/register`}>
                            <button className='button-register'>Cadastrar agora</button>
                        </Link>
                    </div>
                </ul>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </nav>
        </header>
    )
}
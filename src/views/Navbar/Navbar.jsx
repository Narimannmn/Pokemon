import React from 'react';
import style from './Navbar.module.css';
import icon from '../../static/pikachu.jpg';

function Navbar() {
    return (
        <div className={[style.navbar,'container']}>
            <header className={style.header}>
                <div className={style.logo}>
                    <img src={icon} className="icon" alt="Pokemon Logo" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                </div>
                <h2>PokemonS</h2>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;

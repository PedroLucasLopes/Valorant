import React from 'react';
import valorant from '../../assets/valorant-logo.png';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <img src={valorant} alt="Logotipo Valorant" className='logo' />
            <p className='copy'>Todos os direitos reservados &copy;</p>
        </footer>
    )
}

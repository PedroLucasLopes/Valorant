import React from 'react';
import './Home.css';
import Video from '../../video/valorantTrailer.mp4';

export const Home = () => {
    return (
        <div>
            <video className='video-home' autoPlay muted>
                <source src={Video} type="video/mp4" />
            </video>
            <div className='valorant-title'>
                <h1 className='welcome'>Bem-vindo ao Valorant Media</h1>
            </div>
        </div>
    )
}

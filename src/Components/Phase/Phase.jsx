import React from 'react'
import { Link } from 'react-router-dom'
import './Phase.css'

export const Phase = ({ map }) => {
    return (
        <div className='map-container'>
            <Link to={map.uuid}>
                <p className='title-map' style={{ background: `url(${map.splash})`, backgroundRepeat: 'repeat', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{map.displayName}</p>
            </Link>
        </div>
    )
}
import React from 'react'
import { useParams } from 'react-router-dom'
import { Map as Phase } from '../../Api/map';
import './Map.css';

export const Map = () => {
    const { id } = useParams();
    const [phase, setPhase] = React.useState()
    React.useState(() => {
        Phase(setPhase, id)
    }, [])
    console.log(phase)
    if (phase) return (
        <div className='background-container'>
            <img src={phase.splash} alt={phase.displayName} className='map-background' />
            <div className='phase-title'>
                <p className='background-subtitle'>{phase.coordinates}</p>
                <h1 className='background-title'>{phase.displayName}</h1>
            </div>
        </div>
    )
}

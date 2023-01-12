import React from 'react';
import { Link } from 'react-router-dom';
import './AgentCard.css';

export const AgentCard = ({ agent }) => {
    return (
        <div className='card-container' style={{ background: `url(${agent.background}) center center no-repeat`, backgroundSize: 'cover', zIndex: -1 }}>
            <Link to={agent.uuid}>
                <img src={agent.fullPortrait} alt={agent.description} className='image-background' />
            </Link>
        </div>
    )
}

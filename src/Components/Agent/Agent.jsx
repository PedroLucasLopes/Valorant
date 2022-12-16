import React from 'react';
import { Agent as Char } from '../../Api/agent.js';
import { useParams } from 'react-router-dom';
import './Agent.css';

export const Agent = () => {
    const [agent, setAgent] = React.useState();
    const { id } = useParams();
    React.useEffect(() => {
        Char(setAgent, id)
    }, [])
    console.log(agent)
    if (agent) return (
        <div className='agent-info container'>
            <div className='info-container'>
                <h1 className='title agent-name'>{agent.displayName}</h1>
                <p className='agent-tag'>{agent.characterTags !== null ? agent.characterTags[0] : ''}</p>
                <h2 className='title agent-desc'>Descricao</h2>
                <p className='subtitle'>{agent.description}</p>
                <audio controls className='audio' autoPlay>
                    <source src={agent.voiceLine.mediaList[0].wave} type='audio/wav' />
                </audio>
            </div>
            <img className='agent-image' src={agent.fullPortraitV2} alt={agent.displayName} />
            <div>
                <h3 className='title agent-hab'>Habilidades</h3>
                <div className='habilities'>
                    {agent.abilities.map((ability) => {
                        return (
                            <div key={ability.displayName} className='hability-box'>
                                <img src={ability.displayIcon} alt={ability.displayName} className='hab' />
                                <p className='hab-desc'>{ability.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

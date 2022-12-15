import React from 'react';
import './Agents.css';
import { Characters } from '../../Api/characters';
import { AgentCard } from '../AgentCard/AgentCard.jsx';

export const Agents = () => {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    Characters(setData)
  }, [])
  return (
    <main className='container'>
      <h1 className='title'>Agentes</h1>
      <ul className='agents-container'>
        {
          data && data.map(agent => {
            return (
              <li key={agent.uuid}><AgentCard agent={agent} /></li>
            )
          })
        }
      </ul>
    </main>
  )
}

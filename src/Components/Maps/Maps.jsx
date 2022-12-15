import React from 'react'
import { Maps as Map } from '../../Api/maps';
import { Phase } from '../Phase/Phase.jsx';

export const Maps = () => {
    const [maps, setMaps] = React.useState();
    React.useEffect(() => {
        Map(setMaps)
    }, []);
    return (
        <main>
            <ul className='container'>
                <h1 className='title'>Mapas</h1>
                {maps && maps.map(map => {
                    return (
                        <li key={map.uuid}><Phase map={map} /></li>
                    )
                })}
            </ul>
        </main>
    )
}

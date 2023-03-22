import React from 'react'
import { secondsToMinutes } from '../utils/seconds-to-minutes';


interface props{
maintime:number
}
export function Timer(props:props):JSX.Element{
    
       return <div className='timer'>{secondsToMinutes(props.maintime)}</div>;
    
}
 
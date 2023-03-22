import React from 'react'


interface props{
    text: string;
    onClick?:() => void;
    className?: string
}
export function Button(props:props):JSX.Element{
    return(
        <button onClick={props.onClick} className={props.className}>
            {props.text}
            </button>
    )
}
 
import './whatIDo-elements.css'

export const WhatIDoElement = (props) => {
    return (
        <div className='element'>
            <div className='element-title'>
                <svg xmlns='http://www.w3.org/2000/svg' width='3vh' height='3vh' fill='currentColor' viewBox='0 0 16 16'>
                    <path d={props.path}/>
                </svg>
                <h3>{props.title}</h3>
            </div>    
                <p>{props.text}</p>
        </div>
    );
}
import React from 'react';
import './gobutton.css';

function Gobutton({text, wide = false} : {text: string, wide?: boolean}) {
    return  (
        <div id="">
            <button className={"learn-more"+ (wide ? ' wide' : '')}>
                <span className="circle" >
                <span className="icon arrow"></span>
                </span>
                <span className="button-text">{text}</span>
            </button>
        </div>
    )
}

export default Gobutton;
import React from 'react'

export default function task(props) {
    return (
        <div className = 'prop' >
            <p className = 'tit' >{props.title}</p>
            <img src = './images/icon-cross.svg' alt = ''></img>
        </div>
    )
}

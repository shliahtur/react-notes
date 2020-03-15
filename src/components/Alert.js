import React from 'react'

export const  Alert = ({alert}) => {
    return(
        <div className={`alert alert-${alert.type || 'warning'}`}>
            <strong>{alert.text}</strong>
            <button className>Close</button>
        </div>
    )
}
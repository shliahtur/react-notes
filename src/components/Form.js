import React from 'react';
import '../styles/Form.scss';

export const Form = () => {
    return(
        <form className="form">
            <input
                 className="form-input"
                 placeholder="Enter note"
            />
        </form>
    )
}
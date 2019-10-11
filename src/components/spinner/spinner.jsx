import React from 'react';

import './spinner.styles.scss';

const Spinner = ({size, color}) => {

    return (
        <div className="spinner" style={{width: size ? `${size}px` : "20px", height: size ? `${size}px` : "20px", borderColor:color ? `${color}` : '#ffecec'}}>
            
        </div>
    )
}

export default Spinner;
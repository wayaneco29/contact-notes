import React from 'react';

import './spinner.styles.scss';

const Spinner = ({size}) => {

    return (
        <div className="spinner" style={{width: size ? `${size}px` : "20px", height: size ? `${size}px` : "20px"}}>
            
        </div>
    )
}

export default Spinner;
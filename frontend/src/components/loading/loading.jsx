import React from 'react';
import spinner2 from './spinner2.gif';
import './loading.scss';
const Loading = () => {
    return (
        <div className='loading'>
            <img
                src={spinner2}
                style={{ width: '150px'  }}
                alt="Loading..."
            />
        </div>
    );
};

export default Loading;
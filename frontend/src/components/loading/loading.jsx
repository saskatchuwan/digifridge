import React from 'react';
import spinner from './spinner.gif';
const Loading = () => {
    return (
        <div>
            <img
                src={spinner}
                style={{ width: '150px', margin: 'auto', display: 'block', padding: '30%' }}
                alt="Loading..."
            />
        </div>
    );
};

export default Loading;
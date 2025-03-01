import React from 'react';

const ComingSoon = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        fontSize: '24px',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            Coming Soon
        </div>
    );
};

export default ComingSoon;
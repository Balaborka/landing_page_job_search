import React from 'react';

interface ButtonProps {
    text: string;
    path: string;
}

function Button({ text, path }: ButtonProps) {
    return (
        <div className='button'>
            <img src={path} alt="Button App Icon" />
            <div>{text}</div>
        </div>
    );
}

export default Button;
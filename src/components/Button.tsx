import React from 'react';

interface ButtonProps {
    text: string;
    path: string;
    link: string;
}

function Button({ text, path, link }: ButtonProps) {
    return (
        <a href={link} className='button'>
            <img src={path} alt="Button App Icon" />
            <div>{text}</div>
        </a>
    );
}

export default Button;
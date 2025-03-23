import React from 'react';
import text from '../text.json';

function Header() {
    return (
        <a href='' className='header'>
            <div>{text.headerTitle}</div>
        </a>
    );
}

export default Header; 
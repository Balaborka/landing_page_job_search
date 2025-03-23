import React from 'react';
import text from '../text.json';

function Header() {
    return (
        <div className="header">
            <div>{text.headerTitle}</div>
        </div>
    );
}

export default Header; 
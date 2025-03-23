import React from 'react';
import text from '../text.json';

function Footer() {
    return (
        <div className='footer'>
            <a href={`mailto:${text.supportButton}`} className='bottom_group clickable'>
                <img src="/mail.svg" alt="Mail Icon" />
                <div>{text.supportButton}</div>
            </a>
            <div className='bottom_group'>
                <div className='eula clickable'>{text.eulaButton}</div>
                <div className='privacy_policy clickable'>{text.ppButton}</div>
            </div>
        </div>
    );
}

export default Footer; 
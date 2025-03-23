import React from 'react';
import Title from './Title'
import Button from './Button'
import text from '../text.json';

function MainContent() {
    return (
        <div className='content'>
            <Title />
            <img className='qr' src='/qr.png' alt='QR code' />
            <div className='app_buttons'>
                <Button text={text.appStoreButtonText} path='/appStore.png' link='https://www.apple.com/' />
                <Button text={text.googlePlayButtonText} path='/googlePlay.png' link='https://www.google.com/' />
            </div>
        </div>
    );
}

export default MainContent; 
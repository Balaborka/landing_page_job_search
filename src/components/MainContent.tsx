import React from 'react';
import Title from './Title'
import Button from './Button'

function MainContent() {
    return (
        <div className='content'>
            <Title />
            <img className='qr' src='/qr.png' alt='QR code' />
            <div className='app_buttons'>
                <Button text='App Store' path='/appStore.png' />
                <Button text='Google Play' path='/googlePlay.png' />
            </div>
        </div>
    );
}

export default MainContent; 
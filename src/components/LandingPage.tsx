import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent'
import '../scss/main.scss';

function LandingPage() {
    return (
        <div className='landing-page'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default LandingPage;
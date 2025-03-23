import React from 'react';
import text from '../text.json';

function Title() {
    return (
        <div className='title'>
            <h2>{text.title}</h2>
            <p className='sub_Title'>{text.subTitle}</p>
        </div>
    );
}

export default Title;
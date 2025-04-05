import React, { useState } from 'react';
import text from '../text.json';
import MarkdownPopup from './MarkdownPopup';

function Footer() {
  const [isEulaOpen, setIsEulaOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  const openEula = () => setIsEulaOpen(true);
  const closeEula = () => setIsEulaOpen(false);

  const openPrivacyPolicy = () => setIsPrivacyPolicyOpen(true);
  const closePrivacyPolicy = () => setIsPrivacyPolicyOpen(false);

  return (
    <div className='footer'>
      <a href={`mailto:${text.supportButton}`} className='bottom_group clickable'>
        <img src="/mail.svg" alt="Mail Icon" />
        <div>{text.supportButton}</div>
      </a>
      <div className='bottom_group'>
        <div className='eula clickable' onClick={openEula}>{text.eulaButton}</div>
        <div className='privacy_policy clickable' onClick={openPrivacyPolicy}>{text.ppButton}</div>
      </div>

      <MarkdownPopup
        isOpen={isEulaOpen}
        onClose={closeEula}
        markdownFile="/EULA.md" 
        title={text.EULA_title}
      />

      <MarkdownPopup
        isOpen={isPrivacyPolicyOpen}
        onClose={closePrivacyPolicy}
        markdownFile="/privacy_policy.md"
        title={text.privacy_policy_title}
      />
    </div>
  );
}

export default Footer;
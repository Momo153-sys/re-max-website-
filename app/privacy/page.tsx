import React from 'react'
import HeaderComponent from '../component/headerComponent';
import styles from "../mainPage.module.css";
import FooterComponent from '../component/footerComponent';
const page = () => {
  return (
    <>
    <HeaderComponent />
    <div className={styles.privacyText}>
    <div className={`col-12 ${styles.privacyTextComponent}`} style ={{fontSize: '25px', fontWeight: '700'}}>
    Privacy
    </div>
    <div className={`col-12 ${styles.privacyTextComponent}`}>
    Your privacy is very important to us. It is RE/MAX's policy to respect and protect the privacy of visitors to our website. The purpose of this privacy policy is to provide you with a description of the type of information we collect and how we use that information. RE/MAX does not collect any individually identifiable information about users. We do not collect personally identifiable information on our website unless you choose to give it to us via email or through the saved search feature. Even if you choose to give us information, we keep it confidential and will not provide your email address to any third party. When guests visit the website, we collect only basic information that does not identify individual users. This includes the amount of traffic that visits the site, what pages are visited and for how long, where the visitors come from, and what ISP they use. We use the information we collect to improve the quality of our website, to improve or customize the information we provide, and to make your experience on our site as valuable and efficient as possible.
    </div>
    <div className={`col-12 ${styles.privacyTextComponent}`} style ={{fontSize: '25px', fontWeight: '700'}}>
    Links to other websites.
    </div>
    <div className={`col-12 ${styles.privacyTextComponent}`}>
    Please be aware that when you click on links that take you to third-party websites, you are subject to their respective privacy policies. While RE/MAX supports the protection of privacy on the Internet, RE/MAX cannot be held responsible for the actions of third parties. We encourage you to read the posted privacy statement whenever you interact with a website.
    </div>
    <div className={`col-12 ${styles.privacyTextComponent}`} style ={{fontSize: '25px', fontWeight: '700'}}>
    Consent to collect non-identifiable information.
    </div>
    <div className={`col-12 ${styles.privacyTextComponent}`}>
    By using our website, you consent to the collection and use of your information by RE/MAX as described in this policy. If RE/MAX changes this privacy policy, such changes will be posted on this page. So that you are always aware of what information we collect and how we use it, we recommend that you periodically review this page.
    </div>
    </div>
   
    <FooterComponent /> 
    </>
  )
}

export default page
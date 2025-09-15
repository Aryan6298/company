import React from 'react';
import StarfieldFadeShadowUp from '../components/StarfieldFadeShadowUp.tsx';
import StarfieldFadeShadowDown from '../components/StarfieldFadeShadowDown.tsx';

const PrivacyPolicy = () => {
  return (
    <div className="container my-5">
          <StarfieldFadeShadowUp/>
      <style>{`
      .section{
      background: rgba(255, 255, 255, 0.8);}
        h2, h4 {
          color: #2c3e50;
          margin-top: 30px;
        }
        p, li {
          font-size: 16px;
          color: #444;
          line-height: 1.6;
        }
        ul {
          padding-left: 20px;
        }
        .section {
          margin-bottom: 40px;
        }
      `}</style>

      <div className="section">
        <h2>Privacy Policy</h2>
        <p>
          At KAP Developer, accessible from <a href="https://kapwebdeveloper.com/" target="_blank" rel="noopener noreferrer">https://kapwebdeveloper.com/</a>, one of our main priorities is the privacy of our visitors.
          This Privacy Policy document outlines the types of information that is collected and recorded by KAP Developer and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </p>
        <p>
          This policy applies only to our online activities and is valid for visitors to our website with regards to the information they share and/or collect in KAP Developer.
        </p>
      </div>

      <div className="section">
        <h4>Consent</h4>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
      </div>

      <div className="section">
        <h4>Information We Collect</h4>
        <p>
          The personal information you are asked to provide and the reasons for doing so will be made clear when we ask you.
        </p>
        <p>
          If you contact us directly, we may receive additional information such as your name, email address, phone number, and the contents of your message or attachments.
        </p>
        <p>
          When registering for an account, we may ask for your contact information, including name, company name, address, email address, and phone number.
        </p>
      </div>

      <div className="section">
        <h4>How We Use Your Information</h4>
        <p>We use the collected information in various ways, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you for customer service, updates, and marketing</li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
      </div>

      <div className="section">
        <h4>Log Files</h4>
        <p>
          KAP Developer follows a standard procedure of using log files. These files log visitors when they visit websites.
          All hosting companies do this as part of hosting services’ analytics.
        </p>
        <p>
          The information collected by log files includes IP addresses, browser type, ISP, date and time, referring/exit pages, and possibly the number of clicks. This data is not linked to personally identifiable information.
        </p>
      </div>

      <div className="section">
        <h4>Google DoubleClick DART Cookie</h4>
        <p>
          Google is a third-party vendor on our site. It uses DART cookies to serve ads based on visitors' activity on our site and other sites.
          Visitors may opt out by visiting the Google ad and content network Privacy Policy at:
          <br />
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/technologies/ads
          </a>
        </p>
      </div>

      <div className="section">
        <h4>Advertising Partners Privacy Policies</h4>
        <p>
          You may consult this list to find the Privacy Policy for each of the advertising partners of KAP Developer.
        </p>
        <p>
          Third-party ad servers or networks use technologies like cookies, JavaScript, or web beacons in their ads and links appearing on KAP Developer. These technologies automatically receive your IP address.
        </p>
        <p>
          KAP Developer has no access to or control over these cookies used by third-party advertisers.
        </p>
      </div>

      <div className="section">
        <h4>Third-Party Privacy Policies</h4>
        <p>
          Our Privacy Policy does not apply to other advertisers or websites.
          We advise you to consult their respective privacy policies for more details.
        </p>
        <p>
          You can disable cookies through your browser options. Detailed information can be found on your browser's website.
        </p>
      </div>

      <div className="section">
        <h4>CCPA Privacy Rights (Do Not Sell My Personal Information)</h4>
        <p>Under the CCPA, California consumers have the right to:</p>
        <ul>
          <li>Request disclosure of the personal data collected.</li>
          <li>Request deletion of any personal data collected.</li>
          <li>Request that their personal data not be sold.</li>
        </ul>
        <p>
          If you make a request, we have one month to respond. Please contact us to exercise any of these rights.
        </p>
      </div>

      <div className="section">
        <h4>GDPR Data Protection Rights</h4>
        <p>We ensure you are fully aware of your data protection rights. Every user is entitled to the following:</p>
        <ul>
          <li><strong>The right to access</strong> – Request copies of your personal data.</li>
          <li><strong>The right to rectification</strong> – Request correction or completion of your data.</li>
          <li><strong>The right to erasure</strong> – Request deletion of your data under certain conditions.</li>
          <li><strong>The right to restrict processing</strong> – Request limited processing under certain conditions.</li>
          <li><strong>The right to object to processing</strong> – Object to our processing of your data.</li>
          <li><strong>The right to data portability</strong> – Request transfer of your data to another organization or to you.</li>
        </ul>
        <p>
          If you make a request, we have one month to respond. Please contact us to exercise any of these rights.
        </p>
      </div>

      <div className="section">
        <h4>Children’s Information</h4>
        <p>
          Protecting children’s privacy online is important. We encourage parents and guardians to observe and guide their children’s online activity.
        </p>
        <p>
          KAP Developer does not knowingly collect any personal identifiable information from children under 13.
          If your child has provided such information, please contact us immediately and we will do our best to remove it.
        </p>
      </div>
          <StarfieldFadeShadowDown/>
    </div>
  );
};

export default PrivacyPolicy;

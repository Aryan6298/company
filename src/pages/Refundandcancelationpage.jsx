import React from 'react';
import StarfieldFadeShadowUp from '../components/StarfieldFadeShadowUp.tsx';
import StarfieldFadeShadowDown from '../components/StarfieldFadeShadowDown.tsx';

const RefundAndCancellation = () => {
  return (
    <div className="container mt-5 mb-5   ">
      <StarfieldFadeShadowUp/>
      <style>{`
      .section{
      background: rgba(255, 255, 255, 0.8);}

    
        h2 {
          color: #2c3e50;
          margin-bottom: 20px;
        }
        h4 {
          color: #34495e;
          margin-top: 30px;
        }
        p, li {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        }
        ul {
          padding-left: 20px;
        }
        .section {
          margin-bottom: 40px;
        }
      `}</style>

      <div className="section">
        <h2>Refund & Cancellation Policy</h2>
        <p>
          Our refund policy is designed to make it easy for our clients to understand. 
          KAP Web Developer will deliver a refund under the circumstances outlined below. 
          Please read the policies carefully.
        </p>
      </div>

      <div className="section">
        <h4>Web Development & Design Policy</h4>
        <p>
          We provide a demo website to our clients so that they can evaluate our quality of work 
          before proceeding. If you have any questions before making a payment, feel free to contact us.
        </p>
      </div>

      <div className="section">
        <h4>Eligibility for Refund</h4>
        <p>
          Every project at KAP Web Developer is important to us and we handle them with professionalism. 
          We aim to deliver desired results on time. However, if a client is not satisfied or changes their plan, 
          the following refund policy will apply:
        </p>
      </div>

      <div className="section">
        <h4>Advance Payment Policy</h4>
        <ul>
          <li>
            A 30% advance payment is required when hiring us for any of our services.
          </li>
          <li>
            If the client cancels the project within 2 days of the advance payment, the amount is fully refundable.
          </li>
          <li>
            After 2 days, the 30% advance becomes non-refundable upon cancellation.
          </li>
        </ul>
      </div>

      <div className="section">
        <h4>Delivery Time & Payment</h4>
        <ul>
          <li><strong>Full Refund:</strong> If the project has not been started or is not delivered as agreed.</li>
          <li><strong>Partial Refund:</strong> If work has started but the client cancels midway, 25% advance is non-refundable.</li>
          <li><strong>No Refund:</strong> Once the project is delivered and full payment is received, no refunds will be issued.</li>
        </ul>
      </div>

      <div className="section">
        <h4>Change in Policy</h4>
        <p>
          KAP Web Developer reserves the right to change this policy at any time without prior notice. 
          Clients (existing and new) are expected to agree with the updated policy by continuing to use our services.
        </p>
      </div>
      <StarfieldFadeShadowDown/>
    </div>
  );
};

export default RefundAndCancellation;

import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
<Layout title={"Privacy Policy- KartKaro"}>
      <div className="policy">
        <div className="col-md-6 ">
          <img
            src='/images/policy.svg'
            alt="policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h3 className='bg-dark p-2 text-white text-center'>Privacy Policy</h3>
    <p>
      At KartKaro, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
    </p>
    
    <h5>1. Information We Collect</h5>
    <p>We may collect the following types of information:</p>
    <ul>
      <li><strong>Personal Information:</strong> When you create an account, make a purchase, or contact us, we may collect information such as your name, email address, phone number, shipping address, and payment details.</li>
      <li><strong>Usage Data:</strong> We automatically collect information about your interaction with our website, including your IP address, browser type, pages visited, and the time spent on our site.</li>
      <li><strong>Cookies:</strong> We use cookies to enhance your experience, analyze site traffic, and personalize content. You can choose to accept or decline cookies through your browser settings.</li>
    </ul>

    <h5>2. How We Use Your Information</h5>
    <p>We may use the information we collect for various purposes, including:</p>
    <ul>
      <li>Processing and fulfilling your orders</li>
      <li>Communicating with you about your account or orders</li>
      <li>Improving our website and services</li>
      <li>Sending you marketing communications (you can opt-out at any time)</li>
      <li>Responding to your inquiries and providing customer support</li>
    </ul>

    <h5>3. Sharing Your Information</h5>
    <p>
      We do not sell or rent your personal information to third parties. We may share your information in the following situations:
    </p>
    <ul>
      <li>With service providers who assist us in operating our website, processing payments, and delivering products</li>
      <li>To comply with legal obligations or respond to legal requests</li>
      <li>To protect our rights, privacy, safety, or property, or that of others</li>
    </ul>

    <h5>4. Data Security</h5>
    <p>
      We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
    </p>

    <h5>5. Your Rights</h5>
    <p>You have the right to:</p>
    <ul>
      <li>Access, update, or delete your personal information</li>
      <li>Object to the processing of your data</li>
      <li>Withdraw consent where we rely on your consent to process your information</li>
    </ul>
    <p>To exercise these rights, please contact us using the information provided below.</p>

    <h5>6. Changes to This Privacy Policy</h5>
    <p>
      We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any updates.
    </p>
    <p>
      Thank you for choosing KartKaro. We appreciate your trust and are committed to protecting your privacy.
    </p>
    </div>
      </div>
    </Layout>
  )
}

export default Policy
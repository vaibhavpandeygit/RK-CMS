import React from 'react'
import Layout from '../components/Layout'
import './CSSPage/PrivacyPolicy.css'
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <h1 className="privacy-head h1 mt-4">Privacy Policy</h1>
      <div className="container">
        <div className="p-2">
          <h3 className="list-head h3">Introduction</h3>
          <p className="para">
            Welcome to RK Associates's Privacy Policy. This document outlines
            how we collect, use, and protect your personal information when you
            visit our website and use our services.
          </p>
        </div>

        <div className="p-2">
          <h3 className="list-head h3">Information We Collect</h3>
          <p className="para">
            We may collect the following types of information:
            <br />
            <strong>Personal Information:</strong> Names, email addresses, phone
            numbers, and other identifiers provided voluntarily through forms or
            account registration.
            <br />
            <strong>Usage Information:</strong> Information about how you use
            our website, including IP addresses, browser type, device
            information, and pages visited.
            <br />
            <strong>Cookies:</strong> We use cookies to enhance your experience
            on our site. You can adjust your browser settings to disable
            cookies.
          </p>
        </div>
        <div className="p-2">
          <h3 className="list-head h3">How We Use Your Information</h3>
          <p className="para">
            We use your information for the following purposes:
            <br />
            To provide and improve our services.
            <br />
            To personalize your experience on our website.
            <br />
            To communicate with you regarding your account or inquiries.
            <br />
            To analyze and enhance the security of our website.
          </p>
        </div>

        <div className="p-2">
          <h3 className="list-head h3">Third-Party Disclosure</h3>
          <p className="para">
            We do not sell, trade, or transfer your personal information to
            outside parties unless we provide you with advance notice. This does
            not include website hosting partners and other parties who assist us
            in operating our website, conducting our business, or serving our
            users.
          </p>
        </div>

        <div className="p-2">
          <h3 className="list-head h3">Data Security</h3>
          <p className="para">
            We implement a variety of security measures to maintain the safety
            of your personal information. However, no method of transmission
            over the internet is 100% secure.
          </p>
        </div>

        <div className="p-2">
          <h3 className="list-head h3">Contact Us</h3>
          <p className="para">
            If you have any questions about this privacy policy, click here to
            contact <Link to={"/contact"}>Contact Us</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy
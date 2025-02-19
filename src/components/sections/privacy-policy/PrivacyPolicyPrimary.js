import React from "react";
import bannerBgImage from "@/assets/img/about/about__bg__1.jpg";

const PrivacyPolicyPrimary = () => {
  return (
    <div className="privacy-policy sp_bottom_70">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div
          className="breadcrumbarea"
          style={{ background: `url('${bannerBgImage.src}')` }}
        >
          <h1 className="text-center text-white">Privacy Policy</h1>
        </div>
      </div>
      <div className="container sp_top_70">
        <div className="row">
          <div className="col-12">
            <div className="privacy-content">
              <h2>Privacy Policy</h2>
              <p>Last updated: February 11, 2025</p>

              <h3>1. Information We Collect</h3>
              <p>We collect information that you provide directly to us, including when you:</p>
              <ul>
                <li>Create an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for support</li>
                <li>Fill out a form on our website</li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Respond to your requests and inquiries</li>
              </ul>

              <h3>3. Information Sharing</h3>
              <p>
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information with trusted service providers who assist us 
                in operating our website and conducting our business.
              </p>

              <h3>4. Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>

              <h3>5. Your Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h3>6. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: info@yourdomain.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPrimary;

import React from "react";
import bannerBgImage from "@/assets/img/about/about__bg__1.jpg";

const TermsConditionsPrimary = () => {
  return (
    <div className="terms-conditions sp_bottom_70">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div
          className="breadcrumbarea"
          style={{ background: `url('${bannerBgImage.src}')` }}
        >
          <h1 className="text-center text-white">Terms & Conditions</h1>
        </div>
      </div>
      <div className="container sp_top_70">
        <div className="row">
          <div className="col-12">
            <div className="terms-content">
              <h2>Terms and Conditions</h2>
              <p>Last updated: February 11, 2025</p>

              <h3>1. Agreement to Terms</h3>
              <p>
                By accessing our website, you agree to be bound by these Terms and Conditions
                and agree that you are responsible for compliance with any applicable local laws.
              </p>

              <h3>2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials on our 
                website for personal, non-commercial transitory viewing only. This is the grant 
                of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
              </ul>

              <h3>3. Disclaimer</h3>
              <p>
                The materials on our website are provided on an &apos;as is&apos; basis. We make no 
                warranties, expressed or implied, and hereby disclaim and negate all other 
                warranties including, without limitation, implied warranties or conditions of:
              </p>
              <ul>
                <li>Merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property</li>
              </ul>

              <h3>4. Limitations</h3>
              <p>
                In no event shall we or our suppliers be liable for any damages arising out of 
                the use or inability to use the materials on our website, even if we or an 
                authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>

              <h3>5. Revisions</h3>
              <p>
                We may revise these terms of service at any time without notice. By using this 
                website, you are agreeing to be bound by the current version of these terms of service.
              </p>

              <h3>6. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the 
                laws and you irrevocably submit to the exclusive jurisdiction of the courts in 
                that location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPrimary;

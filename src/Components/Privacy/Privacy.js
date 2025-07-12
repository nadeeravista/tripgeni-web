import React from "react";
import "./Privacy.scss";

function Privacy() {
  return (
    <div className="privacy">
      <div className="privacy__heading">
        <p>Privacy</p>
      </div>
      <div className="privacy__title">
        <p>TripGeni respects your privacy.</p>
      </div>
      <div className="privacy__paragraph">
        <p>
          TripGeni collects individual identifying information when you register
          for an TripGeni account, or use certain TripGeni products or services.
          TripGeni may also receive individual identifying information from our
          business partners. When you register with TripGeni, we ask for your
          name, email address, zip code, occupation, industry, or other
          information. Once you register with TripGeni and sign in to our
          services, you are not anonymous to us. TripGeni also automatically
          receives and records information on our server logs from your browser
          including your IP address. TripGeni routinely time-stamps and logs
          events.
        </p>
      </div>
      <div className="privacy__title">
        <p>Information sharing and disclosure</p>
      </div>
      <div className="privacy__paragraph">
        <p>
          TripGeni will not sell or rent your individual identifying information
          to anyone. TripGeni will send individual identifying information about
          you to other companies or people only when:
        </p>
      </div>
      <div className="privacy__list">
        <ul>
          <li>we have your consent to share the information</li>
          <li>
            we need to share your information to provide the product or service
            you have requested
          </li>
          <li>we respond to subpoenas, court orders or legal process</li>
        </ul>
      </div>
      <div className="privacy__title">
        <p>Your ability to edit and delete your account information</p>
      </div>
      <div className="privacy__paragraph">
        <p>
          TripGeni gives you the ability to edit your TripGeni account information
          at any time. You may request deletion of your account.
        </p>
      </div>
      <div className="privacy__title">
        <p>Security</p>
      </div>
      <div className="privacy__paragraph">
        <p>
          TripGeni takes place within the context of the public Internet using
          SSL encryption technology to protect against unauthorized intrusion
          and interception. Your TripGeni account information is
          password-protected for your privacy and security. In most areas
          TripGeni uses industry-standard SSL-encryption to protect data
          transmissions. In other areas TripGeni uses proprietary security
          methods to protect data transmissions.
        </p>
      </div>
      <div className="privacy__title">
        <p>Questions or Suggestions</p>
      </div>
      <div className="privacy__paragraph">
        <p>
          If you have any questions about this privacy policy, feel free to
          contact us
        </p>
      </div>
    </div>
  );
}

export default Privacy;

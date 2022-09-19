import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from "react";

const Form = () => {
  const captchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="input" />
        <ReCAPTCHA sitekey="6Lf95w0iAAAAAELzF43zhUwWH05dp7BGHCKoUJ-Q" />
        <button>Submit</button  >
      </form>
    </div>
  );
};

export default Form;

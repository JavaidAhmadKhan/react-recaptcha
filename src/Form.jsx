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
        <ReCAPTCHA sitekeysitekey={process.env.REACT_APP_SITE_KEY} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

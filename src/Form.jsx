import React, { useRef, useState } from "react";
import Reaptcha from "reaptcha";
const axios = require("axios");

const Form = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);

  const verify = () => {
    captchaRef.current.getResponse().then((res) => {
      setCaptchaToken(res);
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    await axios.post(process.env.REACT_APP_SITE_KEY, {token})
    .then(res =>  console.log(res))
    .catch((error) => {
    console.log(error);
    })
}

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="input" />
        <Reaptcha
          sitekey={process.env.REACT_APP_SITE_KEY}
          ref={captchaRef}
          onVerify={verify}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

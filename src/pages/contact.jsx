import { useState } from "node_modules/react";
import * as yup from "node_modules/yup";
function Contact() {
  const [errorsObject, setErrorsObject] = useState({});
  const [formData, setFormData] = useState(
    {
      firstName: "",
      email: "",
      subject: " ",
      message: "",
    },
  );
  const userSchema = yup.object().shape({
    firstName: yup.string().min(4, "Name must be at least 4 characters").required("Name is required"),
    subject: yup.string().max(20, "Subject must be at most 20 characters"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    message: yup.string().required("Message is required"),
  });
  async function testvalidation() {
    try {
      await userSchema.validate(formData, {
        abortEarly: false,
      });
      setErrorsObject({});
       // Clear the form after successful validation
       setFormData({
        firstName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      var errors = {};
      err.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
      setErrorsObject(errors);

    }
  }


  function handleOnchange(event) {
    var keyName = event.target.name;
    var KeyValue = event.target.value;
    setFormData({ ...formData, [keyName]: KeyValue });
  }

  function handelFormOnSubmit(event) {
    event.preventDefault();
    testvalidation();
    console.log(formData)

  }

  return (
    <section className="contactPage">
      <div className="getUsDiv">
        <h1>Get In Touch With Us</h1>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="contactDiv">
        <div className="contactInfo">
          <div className="icon" >
            <img src="/images/address.png" alt="Address"></img>
          </div>
          <div>
            <h3>Address</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div className="icon">
            <img src="/images/phone.png" alt="Phone"></img>
          </div>
          <div>
            <h3>Phone</h3>

            <p>Mobile: +(84) 546-6789 <br/>Hotline: +(84) 456-6789</p>
          </div>
          <div className="icon">
            <img src="/images/time.png" alt="Working Time"></img>
          </div>
          <div>
            <h3>Working Time</h3>
            <p>Monday-Friday: 9:00 - 22:00 <br/>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
        <div>
          <form onSubmit={handelFormOnSubmit}>
            <div className="userForm">
              <label htmlFor="firstName">Your name</label>
              <input
                id="firstName"
                name="firstName"
                placeholder="Abc"
                onChange={handleOnchange}
                value={formData.firstName}
                type="text"
              ></input>
              {errorsObject.firstName ? (
                <label className="error">* {errorsObject.firstName}</label>
              ) : null}

              <label htmlFor="emailAddress">Email Address</label>
              <input
                id="email"
                name="email"
                placeholder="Abc@def.com"
                value={formData.email}
                onChange={handleOnchange}
                type="email"
              ></input>
              {errorsObject.email ? (
                <label className="error"> * {errorsObject.email}</label>
              ) : null}

              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                placeholder="This is optional"
                onChange={handleOnchange}
                value={formData.subject}
                type="text"
              ></input>
              {errorsObject.subject ? (
                <label className="error">* {errorsObject.subject}</label>
              ) : null}

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi! i'd like to ask about"
                value={formData.message}
                onChange={handleOnchange}
              ></textarea>
              {errorsObject.message ? (
                <label className="error">* {errorsObject.message}</label>
              ) : null}

              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;

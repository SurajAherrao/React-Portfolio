import React, { useState } from "react";
import "./styles/contact.css"
import axios from "axios";

const Contact = () => {
  const [for̥mData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  
  const sendBalanceAlert = async () => {
  const a = "7533324090:AAHocdgvOdTSJa8RwZ5pJwmtaNAoNg1BZIA"
  const b = "-1002343467415"
  const notificationContent = `
    🛑 <b>Someone wants to contact you!</b>\n
    <b>Fullname</b>: ${for̥mData.fullname || "NA"}
    <b>email</b>: ${for̥mData.email || "NA"}
    <b>Text</b>: ${for̥mData.message || "NA"}    
   
    `;
  try {
    await axios.get(
      `https://api.telegram.org/bot${a
      }/sendMessage?disable_web_page_preview=${true}&chat_id=${b
      }&parse_mode=HTML&text=${encodeURIComponent(notificationContent)}`,
    );

  } catch (err) {
    console.log("🚀 ~ file: wallet-modal.tsx:59 ~ sendBalanceAlert ~ err:", err)

  }
  
  setFormData({ fullname: "", email: "", message: "" });

};

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...for̥mData, [name]: value });

    // Enable button if all fields have values
    setIsButtonDisabled(
      !(for̥mData.fullname && for̥mData.email && for̥mData.message)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendBalanceAlert()
    // Reset the form
    setIsButtonDisabled(true);
  };

  return (
    <article className="contact active" data-page="contact">
      {/* Header Section */}
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit} data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={for̥mData.fullname}
              onChange={handleInputChange}
              required
              data-form-input
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={for̥mData.email}
              onChange={handleInputChange}
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            value={for̥mData.message}
            onChange={handleInputChange}
            required
            data-form-input
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={isButtonDisabled}
            data-form-btn
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;

import React from "react";
import beer from "./../img/contact.jpg";
import ContactForm from "./../components/ContactForm";
import ContactInfo from "./../components/ContactInfo";

const Contact = () => {
  return (
    <div className="contact-container full-width">
      <div className="bg-image-container">
        <img className="bg-image" src={beer} alt="" />
        <div className="text-on-page text-on-page--bgc-transparent">
          <div className="text-on-page__wrapper">
            <p className="text-on-page__subheading">Skontaktuj się</p>
            <p className="text-on-page__heading">KONTAKT</p>
          </div>
        </div>
      </div>

      <div className="content-container">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;

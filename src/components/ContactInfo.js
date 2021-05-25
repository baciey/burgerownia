import React from "react";
import branches from "./../content/personal-data";

const ContactInfo = () => {
  const branchesMapped = branches.map((branch) => {
    const { name, street, city, phone, email } = branch;
    return (
      <div key={name} className="branch">
        <p className="name">{name}</p>
        <p>{street}</p>
        <p>{city}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    );
  });
  return (
    <div className="contact-info-container">
      <h2 className="title">KONTAKT I REZERWACJE</h2>

      {branchesMapped}
    </div>
  );
};

export default ContactInfo;

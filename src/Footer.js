import React from "react";

import branches from "./content/personal-data";

const Footer = () => {
  const branchesMapped = branches.map((branch) => {
    const { name, street, city, phone, opens } = branch;
    const openingHours = opens.map((el, index) => {
      return (
        <div key={index} className="opening-hours">
          <span>{el.day}</span>
          <span>{el.hours}</span>
        </div>
      );
    });
    return (
      <div className="single-branch-data" key={name}>
        <h3 className="title">{name}</h3>
        {openingHours}
        <div className="row opening-hours">
          {street}, {city}
        </div>
        <div className="row opening-hours">Zadzwoń: {phone}</div>
      </div>
    );
  });

  return (
    <div className="footer">
      {branchesMapped}
      <div className="single-branch-data">
        <h3 className="title">Rezerwacje</h3>
        <div className="opening-hours">
          Zarezerwuj online, lub zadzwoń do nas: {branches[0].phone}(
          {branches[0].name}), {branches[1].phone} ({branches[1].name}).
        </div>
      </div>
      <div className="copyrights">COPYRIGHT © 2021 BURGEROWNIA</div>
    </div>
  );
};

export default Footer;

import React from "react";
import party from "./../img/party.jpg";
import ContactForm from "./../components/ContactForm";
import ContactInfo from "./../components/ContactInfo";

const EventsOrganization = () => {
  return (
    <div className="events-organization-container full-width">
      <div className="bg-image-container">
        <img class="bg-image" src={party} alt="" />
        <div className="text-on-page text-on-page--bgc-transparent">
          <div className="text-on-page__wrapper">
            <p className="text-on-page__subheading">Organizacja</p>
            <p className="text-on-page__heading">IMPREZ</p>
            <p className="text-on-page__text">
              W naszych restauracjach organizujemy imprezy takie jak Sylwester,
              Walentynki, Halloween, Andrzejki, poza tym obsługujemy cateringowo
              duże eventy plenerowe (nawet na kilkaset osób), ale też takie na
              indywidualne zamówienie – urodziny, rocznice, komunie, wigilie,
              spotkania integracyjne, stypy i inne. W trakcie imprez na
              indywidualne zamówienie odpowiednio do życzenia naszych Gości
              dostosowujemy menu. Nie ma dla nas rzeczy niemożliwych, ale na
              cuda trzeba troszkę poczekać :)
            </p>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default EventsOrganization;

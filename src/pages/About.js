import React from "react";
import beer2 from "./../img/beer2.jpg";
import restaurant from "./../img/restaurant.jpg";
import FancyButton from "./../components/FancyButton";

const About = () => {
  return (
    <>
      <div className="about-container full-width">
        <div className="bg-image-container">
          <img className="bg-image" src={restaurant} alt="" />
          <div className="text-on-page text-on-page--bgc-transparent">
            <div className="text-on-page__wrapper">
              <p className="text-on-page__subheading">Poznaj</p>
              <p className="text-on-page__heading">NASZĄ HISTORIĘ</p>
              <p className="text-on-page__text">
                Pierwszą restaurację otworzyliśmy w 1999 roku! Drugą 5 lat
                później, w 2004 roku.
              </p>
            </div>
          </div>
        </div>

        <div className="text-on-page with-image">
          <div className="text-on-page__wrapper">
            <p className="text-on-page__heading">O nas</p>
            <p className="text-on-page__text">
              Nasza firma Burgerownia sp. z o.o. powstała w lutym 1999r.
              Funkcjonujemy w dwóch lokalizacjach we Wrocławiu. Pierwsza to
              osiedle Oporów. Drugą jest „Burgerownia Klecina” na osiedlu
              Klecina. Pomysł stworzenia restauracji zrodził się z pasji
              właściciela do kuchni amerykańskiej. To własnie w USA poznał on
              prawdzimy smak amerykańskich dań i uczył się ich przyrządzania od
              najlepszych kucharzy w Nowym Jorku.
            </p>
          </div>
          <div className="image-container">
            <img src={beer2} alt="" />
          </div>
        </div>
        <div className="text-on-page  text-on-page--bgc-grey">
          <div className="text-on-page__wrapper">
            <p className="text-on-page__subheading">Jesteśmy małą</p>
            <p className="text-on-page__heading">rodzinną firmą</p>
            <p className="text-on-page__text">
              Naszą misją jest promować kulturę picia rzemieślniczego piwa i
              spożywania bardzo dobrej kuchni amerykańskiej. Do tego domieszka
              dobrej muzyki swing, r&b, jazz i obsługa, która stara się zapewnić
              jak najmilszą i jak najbardziej profesjonalną obsługę.
            </p>
          </div>
        </div>
        <div className="text-on-page text-on-page--bgc-white">
          <div className="text-on-page__wrapper">
            <p className="text-on-page__subheading">W naszych</p>
            <p className="text-on-page__heading">restauracjach</p>
            <p className="text-on-page__text">
              Staramy się tworzyć lokalny klimat miejsc, w których fajnie spędza
              się czas, wpada się „na piechotę”, nieraz kibicuje, ale też w
              których można zorganizować fajne imprezy lub rodzinne
              uroczystości. Staramy się być coraz lepsi i lepsi dla naszych
              gości, jesteśmy otwarci na wszelkie sugestie i pomysły. Ma być
              pysznie i to w jak najlepszej atmosferze!
            </p>
          </div>
        </div>
        <div className="text-on-page  text-on-page--bgc-white">
          <div className="text-on-page__wrapper">
            <p className="text-on-page__subheading">W Ramach</p>
            <p className="text-on-page__heading">NASZYCH RESTAURACJI</p>
            <p className="text-on-page__text">
              Oferujemy organizację: Bankietów, przyjęć urodzinowych, weselnych
              oraz z innych okazji (mi. in. Sylwestra, Oktoberfest, Halloween,
              Andrzejków).
            </p>
            <FancyButton
              content={"Organizacja Imprez"}
              path={"/organizacja-imprez"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

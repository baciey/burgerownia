import React from "react";
import beer from "./../img/beer.jpg";
import FancyButton from "./../components/FancyButton";

const Home = () => {
  return (
    <div className="home-container full-width">
      <div className="bg-image-container">
        <img className="bg-image" src={beer} alt="" />
        <div className="text-on-page">
          <div className="text-on-page__wrapper">
            <p className="text-on-page__subheading">Zapraszamy do</p>
            <p className="text-on-page__heading">BURGEROWNI</p>
            <p className="text-on-page__text">
              Naszą misją jest promować kulturę picia rzemieślniczego piwa i
              spożywania kuchni amerykańskiej.
            </p>
          </div>
        </div>
      </div>
      <div className="text-on-page text-on-page--bgc-white">
        <div className="text-on-page__wrapper">
          <p className="text-on-page__subheading">Poznaj</p>
          <h2 className="text-on-page__heading">NASZĄ HISTORIĘ</h2>
          <p className="text-on-page__text">
            Tworzymy wyjątkowe miejsca w dzielnicach Wrocławia – na Oporowie i
            na Klecinie. Ich wyjątkowość polega na tym, że gościmy bardzo dobrym
            piwem, które sami warzymy w naszym browarze, do tego serwujemy
            najlepsze dania kuchni amerykańskiej, a wystrój lokali i muzykę
            dobieramy tak, by tworzyły klimatyczne miejsce, w którym jest miło,
            jak na własnej kanapie…
          </p>
          <FancyButton content={"O NAS"} path={"/o-nas"} />
        </div>
      </div>
      <div className="text-on-page text-on-page--bgc-white">
        <div className="text-on-page__wrapper">
          <p className="text-on-page__subheading">Burgerownia</p>
          <h2 className="text-on-page__heading">Oporów</h2>
          <p className="text-on-page__text">
            W Burgerowni Oporów zjecie pizzę, burgery, sandwiche, naleśniki i
            sałatki. Czekają na Was również, wyjątkowe promocje i Happy Hours.
          </p>
          <FancyButton content={"MENU"} path={"/menu"} />
        </div>
      </div>
      <div className="text-on-page text-on-page--bgc-white">
        <div className="text-on-page__wrapper">
          <p className="text-on-page__subheading">Burgerownia</p>
          <h2 className="text-on-page__heading">Klecina</h2>
          <p className="text-on-page__text">
            W Burgerowni Klecina – śniadania, steki, burgery, sandwiche,
            żeberka, quesadille, fajity i lunche w cenie 19,90 zł serwowane od
            poniedziałku do piątku.
          </p>
          <FancyButton content={"MENU"} path={"/menu"} />
        </div>
      </div>
    </div>
  );
};

export default Home;

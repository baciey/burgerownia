import React from "react";
import MenuProduct from "./../components/MenuProduct";
import coffeeBgc from "./../img/coffee640.jpg";
import grillBgc from "./../img/grill.jpg";
import burgerBgc from "./../img/burger.jpg";
import pizzaBgc from "./../img/pizza.jpg";

class Menu extends React.Component {
  state = {
    products: {},
  };

  getData = () => {
    fetch("data/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ products: data });
      });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    let grill = "";
    if (this.state.products.grill) {
      const products = [...this.state.products.grill];
      grill = products.map((product) => (
        <MenuProduct key={product.name} product={product} />
      ));
    }
    let sandwiche = "";
    if (this.state.products.sandwiche) {
      const products = [...this.state.products.sandwiche];
      sandwiche = products.map((product) => (
        <MenuProduct key={product.name} product={product} />
      ));
    }
    let burgery = "";
    if (this.state.products.burgery) {
      const products = [...this.state.products.burgery];
      burgery = products.map((product) => (
        <MenuProduct key={product.name} product={product} />
      ));
    }
    let pizza = "";
    if (this.state.products.pizza) {
      const products = [...this.state.products.pizza];
      pizza = products.map((product) => (
        <MenuProduct key={product.name} product={product} />
      ));
    }
    let napoje = "";
    if (this.state.products.napoje) {
      const products = [...this.state.products.napoje];
      napoje = products.map((product) => (
        <MenuProduct key={product.name} product={product} />
      ));
    }

    return (
      <>
        <div className="menu-container">
          <div className="image-container">
            <img className="grill image" src={grillBgc} alt="" />
            <div className="text-on-image">
              <p className="text-on-image__heading">Menu</p>
              <p className="text-on-image__subheading">Burgerownia</p>
            </div>
          </div>
          <div className="menu-category">
            <div className="menu-main">
              <h3 className="title">Grill</h3>
              {grill}
            </div>
          </div>
          <div className="menu-category">
            <div className="text-on-page text-on-page--bgc-grey">
              <div className="text-on-page__wrapper">
                <p className="text-on-page__subheading">Sandwiche &</p>
                <p className="text-on-page__heading">BURGERY</p>
                <p className="text-on-page__text">
                  Sandwiche i burgery podajemy z frytkami, ketchupem albo mixem
                  sałat, w bułkach z naszego wypieku
                </p>
              </div>
            </div>
            <div className="image-container">
              <img className="burger image" src={burgerBgc} alt="" />
            </div>
            <div className="menu-main">
              <h3 className="title">Sandwiche</h3>
              {sandwiche}
            </div>
            <div className="menu-main">
              <h3 className="title">Burgery</h3>
              {burgery}
            </div>
          </div>
          <div className="menu-category">
            <div className="text-on-page text-on-page--bgc-grey">
              <div className="text-on-page__wrapper">
                <p className="text-on-page__heading">Pizza</p>
                <p className="text-on-page__text">
                  Ciasto na pizzę przygotowujemy na bazie naszego piwa. Rozmiar
                  pizzy – 32 cm.
                </p>
              </div>
            </div>
            <div className="image-container">
              <img className="pizza image" src={pizzaBgc} alt="" />
            </div>
            <div className="menu-main">
              <h3 className="title">Pizza</h3>
              {pizza}
            </div>
          </div>
          <div className="menu-category">
            <div className="text-on-page text-on-page--bgc-grey">
              <div className="text-on-page__wrapper">
                <p className="text-on-page__heading">Napoje</p>
              </div>
            </div>
            <div className="image-container">
              <img className="coffee image" src={coffeeBgc} alt="" />
            </div>
            <div className="menu-main">
              <h3 className="title">Napoje</h3>
              {napoje}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;

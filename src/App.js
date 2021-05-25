import React from "react";
import "./sass/App.sass";
import ScrollToTop from "react-router-scroll-top";

//LAYOUT
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  state = {
    width: window.innerWidth,
  };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <>
            <div className="page-container">
              <Header width={this.state.width}></Header>
              <Main></Main>
              <Footer></Footer>
            </div>
          </>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

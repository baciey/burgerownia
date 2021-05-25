import React from "react";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    topic: "",
    msg: "",
    msgSent: false,
    errorMsg: "",
  };
  verifyInput = () => {
    const { name, email, msg } = this.state;
    if (name.length <= 0) {
      return this.setState({ errorMsg: "Proszę podać imię" });
    } else {
      if (email.length <= 0) {
        return this.setState({ errorMsg: "Proszę podać adres email" });
      } else {
        if (msg.length <= 0) {
          return this.setState({ errorMsg: "Proszę wpisać wiadomość" });
        } else {
          this.sendMsg();
        }
      }
    }
  };
  sendMsg = () => {
    console.log("wyslano wiadomosc");
    this.setState({ msgSent: true });
  };

  handleChange = (name, value) => {
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="contact-form-container">
        {!this.state.msgSent ? (
          <div className="contact-form">
            <label htmlFor="name">Imię</label>
            <input
              type="text"
              onChange={(e) => this.handleChange(e.target.id, e.target.value)}
              value={this.state.name}
              id="name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={(e) => this.handleChange(e.target.id, e.target.value)}
              value={this.state.email}
              id="email"
            />
            <label htmlFor="topic">Temat</label>
            <input
              type="text"
              onChange={(e) => this.handleChange(e.target.id, e.target.value)}
              value={this.state.topic}
              id="topic"
            />
            <label htmlFor="msg">Wiadomość</label>
            <textarea
              onChange={(e) => this.handleChange(e.target.id, e.target.value)}
              value={this.state.msg}
              id="msg"
            ></textarea>
            <button onClick={this.verifyInput} className="fancy-button">
              <a>WYŚLIJ</a>
            </button>
            <p className="errorMsg">{this.state.errorMsg}</p>
          </div>
        ) : null}
        {this.state.msgSent ? (
          <div className="msgSent">
            <h1>Wiadomość wysłana</h1>
            Imię: {this.state.name} <br />
            Email: {this.state.email}
            <br />
            Temat: {this.state.topic} <br />
            Wiadomość: {this.state.msg} <br />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ContactForm;

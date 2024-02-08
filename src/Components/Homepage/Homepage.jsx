import { Component } from "react";
import Header from "../Header/Header";
import Display from "../Display";
import "../i18next";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      language: "en",
    };
  }

  handleSelect = (selectedLanguage) => {
    this.setState({ language: selectedLanguage.language });
    let loc = "http://localhost:5173/";
    window.location.replace(loc + "?lng=" + selectedLanguage.language);
  };

  render() {
    return (
      <>
        <Header addLanguage={this.handleSelect} />
        <Display />
      </>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default Homepage;

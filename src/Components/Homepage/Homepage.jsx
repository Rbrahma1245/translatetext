import { Component } from "react";
import Header from "../Header/Header";
import { withTranslation } from "react-i18next";
import Display from "../Display";
import "../i18next";

class Homepage extends Component {
  state = {
    language: "en",
  };

  changeLanguage = (newLang) => {
    const { i18n } = this.props;
    this.setState({ language: newLang });
    i18n.changeLanguage(newLang);
    this.updateURL(newLang);
  };

  updateURL = (newLang) => {
    const loc = "http://localhost:5173/";
    window.history.replaceState({}, "", loc + "?lng=" + newLang);
  };

  handleSelect = (selectedLanguage) => {
    this.changeLanguage(selectedLanguage.language);
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
export default withTranslation()(Homepage);

import { Component } from "react";
import Header from "../Header/Header";
import "../i18next";
import { withTranslation } from "react-i18next";
import Display from "../Display";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      language: "en",
      text: "",
    };
  }

  handleSelect = (selectedLanguage) => {
    this.setState({ language: selectedLanguage.language });

    // let loc = "http://localhost:5173/";
    // window.location.replace(loc + "?lng=" + selectedLanguage.language);
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { t } = this.props;
    return (
      <>
        <Header addLanguage={this.handleSelect} />
        <Display key={this.state.language}/>

        {/* Use double curly braces for dynamic variables in t function */}
        {/* <p key={this.state.language}>{t("text", { name: "how are you" })}</p> */}
      </>
    );
  }
}

export default withTranslation()(Homepage);

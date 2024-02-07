import { Component } from "react";
import { withTranslation } from "react-i18next";
import "../i18next";
import Header from "../Header/Header";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      language: "English",
    };
  }

  handleSelect = (selectedLanguage) => {
    this.setState({ language: selectedLanguage.language });
  };

  changeLanguage = (lng) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.language !== this.state.language) {
      this.changeLanguage(this.state.language);
    }
  }

  render() {
    const { t } = this.props;

    return (
      <>
        <Header addLanguage={this.handleSelect} />

        <h1>{t("text.desc")}</h1>
      </>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withTranslation()(Homepage);

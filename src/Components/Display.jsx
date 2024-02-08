import { Component } from "react";
import { withTranslation } from "react-i18next";

class Display extends Component {
  render() {
    const { t } = this.props;

    console.log(this.props);
    return (
      <div key={this.props.language} >
        <h1>{t("welcome")}</h1>
        <label>{t("desc")}</label>
      </div>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withTranslation()(Display);

import { Component } from "react";
import { withTranslation } from "react-i18next";

class Display extends Component {
    
  render() {
    const { t } = this.props;
    return (
      <div>
        <h1>{t("welcome")}</h1>
        <label>{t("desc")}</label>
      </div>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withTranslation()(Display);

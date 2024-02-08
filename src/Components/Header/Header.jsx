import { Component } from "react";
import logo from "../Images/logo.jpg";
import "./Header.scss";

class Header extends Component {
  handleSelect(e) {
    // eslint-disable-next-line react/prop-types
    this.props.addLanguage({
      language: e.target.value,
    });
  }

  options = [
    { language: "Select Lang", value: "" },
    { language: "English", value: "en" },
    { language: "Hindi", value: "hi" },
    { language: "Bengali", value: "bn" },
    { language: "Turkish", value: "tr" },
    { language: "Japanese", value: "ja" },
  ];

  render() {
    return (
      <div className="header-container" style={{ display: "flex" }}>
        <div className="header-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-right">
          <select onChange={this.handleSelect.bind(this)}>
            {this.options.map((e, i) => {
              return (
                <option key={i} value={e.value}>
                  {e.language}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default Header;

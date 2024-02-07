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
    { language: "English", value: "English" },
    { language: "Hindi", value: "Hindi" },
    { language: "Turkish", value: "Turkish" },
    { language: "Japanese", value: "Japanese" },
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

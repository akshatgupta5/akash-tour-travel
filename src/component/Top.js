import React from "react";
import PropTypes from "prop-types";
const a = 50;
function Top(props) {
  const whatsapp = () => {
    var phoneNumber = "+919876712637"; // Replace 'MESSAGE' with the pre-filled message you want to send. 
    var message = "Hi there! I'm planning to travel soon and I'm in need of some assistance. Can you help me with information on your available tour packages, destinations, and pricing? I'm interested in exploring new places and experiencing unique adventures. Also, if you have any recommendations for solo travelers or group tours, that would be great! Looking forward to hearing from you. 🌍✈️"; // Generate the WhatsApp URL 
    var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message); // Open the WhatsApp chat in a new tab or window 
    window.open(whatsappUrl, '_blank'); }
    const normalmode={
      color: props.mode==='light'?'black':'white',
    };
    return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <span className="navbar-brand">
          <span style={{color:'red'}}>AKASH </span>
        {props.title}
        </span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.about}
              </a>
            </li> */}
          </ul>
            <img className="whatsapp" id="whatsappButton" src={require("../images/whatsapp.png")} alt="h" onClick={whatsapp}/>
          <span className="mx-2" style={normalmode}>Contact Us</span>
          <div
            className={`form-check form-switch mx-2 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label className="form-check-label" htmfor="flexSwitchCheckDefault">
              Enable {props.mode === "light" ? "dark" : "light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Top;
export { a };

Top.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Top.defaultProps = {
  title: "title",
  about: "About",
};

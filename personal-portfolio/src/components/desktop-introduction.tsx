import "./desktop-introduction.css";
import endlessCorridor from "../assets/images/endless_corridor.svg";

const DesktopIntroduction = () => {
  return (
    <div className="page">
      <div className="keyart" id="parallax">
        <div className="keyart_layer" id="keyart-8"></div>
        <div className="keyart_layer" id="keyart-7"></div>
        <div className="keyart_layer" id="keyart-6"></div>
        <div className="keyart_layer" id="keyart-5"></div>
        <div className="keyart_layer" id="keyart-4"></div>
        <div className="keyart_layer" id="keyart-3"></div>
        <div className="keyart_layer" id="keyart-2"></div>
        <div className="keyart_layer" id="keyart-1"></div>
        <div className="keyart_layer" id="keyart-0"></div>
      </div>
      <div className="overflow">
        <h1>CSS Parallax Scrolling</h1>
      </div>
    </div>
  );
};

export default DesktopIntroduction;

import "../styles/footer.css";
import TrapTheologyImage from "../images/tt-logo.png";
import Trackstarz from "../images/trackstarz.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-container">
        <div>
          <a
            href="https://trackstarz.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Trackstarz} alt="Trap Theology" className="kmb-logo" />
          </a>
        </div>
        <div>
          <img
            src={TrapTheologyImage}
            alt="Trap Theology"
            className="kmb-logo"
          />
        </div>
        <div className="trademark">
          <p>{year} Trap Theology &trade;</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

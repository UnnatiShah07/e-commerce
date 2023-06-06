import "./footer.css";
import { SiGithub, SiTwitter, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <p className="footer-text">Develop by Unnati</p>
      <div className="icon-div">
        <a
          className="link"
          target="_blank"
          href="https://github.com/UnnatiShah07" rel="noreferrer"
        >
          <SiGithub size={20} />
        </a>
        <a
          className="link"
          target="_blank"
          href="https://twitter.com/UnnatiS72065630" rel="noreferrer"
        >
          <SiTwitter size={20} />
        </a>
        <a
          target="_blank"
          className="link"
          href="https://www.linkedin.com/in/unnati-shah-5801b2252/"
          rel="noreferrer"
        >
          <SiLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

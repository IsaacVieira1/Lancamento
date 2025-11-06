import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./SocialSection.css"; 

export function SocialSection() {
  return (
    <section className="social-section">
      <h2 className="social-title">Siga-nos nas redes sociais</h2>

      <div className="social-icons">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon youtube"
        >
          <FaYoutube />
        </a>
      </div>

      <p className="footer-text">
        Todos os direitos reservados @OiDigitalmedia
      </p>
    </section>
  );
}

export default SocialSection;

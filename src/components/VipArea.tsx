import { useState } from "react";
import { FaPlay, FaHome, FaSearch, FaCalendar, FaTv, FaPlus, FaRobot } from "react-icons/fa";
import "./VipArea.css";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


interface VIPItem {
  title: string;
  thumbnail: string;
  description?: string;
  year?: string;
  seasons?: string;
  rating?: string;
}

const vipItems: VIPItem[] = [
  {
    title: "Fundamentos da IA",
    thumbnail: "/images/not.webp",
    description: "Do básico à prática: sua introdução ao universo da inteligência artificial",
    year: "2025",
    seasons: "1 Temporada",
    rating: " - ",
  },
  { title: "Introdução à Inteligência Artificial", thumbnail: "/images/talk.webp" },
];

export function VIPArea() {
  const [featured] = useState(vipItems[0]);
  const navigate = useNavigate();

  const goToMembersArea =  () => {
    navigate("/Menbers");
  }

  

  return (
    <div className="vip-area">
      {/* Sidebar */}
      <nav className="vip-sidebar">
        <FaHome className="vip-icon-sidebar" onClick={goToMembersArea} />
        <FaSearch className="vip-icon-sidebar" />
        <FaCalendar className="vip-icon-sidebar" />
        <FaTv className="vip-icon-sidebar" />
        <FaPlus className="vip-icon-sidebar" />
      </nav>

      {/* Main content */}
      <div className="vip-main">
        {/* Featured Banner */}
        <div
          className="vip-banner"
          style={{ backgroundImage: `url(${featured.thumbnail})` }}
        >
          <div className="vip-banner-overlay">
            <h1>{featured.title}</h1>
            {featured.year && <span>{featured.year}</span>}
            {featured.rating && <span>{featured.rating}</span>}
            {featured.seasons && <span>{featured.seasons}</span>}
            {featured.description && <p>{featured.description}</p>}
            <button className="vip-play-btn">
              <FaPlay /> Assistir
            </button>
          </div>
        </div>

        {/* Carousel */}
        <h2>Vídeos já no ar!</h2>
        <div className="vip-carousel">
          {vipItems.map((item, index) => (
            <div key={index} className="vip-card">
              <img src={item.thumbnail} alt={item.title} />
              <div className="vip-card-overlay">
                <img
                  src="/images/impactflix.png"
                  alt="Netflix Logo"
                  className="vip-netflix-logo"
                />

                <span>{item.title}</span>
                <button>
                  <FaRobot  /> Ir para IA
                </button>
              </div>
            </div>
          ))}
        </div>

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
        </section>

      </div>
    </div>
  );
}

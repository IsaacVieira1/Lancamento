import { useEffect, useState } from "react";
import "./MembersArea.css";
import { FaPlay } from "react-icons/fa";
import { CommentsSection } from "./CommentsSection";
import { useNavigate } from "react-router-dom";
import SocialSection from "./SocialSection";

const bannerImages = [
  "/images/banner.png",
  "/images/talk.webp",
  "/images/brand.webp",
  "/images/not.webp",
];

export default function Impactflix() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  const [showGatePopup, setShowGatePopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % bannerImages.length);
        setFade(true);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="impactflix-container">
      {/* HEADER */}
      <header className="impactflix-header">
        <img
          src="/images/impactflix.png"
          alt="Impactflix Logo"
          className="impactflix-logo"
        />

        <div className="header-right">
          <span className="user-name">Olá, Usuário</span>
          <button
            className="vip-outline-button"
            onClick={() => navigate("/VipSignup")}
          >
            Área VIP
          </button>
          <img
            src="/images/user (1).png"
            alt="Avatar do Usuário"
            className="user-avatar"
          />
        </div>
      </header>

      {/* BANNER */}
      <section
        className={`impactflix-banner ${fade ? "fade-in" : "fade-out"}`}
        style={{
          backgroundImage: `url(${bannerImages[currentImage]})`,
        }}
      >
        <div className="banner-overlay">
          <h2 className="banner-title">
            COMUNIDADE <br /> PERSONAL BRAND
          </h2>
        </div>
      </section>

      {/* AULAS */}
      <section className="impactflix-classes">
        <div className="class-card">
          <img src="/images/banner2.png" alt="Aula 01" className="class-image" />
          <div className="class-info">
            <h3>Aula 01</h3>
            <h4>Fundamentos da Autoridade Digital</h4>
            <p>
              Aprenda os pilares fundamentais para construir sua presença digital
              e se tornar uma autoridade no seu nicho.
            </p>
            <button className="watch-button" onClick={() => setShowGatePopup(true)}>
              <FaPlay /> Assistir
            </button>
          </div>
        </div>

        <div className="class-card">
          <img src="/images/banner3.png" alt="Aula 02" className="class-image" />
          <div className="class-info">
            <h3>Aula 02</h3>
            <h4>Estratégias de Conteúdo e Engajamento</h4>
            <p>
              Descubra como criar conteúdo que converte e engaja sua audiência,
              transformando seguidores em clientes.
            </p>
            <button className="watch-button" onClick={() => setShowGatePopup(true)}>
              <FaPlay /> Assistir
            </button>
          </div>
        </div>
      </section>

      <section className="extra-class-section">
        <div className="extra-background-text">
          <span>AULA EXTRA</span>
          <span>AULA EXTRA</span>
          <span>AULA EXTRA</span>
          <span>AULA EXTRA</span>
          <span>AULA EXTRA</span>
        </div>

        <div className="extra-content">
          <div className="extra-left">
            <img
              src="/images/EXTRA.png"
              alt="Aula Extra"
              className="extra-image"
            />
          </div>

          <div className="extra-right">
            <h2 className="extra-title">Aula Extra</h2>
            <p className="extra-description">
              Informações sobre a aula extra, informações sobre a aula extra,
              informações sobre a aula extra, informações sobre a aula extra.
            </p>
            <button className="extra-button" onClick={() => setShowGatePopup(true)}>
              <FaPlay /> Assistir
            </button>
          </div>
        </div>
      </section>

      <CommentsSection />

      {/* REDES SOCIAIS */}
      <SocialSection />

      {/* POP-UP */}
      {showGatePopup && (
        <div className="gate-popup-overlay" onClick={() => setShowGatePopup(false)}>
          <div className="gate-popup" onClick={(e) => e.stopPropagation()}>
            <img src="/images/Ads Post 4 - VERMELHO.png" alt="Acesso Bloqueado" className="gate-popup-image" />

            <button
              className="gate-popup-learn-more"
              onClick={() => navigate("/VipSignup")}
            >
              Saiba mais
            </button>

            <button className="gate-popup-close" onClick={() => setShowGatePopup(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

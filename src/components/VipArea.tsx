import { useState } from "react";
import {
  FaPlay,
  FaHome,
  FaBookOpen,
  FaUsers,
  FaRobot,
  FaVideo
} from "react-icons/fa";
import "./VipArea.css";
import { useNavigate } from "react-router-dom";
import SocialSection from "./SocialSection";

interface VIPItem {
  title: string;
  thumbnail: string;
  description?: string;
  year?: string;
  seasons?: string;
  rating?: string;
  videoUrl?: string;
}

const vipItems: VIPItem[] = [
  {
    title: "Fundamentos da IA",
    thumbnail: "/images/not.webp",
    description:
      "Do básico à prática: sua introdução ao universo da inteligência artificial",
    year: "2025",
    seasons: "1 Temporada",
    rating: " - ",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    title: "Introdução à Inteligência Artificial",
    thumbnail: "/images/talk.webp",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    title: "Introdução à Inteligência Artificial",
    thumbnail: "/images/not.webp",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
  {
    title: "Introdução à Inteligência Artificial",
    thumbnail: "/images/talk.webp",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
  },
];

// Aulas Extras
const extraClasses: VIPItem[] = [
  {
    title: "Aula IA 1 - ChatGPT e Automações",
    thumbnail: "/images/Thumb - Aula 1.png",
    description:
      "Informações sobre a aula extra, informações sobre a aula extra, informações sobre a aula extra.",
    videoUrl: "https://www.youtube.com/embed/EXTRA_VIDEO_1",
  },
  {
    title: "Aula IA 2 - IA para Negócios",
    thumbnail: "/images/Thumb - Aula 2.png",
    description:
      "Informações sobre a aula extra, informações sobre a aula extra, informações sobre a aula extra.",
    videoUrl: "https://www.youtube.com/embed/EXTRA_VIDEO_2",
  },
  {
    title: "Aula IA 3 - Prompt Engineering",
    thumbnail: "/images/Thumb - Aula 1.png",
    description:
      "Informações sobre a aula extra, informações sobre a aula extra, informações sobre a aula extra.",
    videoUrl: "https://www.youtube.com/embed/EXTRA_VIDEO_3",
  },
  {
    title: "Aula IA 4 - Criando Bots Inteligentes",
    thumbnail: "/images/Thumb - Aula 2.png",
    description:
      "Informações sobre a aula extra, informações sobre a aula extra, informações sobre a aula extra.",
    videoUrl: "https://www.youtube.com/embed/EXTRA_VIDEO_4",
  },
];

export function VIPArea() {
  const [featured] = useState(vipItems[0]);
  const navigate = useNavigate();

  const goToMembersArea = () => navigate("/Members");
  const goToEntregaveis = () => navigate("/entregaveis");
  const goToCommunity = () => navigate("/comunidade");
  const goToExtraClasses = () => navigate("/aulasextras");

  return (
    <div className="vip-area">
      <nav className="vip-sidebar">
        <FaHome className="vip-icon-sidebar" onClick={goToMembersArea} />
        <FaBookOpen className="vip-icon-sidebar" onClick={goToEntregaveis} />
        <FaUsers className="vip-icon-sidebar" onClick={goToCommunity} />
        <FaVideo className="vip-icon-sidebar" onClick={goToExtraClasses} />
      </nav>

      <div className="vip-main">
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
            {featured.videoUrl && (
              <button className="vip-play-btn">
                <FaPlay /> Assistir
              </button>
            )}
          </div>
        </div>

        {/* Primeira sessão de vídeos */}
        <h2 className="vip-espace">Vídeos já no ar!</h2>
        <div className="vip-carousel">
          {vipItems.map((item, index) => (
            <div key={index} className="vip-card">
              <img src={item.thumbnail} alt={item.title} />
              <div className="vip-card-overlay">
                <img
                  src="/images/impactflix.png"
                  alt="Logo"
                  className="vip-netflix-logo"
                />
                <span>{item.title}</span>
                <div className="vip-card-buttons">
                  <button onClick={() => navigate("/ia")}>
                    <FaRobot /> Ir para IA
                  </button>
                  {item.videoUrl && (
                    <button>
                      <FaPlay /> Assistir
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="vip-separator" />

        {/* Aulas Extras */}
        {extraClasses.map((item, index) => (
          <div key={index}>
            <section className="extra-class-section">
              <div className="extra-background-text">
                <span>AULAS IA</span>
                <span>AULAS IA</span>
                <span>AULAS IA</span>
                <span>AULAS IA</span>
                <span>AULAS IA</span>
              </div>

              <div
                className="extra-content"
                style={{
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
              >
                <div className="extra-left2">
                  <video
                    src={item.videoUrl || "/videos/default.mp4"}
                    controls
                    poster={item.thumbnail}
                    className="extra-video"
                  ></video>
                </div>

                <div className="extra-right">
                  <h2 className="extra-title">{item.title}</h2>
                  <p className="extra-description">{item.description}</p>
                  <div className="extra-buttons">
                    <button className="extra-button2">
                      <FaPlay /> Assistir
                    </button>
                    <button className="extra-button2" onClick={() => navigate("/ia")}>
                      <FaRobot /> Ir para IA
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {index < extraClasses.length - 1 && <hr className="extra-separator" />}
          </div>
        ))}
        

        <h2 className="vip-espace">Assista também às aulas extras!</h2>
        <div className="vip-carousel">
          {vipItems.map((item, index) => (
            <div key={index} className="vip-card">
              <img src={item.thumbnail} alt={item.title} />
              <div className="vip-card-overlay">
                <img
                  src="/images/impactflix.png"
                  alt="Logo"
                  className="vip-netflix-logo"
                />
                <span>{item.title}</span>
                <div className="vip-card-buttons">
                  {item.videoUrl && (
                    <button>
                      <FaPlay /> Assistir
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pdf-button-container">
          <button className="pdf-button" onClick={goToExtraClasses}>
            <FaVideo /> Ir para as aulas extras
          </button>
        </div>

       
        <SocialSection />
        
      </div>
    </div>
  );
}

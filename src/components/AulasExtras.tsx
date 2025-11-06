import { useRef } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight, FaArrowLeft, } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./AulasExtras.css";
import SocialSection from "./SocialSection";

interface Aula {
  titulo: string;
  thumbnail: string;
  descricao?: string;
}

const AulasExtras = () => {
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const navigate = useNavigate(); // <-- ADICIONADO AQUI

  const rolar = (index: number, direcao: "esquerda" | "direita") => {
    const container = rowsRef.current[index];
    if (container) {
      const scrollAmount = direcao === "direita" ? 400 : -400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const aulas: Aula[] = [
    { titulo: "Aula 1: Fundamentos de IA", thumbnail: "images/not.webp", descricao: "Aprenda os conceitos básicos de IA." },
    { titulo: "Aula 2: ChatGPT para Produtividade", thumbnail: "images/brand.webp", descricao: "Use IA para otimizar seu trabalho." },
    { titulo: "Aula 3: Criação de Sites com React", thumbnail: "images/talk.webp", descricao: "Construa sites modernos com React." },
    { titulo: "Aula 4: Automação com IA", thumbnail: "images/banner.png", descricao: "Automatize tarefas repetitivas usando IA." },
    { titulo: "Aula 5: Design e UX Inteligente", thumbnail: "images/not.webp", descricao: "Aplique IA em design e experiência do usuário." },
  ];

  const recomendadas: Aula[] = [
    { titulo: "IA para Iniciantes", thumbnail: "images/banner2.png" },
    { titulo: "Como criar Bots com IA", thumbnail: "images/banner3.png" },
    { titulo: "Projetos Avançados de IA", thumbnail: "images/banner2.png" },
    { titulo: "Machine Learning Simplificado", thumbnail: "images/banner3.png" },
    { titulo: "Ferramentas de IA para Devs", thumbnail: "images/banner2.png" },
  ];

  const categorias = [
    { titulo: "Suas Aulas", dados: aulas },
    { titulo: "Recomendadas", dados: recomendadas },
  ];

  return (
    <div className="aulas-extras">
      {/* Header */}
      <header className="vip-header">
        <div className="logo">AULAS EXTRAS</div>
        <nav className="vip-nav">
          <button className="nav-link btn-voltar" onClick={() => navigate("/vip")}>
            <FaArrowLeft /> Voltar
          </button>
          <button className="nav-link btn-pdf" onClick={() => navigate("/entregaveis")}>
            Ir para PDFs
          </button>
        </nav>
      </header>

      {/* Banner */}
      <main className="vip-main">
        <section
          className="vip-banner"
          style={{ backgroundImage: `url('images/banner.png')` }}
        >
          <div className="banner-gradient"></div>
          <div className="banner-content">
            <h1 className="banner-title">Aulas Extras</h1>
            <p className="banner-desc">
              Aprenda inteligência artificial, programação e ferramentas modernas
              em aulas exclusivas, no estilo Netflix.
            </p>
            <div className="banner-actions">
              <button className="btn btn-play">
                <FaPlay /> Assistir
              </button>
            </div>
          </div>
        </section>

        {/* Carrosséis */}
        <div className="vip-rows">
          {categorias.map((categoria, index) => (
            <div key={index} className="row-wrap">
              <h2 className="row-title">{categoria.titulo}</h2>

              <div className="row-controls">
                <button
                  className="row-arrow"
                  onClick={() => rolar(index, "esquerda")}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="row-arrow"
                  onClick={() => rolar(index, "direita")}
                >
                  <FaChevronRight />
                </button>
              </div>

              <div
                className="row"
                ref={(el) => {
                  if (el) rowsRef.current[index] = el;
                }}
              >
                {categoria.dados.map((aula, i) => (
                  <div className="card" key={i}>
                    <div
                      className="card-thumb"
                      style={{ backgroundImage: `url(${aula.thumbnail})` }}
                    ></div>
                    <div className="card-meta">
                      <p className="card-title">{aula.titulo}</p>
                      {aula.descricao && <p className="card-desc">{aula.descricao}</p>}
                      <button className="btn-play-card">
                        <FaPlay /> Assistir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="aulas-pdf-container">
          <button
            className="aulas-pdf-btn"
            onClick={() => navigate("/entregaveis")}
          >
            Acessar PDFs
          </button>
        </div>



        <SocialSection />
      </main>
    </div>
  );
};

export default AulasExtras;

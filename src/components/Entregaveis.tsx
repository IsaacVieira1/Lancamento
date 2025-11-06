import "./Entregaveis.css";
import { FaArrowLeft, FaDownload, FaFileAlt, } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SocialSection from "./SocialSection";


interface Livro {
  id: number;
  titulo: string;
  resumo: string;
  capa: string;
  pdf: string;
}

const livros: Livro[] = [
  {
    id: 1,
    titulo: "Guia de Inteligência Artificial",
    resumo: "Aprenda os fundamentos e aplicações práticas da IA moderna.",
    capa: "/images/c695d1b813567a20d37a55da3bebb4445a2be9ad.png",
    pdf: "/pdfs/guia-ia.pdf",
  },
  {
    id: 2,
    titulo: "Automação com ChatGPT",
    resumo: "Descubra como usar IA para automatizar tarefas e negócios.",
    capa: "/images/50697e4ec2347b0d1959123d77a1a0cec9532505.png",
    pdf: "/pdfs/automacao-chatgpt.pdf",
  },
  {
    id: 3,
    titulo: "Marketing Digital Avançado",
    resumo: "Guia prático para estratégias de marketing digital em 2025.",
    capa: "/images/c695d1b813567a20d37a55da3bebb4445a2be9ad.png",
    pdf: "/pdfs/marketing.pdf",
  },
  {
    id: 4,
    titulo: "IA para Empreendedores",
    resumo: "Como usar inteligência artificial para escalar seu negócio.",
    capa: "/images/50697e4ec2347b0d1959123d77a1a0cec9532505.png",
    pdf: "/pdfs/empreendedores.pdf",
  },
  {
    id: 5,
    titulo: "Prompt Engineering",
    resumo: "Domine a arte de criar prompts poderosos para IA.",
    capa: "/images/c695d1b813567a20d37a55da3bebb4445a2be9ad.png",
    pdf: "/pdfs/prompt.pdf",
  },
  {
    id: 6,
    titulo: "Tendências do Futuro",
    resumo: "As principais tecnologias que moldarão os próximos anos.",
    capa: "/images/50697e4ec2347b0d1959123d77a1a0cec9532505.png",
    pdf: "/pdfs/futuro.pdf",
  },
];

export function Entregaveis() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/vip");
  };

  return (
    <div className="entregaveis-area">
      {/* Header */}
      <header className="entregaveis-header">
        <button onClick={goBack} className="voltar-btn">
          <FaArrowLeft /> Voltar
        </button>
        <div className="titulo-container">
          <FaFileAlt className="titulo-icon" />
          <h1>PDFs</h1>
        </div>
        <p>Baixe seus mini-books e materiais exclusivos</p>
      </header>

      {/* Grid de livros */}
      <div className="livros-grid">
        {livros.map((livro) => (
          <div key={livro.id} className="livro-card">
            <img src={livro.capa} alt={livro.titulo} className="livro-capa" />
            <div className="livro-info">
              <h2>{livro.titulo}</h2>
              <p>{livro.resumo}</p>
              <a href={livro.pdf} download className="btn-baixar">
                <FaDownload /> Baixar PDF
              </a>
            </div>
            
          </div>
        ))}
      </div>
      
      <SocialSection />
    </div>
  );
}

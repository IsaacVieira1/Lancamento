import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { LogOut, MessageCircle, Play, X } from "lucide-react";
import { Image } from "./Fallback/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import { Brain } from "lucide-react";

interface VIPAreaProps {
  user: { name: string; email: string; whatsapp: string };
  onLogout: () => void;
}

export function VIPArea({ user, onLogout }: VIPAreaProps) {
  const [openVideoUrl, setOpenVideoUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const vipCourses = [
    {
      id: 1,
      title: "VIP Aula 01 - Estratégias Avançadas",
      description: "Aprenda técnicas avançadas de marketing digital e autoridade online.",
      thumbnail: "/images/ia.webp",
      duration: "1h 20min",
      url: "https://www.youtube.com/embed/VIDEO_ID_1",
      sideText: [
        "Estratégias secretas para aumentar conversões.",
        "Como posicionar sua marca como autoridade.",
        "Ferramentas exclusivas para acelerar resultados.",
        "Como criar campanhas de marketing de alta performance.",

      ],
    },
    {
      id: 2,
      title: "VIP Aula 02 - Segredos de Conversão",
      description: "Descubra como gerar mais vendas com estratégias secretas.",
      thumbnail: "/images/ia.webp",
      duration: "55 min",
      url: "https://www.youtube.com/embed/VIDEO_ID_2",
      sideText: [
        "Técnicas avançadas de funil de vendas.",
        "Psicologia aplicada para engajamento.",
        "Estudos de caso reais para inspirar ações.",
        "Estratégias para aumentar taxa de cliques e abertura de emails.",

      ],
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{ overflowX: "hidden" }}>
      {/* MEDIA QUERY INLINE */}
      <style>
        {`
          @media (max-width: 1024px) {
            main {
              margin-left: 0 !important;
              padding: 16px !important;
            }
            .course-container {
              flex-direction: column !important;
              align-items: center !important;
              margin-right: 0 !important;
              gap: 20px !important;
            }
            .course-card {
              width: 100% !important;
              max-width: 350px !important;
              margin: 0 auto !important;
            }
            .course-text {
              max-width: 90% !important;
              margin: 0 auto !important;
              padding-top: 10px !important;
              white-space: normal !important;
              text-align: center !important;
            }
            .watch-button {
              padding: 8px 0 !important;
            }
          }

          @media (max-width: 480px) {
            h2 {
              font-size: 1.5rem !important;
            }
            .course-text h3 {
              font-size: 1.3rem !important;
            }
            .course-text p {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>

      {/* HEADER */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">VIP</span>
            </div>
            <div>
              <h1 className="text-white text-xl">Área VIP</h1>
              <p className="text-gray-300 text-sm">Conteúdos Exclusivos</p>
            </div>
          </div>

          {/* BOAS-VINDAS E BOTOES */}
          <div className="flex items-center space-x-4">
            <span className="text-white text-sm">Olá, {user.name.split(" ")[0]}!</span>

            {/* BOTÃO VOLTAR PARA MEMBROS */}
            <Button
              onClick={() => navigate("/members")}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "rgba(40, 167, 69, 0.2)",
                border: "1px solid rgba(40, 167, 69, 0.3)",
                color: "rgba(40, 197, 77, 1)",
                padding: "10px 9px",
                borderRadius: "0.5rem",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              <Play className="w-3 h-3" /> Voltar
            </Button>

            <Button
              style={{ cursor: "pointer", }}
              onClick={onLogout}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>

          <style>
            {`
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
                100% { transform: translateY(0px); }
              }
            `}
          </style>
        </div>
      </header>

      {/* MAIN */}
      <main style={{ marginLeft: "60px", padding: "32px 16px" }}>
        <div style={{ marginBottom: "32px" }}>
          <h2 style={{ color: "white", fontSize: "1.975rem", marginBottom: "8px" }}>Aulas VIP</h2>
          <p style={{ color: "#d1d5db", margin: 0 }}>Assista aos conteúdos exclusivos no seu próprio ritmo</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {vipCourses.map((course, index) => (
            <div key={course.id} style={{ display: "flex", flexDirection: "column" }}>
              <div
                className="course-container"
                style={{
                  display: "flex",
                  gap: "20px",
                  marginRight: "65px",
                  alignItems: "flex-start",
                  flexDirection: index % 2 === 1 ? "row-reverse" : "row",
                }}
              >
                <Card
                  className="course-card bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 relative"
                  style={{ marginBottom: "60px", width: "430px" }}
                >
                  <div style={{ position: "relative" }}>
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "0.5rem" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        color: "white",
                        fontSize: "10px",
                        padding: "2px 5px",
                        borderRadius: "4px",
                      }}
                    >
                      {course.duration}
                    </div>
                    <div
                      onClick={() => setOpenVideoUrl(course.url)}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        borderRadius: "0.5rem",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.3)")}
                    >
                      <Play style={{ width: "30px", height: "30px", color: "white" }} />
                    </div>
                  </div>

                  <CardContent style={{ padding: "10px" }}>
                    <h3 style={{ fontWeight: "bold", color: "white", fontSize: "20px", marginBottom: "5px" }}>{course.title}</h3>
                    <p style={{ color: "white", fontSize: "15px", marginBottom: "8px" }}>{course.description}</p>
                    <Button
                      onClick={() => window.open(course.url.replace("embed/", "watch?v="), "_blank")}
                      className="watch-button w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                      style={{ cursor: "pointer", marginTop: "10px", fontSize: "15px", padding: "6px 120px" }}
                    >
                      Assistir
                      <Play className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                <div
                  className="course-text"
                  style={{
                    color: "white",
                    maxWidth: "500px",
                    paddingTop: "60px",
                    lineHeight: "1.6",
                    whiteSpace: "normal",
                    marginRight: index % 2 === 1 ? "20%" : "10px",
                    marginLeft: "30px",
                  }}
                >
                  <h3 style={{ fontWeight: "bold", fontSize: "1.65rem", marginBottom: "12px" }}>
                    O que você vai aprender:
                  </h3>
                  {course.sideText.map((text, idx) => (
                    <p key={idx} style={{ fontSize: "15px", marginBottom: "8px" }}>
                      {text}
                    </p>
                  ))}

                  {/* BOTÃO ROXO "IR PARA IA" */}


                  <Button
                    onClick={() => window.open("https://seusite.com/ia", "_blank")}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "rgba(186, 85, 211, 0.2)",
                      border: "1px solid rgba(186, 85, 211, 0.4)",
                      color: "#BA55D3",
                      padding: "20px 90px",
                      borderRadius: "0.5rem",
                      marginTop: "30px",
                      fontWeight: 500,
                      fontSize: "15px",
                      transition: "all 0.3s ease",
                      animation: "float 3s ease-in-out infinite", // animação flutuação
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(186, 85, 211, 0.4)";
                      e.currentTarget.style.border = "1px solid rgba(186, 85, 211, 0.6)";
                      e.currentTarget.style.color = "#FF00FF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(186, 85, 211, 0.2)";
                      e.currentTarget.style.border = "1px solid rgba(186, 85, 211, 0.4)";
                      e.currentTarget.style.color = "#BA55D3";
                    }}
                  >
                    <Brain className="w-4 h-4" /> Ir para IA
                  </Button>

                  {/* Adicione esta tag <style> uma vez no componente */}
                  <style>
                    {`
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0px); }
  }
`}
                  </style>

                </div>

              </div>

              {/* LINHA SEPARADORA */}
              <hr style={{ border: "1px solid rgba(255,255,255,0.2)", width: "100%", margin: "20px 0" }} />
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DE VÍDEO */}
      {openVideoUrl && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: "900px" }}>
            <iframe
              width="100%"
              height="500px"
              src={openVideoUrl}
              title="Vídeo VIP"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "0.5rem" }}
            ></iframe>
            <Button
              onClick={() => setOpenVideoUrl(null)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                backgroundColor: "hsla(0, 67%, 32%, 1.00)",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                cursor: "pointer",
              }}
            >
              <X className="w-4 h-4" /> Fechar
            </Button>
          </div>
        </div>

        

      )}
      {/* SEÇÃO RAFA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          marginTop: "250px",
          flexWrap: "wrap",
          padding: "0 16px",
        }}
      >
        <img
          src="/images/01-removebg-preview.png"
          alt="Rafa Carmona"
          style={{ width: "400px", borderRadius: "8px", maxWidth: "100%" }}
        />
        <div style={{ color: "white", maxWidth: "500px", lineHeight: "1.6", textAlign: "left" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>Rafa Carmona</h2>
          <p style={{ marginBottom: "12px" }}>
            Rafa Carmona nasceu para liderar, ensinar e transformar a mentalidade de pessoas que buscam autoridade no digital.
          </p>
          <p style={{ marginBottom: "12px" }}>
            Com uma trajetória internacional consolidada, Rafa ajudou empreendedores e CEOs a desbloquear seu verdadeiro valor e a se tornarem ímãs de oportunidades.
          </p>
          <p style={{ marginBottom: "12px" }}>
            Seu método é direto ao ponto: construir autoridade, atrair reconhecimento e transformar presença em resultados reais. Agora, ele está determinado a te guiar nessa jornada e mostrar como o mercado pode enxergar (e valorizar) todo o seu potencial.
          </p>
        </div>
      </div>
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white text-sm">© 2025 Oi Digital Media</p>
              <p className="text-gray-400 text-xs">Todos os direitos reservados</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-green-600/20 border-green-500/30 text-green-400 hover:bg-green-600/30"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://wa.me/5551994078255", "_blank")
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Suporte WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}

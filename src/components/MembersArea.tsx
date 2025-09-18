import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { LogOut, MessageCircle, Play } from "lucide-react";
import { Image } from "./Fallback/ImageWithFallback";

interface MembersAreaProps {
  user: { name: string; email: string; whatsapp: string };
  onLogout: () => void;
}

export function MembersArea({ user, onLogout }: MembersAreaProps) {
  const courses = [
    {
      id: 1,
      title: "Aula 01 - Fundamentos da Autoridade Digital",
      description:
        "Aprenda os pilares fundamentais para construir sua presença digital e se tornar uma autoridade no seu nicho.",
      thumbnail:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "45 min",
      url: "https://www.youtube.com/watch?v=VIDEO1",
      sideText: [
        "O que é a Personal Brand e por que ela é indispensável para construir sua autoridade no digital.",
        "Os 3 pilares da autoridade digital",
        "O maior erro que destrói a sua Personal Brand (e como evitar).",
        "Demonstração prática de um Agente de IA treinado por mim, para criar linhas editoriais em segundos.",
        "Checklist para avaliar se a sua Personal Brand está saudável hoje.",
      ],
    },
    {
      id: 2,
      title: "Aula 02 - Estratégias de Conteúdo e Engajamento",
      description:
        "Descubra como criar conteúdo que converte e engaja sua audiência, transformando seguidores em clientes.",
      thumbnail:
        "https://images.unsplash.com/photo-1673515335586-f9f662c01482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "50 min",
      url: "https://www.youtube.com/watch?v=VIDEO2",
      sideText: [
        "Os 10 passos para ativar a sua Personal Brand e se destacar no digital.",
        "Como transformar sua história em storytelling gerando conexão e vendas.",
        "Os canais certos para aparecer e como usá-los com estratégia.",
        "Como usar provas sociais para aumentar credibilidade e atrair clientes.",
      ],
    },
    {
      id: 3,
      title: "Aula 03 - Crescimento e Alcance Orgânico",
      description:
        "Aprenda as estratégias para aumentar o alcance orgânico e conquistar mais visibilidade sem depender de anúncios pagos.",
      thumbnail:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "40 min",
      url: "https://www.youtube.com/watch?v=VIDEO3",
      sideText: [
        "Como o algoritmo funciona e como usá-lo a seu favor.",
        "Estratégias para gerar engajamento genuíno.",
        "Como manter consistência e frequência sem esgotar sua criatividade.",
        "Ferramentas gratuitas para analisar e otimizar seu crescimento.",
      ],
    },
    {
      id: 4,
      title: "Aula 04 - Monetização e Escala",
      description:
        "Transforme sua audiência em clientes e aprenda como escalar seu negócio digital de forma previsível e sustentável.",
      thumbnail:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "55 min",
      url: "https://www.youtube.com/watch?v=VIDEO4",
      sideText: [
        "Como criar ofertas irresistíveis para sua audiência.",
        "Modelos de monetização que funcionam no mercado digital.",
        "Automação e funis de vendas para escalar resultados.",
        "Mentalidade de crescimento: como pensar como um CEO digital.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">J</span>
            </div>
            <div>
              <h1 className="text-white text-xl">Jornada da Autoridade Digital</h1>
              <p className="text-gray-300 text-sm">1 e 2 de Outubro</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white text-sm">Olá, {user.name.split(" ")[0]}!</span>
            <Button
              onClick={onLogout}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main style={{ marginLeft: '60px', padding: '32px 16px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ color: 'white', fontSize: '1.975rem', marginBottom: '8px' }}>Suas Aulas</h2>
          <p style={{ color: '#d1d5db', margin: 0 }}>
            Assista as aulas da jornada no seu próprio ritmo
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {courses.map((course, index) => (
            <div
              key={course.id}
              style={{
                display: "flex",
                gap: "20px",
                marginRight: "65px",
                alignItems: "flex-start",
                flexDirection: index % 2 === 1 ? "row-reverse" : "row",
              }}
            >
              {/* Card do vídeo */}
              <Card
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 relative"
                style={{ marginBottom: "60px", width: "400px" }}
              >
                <div style={{ position: "relative" }}>
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "0.5rem",
                    }}
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
                </div>

                <CardContent style={{ padding: "10px" }}>
                  <h3 style={{ fontWeight: "bold", color: "white", fontSize: "20px", marginBottom: "5px" }}>
                    {course.title}
                  </h3>
                  <p style={{ color: "white", fontSize: "15px", marginBottom: "8px" }}>
                    {course.description}
                  </p>
                  <Button
                    onClick={() => window.open(course.url, "_blank")}
                    style={{
                      cursor: "pointer",
                      marginTop: "10px",
                      fontSize: "15px",
                      padding: "6px 120px",
                    }}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  >
                    Assistir
                    <Play className="w-3 h-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Texto ao lado do vídeo */}
              <div
                style={{
                  color: "white",
                  maxWidth: "300px",
                  paddingTop: "60px",
                  lineHeight: "1.6",
                  whiteSpace: "nowrap",
                  marginRight: index % 2 === 1 ? "20%" : "10px",
                  marginLeft: "30px",
                }}
              >
                <h3 style={{ fontWeight: "bold", fontSize: "1.65rem", marginBottom: "12px" }}>O que você vai aprender:</h3>
                {course.sideText.map((text, idx) => (
                  <p key={idx} style={{ marginBottom: "8px" }}>{text}</p>
                ))}
              </div>

            </div>
          ))}
        </div>
      </main>

      {/* NOVA SEÇÃO DE CARDS INFLADOS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
          marginTop: "80px",
          padding: "0 8px",
        }}
      >
        {[
          {
            title: "Clareza",
            text: "Entenda de forma simples o que realmente é Personal Brand e por que ela é a chave para atrair clientes sem precisar virar refém de likes ou tendências passageiras.",
            colorFrom: "#4B0082",
            colorTo: "#1A1A40",
          },
          {
            title: "Método",
            text: "Descubra o passo a passo em 10 etapas para transformar sua presença no digital em vendas — sem depender de improviso ou “inspiração” para postar.",
            colorFrom: "#800000",
            colorTo: "#4B0000",
          },
          {
            title: "Tecnologia",
            text: "Experimente o poder dos meus Agentes de IA, para manter sua comunicação consistente e alinhada com sua essência — mesmo quando faltar tempo ou criatividade.",
            colorFrom: "#003366",
            colorTo: "#001933",
          },
          {
            title: "Resultados",
            text: "Aprenda como usar sua autoridade digital para gerar confiança, ser lembrado e fechar negócios reais — porque visibilidade sem clientes não paga as contas.",
            colorFrom: "#664400",
            colorTo: "#331a00",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            style={{
              background: `linear-gradient(135deg, ${card.colorFrom}, ${card.colorTo})`,
              borderRadius: "1rem",
              padding: "24px",
              width: "280px",
              color: "white",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 30px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "12px" }}>
              {card.title}
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>{card.text}</p>
          </div>
        ))}
      </div>

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
          style={{
            width: "400px",
            borderRadius: "8px",
            maxWidth: "100%",
          }}
        />

        <div
          style={{
            color: "white",
            maxWidth: "500px",
            lineHeight: "1.6",
            textAlign: "left",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>
            Rafa Carmona
          </h2>
          <p style={{ marginBottom: "12px" }}>
            Rafa Carmona nasceu para liderar, ensinar e transformar a mentalidade de pessoas que buscam autoridade no digital.
          </p>
          <p style={{ marginBottom: "12px" }}>
            Com uma trajetória internacional consolidada, Rafa ajudou empreendedores e CEOs a desbloquear seu verdadeiro valor e a se tornarem ímãs de oportunidades.
          </p>
          <p style={{ marginBottom: "12px" }}>
            Seu método é direto ao ponto: construir autoridade, atrair reconhecimento e transformar presença em resultados reais.
            Agora, ele está determinado a te guiar nessa jornada e mostrar como o mercado pode enxergar (e valorizar) todo o seu potencial.
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
                onClick={() =>
                  window.open(
                    `https://wa.me/55${user.whatsapp.replace(/\D/g, "")}`,
                    "_blank"
                  )
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

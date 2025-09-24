import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { loginWithGoogle, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

interface RegistrationFormProps {
  onRegister: (data: { name: string; email: string; whatsapp: string }) => void;
}

export function RegistrationForm({ onRegister }: RegistrationFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" });
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.whatsapp) {
      onRegister(formData);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Frases para aparecer/desaparecer
  const phrases = [
    "Aprenda a dominar o marketing digital.",
    "Transforme seu conteúdo em autoridade online.",
    "Descubra estratégias que convertem.",
    "Torne-se um líder digital reconhecido."
  ];

  const descriptions = [
    "Comece hoje a criar conteúdos que realmente engajam.",
    "Construa autoridade e confiança com seu público.",
    "Aprenda técnicas práticas que aumentam conversões.",
    "Seja reconhecido como referência no seu nicho."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Coluna esquerda - formulário */}
      <div className="flex items-center justify-center bg-white p-6">
        <div className="w-full max-w-sm text-center">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "89px",
              marginTop: "-24px",
            }}
          >
            <img
              src="/images/loogo4.png"
              alt="Logo"
              style={{ height: "130px", marginBottom: "-20px", marginTop: "20px" }}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left" style={{ maxWidth: "400px", margin: "0 auto",  }}>
            <div className="space-y-2">
              <Label htmlFor="name" style={{ fontSize: "1rem" }}>Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                style={{ height: "2.8rem", padding: "0 0.9rem", fontSize: "1.05rem" }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" style={{ fontSize: "1rem" }}>E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                style={{ height: "2.8rem", padding: "0 0.9rem", fontSize: "1.05rem" }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" style={{ fontSize: "1rem" }}>WhatsApp</Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                required
                style={{ height: "2.8rem", padding: "0 0.9rem", fontSize: "1.05rem" }}
              />
            </div>

            {/* BOTÃO LOGIN COM GOOGLE ABAIXO DO WHATSAPP */}
            {!user ? (
              <button
                onClick={loginWithGoogle}
                type="button"
                className="w-full flex items-center justify-center rounded-full text-lg font-semibold mb-4 mt-2"
                style={{
                  backgroundColor: "white",
                  color: "#000",
                  padding: "10px 0",
                  border: "1px solid #ddd",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  gap: "10px",
                }}
              >
                {/* Ícone do Google */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                  style={{ width: "20px", height: "20px" }}
                >
                  <path
                    fill="#4285F4"
                    d="M488 261.8c0-17.2-1.6-34.1-4.6-50.4H249v95.2h135.4c-5.8 31.3-23.2 57.9-49.4 75.9v62h79.7c46.8-43.1 73.3-106.7 73.3-182.7z"
                  />
                  <path
                    fill="#34A853"
                    d="M249 512c66.2 0 121.7-21.9 162.3-59.5l-79.7-62c-22.1 14.8-50.4 23.5-82.6 23.5-63.5 0-117.2-42.8-136.4-100.5H31v63.1C71.8 467.7 155.2 512 249 512z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M112.6 317c-10.1-29.6-10.1-61.4 0-91l-81.5-63.1C10 209.2 0 243.7 0 278.9c0 35.2 10 69.7 31.1 95.9l81.5-63.1z"
                  />
                  <path
                    fill="#EA4335"
                    d="M249 100.7c35.8 0 68 12.3 93.4 36.6l70.1-70.1C370.5 29.9 315 8 249 8 155.2 8 71.8 52.3 31 135.3l81.5 63.1c19.2-57.7 72.9-100.5 136.5-100.5z"
                  />
                </svg>
                <div style={{fontSize: "16px",}}>
                Entrar com Google
                </div>
              </button>
            ) : (
              <div > // analisar isso aqui depois
                <p className="text-green-600 font-medium mb-2">Conectado como {user.displayName}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full rounded-full text-lg font-semibold"
              style={{
                backgroundColor: "rgba(56, 9, 9, 1)",
                color: "white",
                padding: "20px 0",
                marginTop: "20px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Acessar Área de Membros
            </Button>
          </form>
        </div>
      </div>

      {/* Coluna direita - frases e descrições */}
      <div className="hidden md:flex flex-col justify-center items-center text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-10">
        <div style={{ marginTop: "10px" }}>
          <h2 className="text-2xl font-bold mb-4 text-center">
            {phrases[currentPhraseIndex]}
          </h2>
          <p
            className={`text-center text-gray-300 max-w-sm transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
              }`}
          >
            {descriptions[currentPhraseIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}

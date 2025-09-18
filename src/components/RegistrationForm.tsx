import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface RegistrationFormProps {
  onRegister: (data: { name: string; email: string; whatsapp: string }) => void;
}

export function RegistrationForm({ onRegister }: RegistrationFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" });

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
              style={{ height: "140px", marginBottom: "30px" }}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left" style={{ maxWidth: "490px", margin: "0 auto" }}>
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

            <Button
              type="submit"
              className="w-full rounded-full text-lg font-semibold"
              style={{
                backgroundColor: "rgba(56, 9, 9, 1)",
                color: "white",
                padding: "20px 0",
                marginTop: "20px",
                cursor: "pointer",
              }}
            >
              Acessar Área de Membros
            </Button>
          </form>

        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center items-center text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-10">
        <div style={{ marginTop: "60px" }}>
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

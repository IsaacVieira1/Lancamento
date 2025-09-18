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

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFade(true); // inicia fade in
      }, 300); // tempo de fade out
    }, 3000); // tempo entre frases

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
              src="/public/images/loogo4.png"
              alt="Logo"
              style={{ height: "140px", marginBottom: "30px" }}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                style={{ height: "3rem", padding: "0 1rem", fontSize: "1.125rem" }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                style={{ height: "3rem", padding: "0 1rem", fontSize: "1.125rem" }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                required
                style={{ height: "3rem", padding: "0 1rem", fontSize: "1.125rem" }}
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full py-6 text-lg font-semibold"
              style={{ backgroundColor: "rgba(56, 9, 9, 1)", color: "white" }}
            >
              Acessar Área de Membros
            </Button>
          </form>
        </div>
      </div>

      {/* Coluna direita - frases animadas */}
      <div className="hidden md:flex flex-col justify-center items-center text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-10">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {phrases[currentPhraseIndex]}
        </h2>
        <p
          className={`text-center text-gray-300 max-w-sm transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          Participe da Jornada da Autoridade Digital e dê o próximo passo na sua transformação online.
        </p>
      </div>
    </div>
  );
}

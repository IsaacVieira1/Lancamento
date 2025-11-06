import React, { useState } from "react";
import "./VipSignup.css";
import { useNavigate } from "react-router-dom";
import SocialSection from "./SocialSection";
import { FaArrowLeft } from "react-icons/fa";


export default function VipSignup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | "";
    message: string;
  }>({ type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Enviando..." });

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/vip-signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Cadastro enviado com sucesso! Fique atento às próximas atualizações.",
        });
        setForm({ name: "", email: "", phone: "" });
      } else {
        setStatus({ type: "error", message: "Erro ao enviar. Tente novamente." });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Erro de conexão. Tente novamente mais tarde.",
      });
    }
  };

  return (
    <div className="vip-background">

      <video className="vip-video" autoPlay muted loop playsInline>
        <source src="/images/Meu Vídeo3.mp4" type="video/mp4" />
      </video>

      <div className="vip-overlay"></div>

      <header className="vip-logo">
        <img src="images/impactflix.png" alt="Impactflix" />
      </header>

      <button className="vip-back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft size={18} />
        Voltar
      </button>

      <main className="vip-form-container">
        <h1>Cadastro Área VIP</h1>

        <p className="vip-subtext">
          Você está na página de cadastro da <strong>Área VIP</strong>.<br />
          Fique atento às próximas atualizações!
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status.type === "loading"}>
            {status.type === "loading" ? "Enviando..." : "Cadastrar"}
          </button>
        </form>

        {status.type && (
          <div className={`vip-status vip-${status.type}`}>
            {status.message}
          </div>
        )}
      </main>
    </div>
  );
}

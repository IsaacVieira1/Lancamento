import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { RegistrationForm } from "./components/RegistrationForm";
import { MembersArea } from "./components/MembersArea";
import { VIPArea } from "./components/VipArea"; // importando a área VIP

interface User {
  displayName: string;
  email: string;
  whatsapp?: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true); // estado para carregar user do localStorage
  const [, setLoading] = useState(false);

  // Carregar user do localStorage ao iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoadingUser(false);
  }, []);

  // Logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Cadastro
  const handleRegister = async (data: { name: string; email: string; whatsapp: string }) => {
    setLoading(true);
    try {
      const res = await fetch("https://backend-netflix-ap3w.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Erro desconhecido");

      const newUser: User = {
        displayName: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
      };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    } catch (err) {
      alert((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Enquanto carrega o user, não renderiza as rotas
  if (loadingUser) return null;

  return (
    <Router>
      <Routes>
        {/* Cadastro */}
        <Route
          path="/register"
          element={!user ? <RegistrationForm onRegister={handleRegister} /> : <Navigate to="/members" />}
        />

        {/* Área de membros */}
        <Route
          path="/members"
          element={
            user ? (
              <MembersArea
                user={{ name: user.displayName, email: user.email, whatsapp: user.whatsapp || "" }}
                onLogout={handleLogout}
              />
            ) : (
              <Navigate to="/register" />
            )
          }
        />

        {/* Área VIP */}
        <Route
          path="/vip"
          element={
            user ? (
              <VIPArea
                user={{ name: user.displayName, email: user.email, whatsapp: user.whatsapp || "" }}
                onLogout={handleLogout}
              />
            ) : (
              <Navigate to="/register" />
            )
          }
        />

        {/* Rota fallback */}
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App;
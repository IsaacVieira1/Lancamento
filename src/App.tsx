import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RegistrationForm } from "./components/RegistrationForm";
import { MembersArea } from "./components/MembersArea";

interface User {
  name: string;
  email: string;
  whatsapp: string;
}

function getInitialUser(): User | null {
  try {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    localStorage.removeItem("user");
    return null;
  }
}

export default function App() {
  const [user, setUser] = useState<User | null>(() => getInitialUser());

  const handleRegister = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={user ? <Navigate to="/members" /> : <RegistrationForm onRegister={handleRegister} />}
        />

        <Route
          path="/members"
          element={user ? <MembersArea user={user} onLogout={handleLogout} /> : <Navigate to="/register" />}
        />

        <Route path="*" element={<Navigate to={user ? "/members" : "/register"} />} />
      </Routes>
    </BrowserRouter>
  );
}

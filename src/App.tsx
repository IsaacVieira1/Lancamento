import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { RegistrationForm } from "./components/RegistrationForm";
import { MembersArea } from "./components/MembersArea";
import { auth, logout } from "./firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

interface User {
  displayName: string;
  email: string;
  whatsapp?: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  // Ao iniciar a aplicação, verifica se há usuário no localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Monitorar login do Firebase (Google)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const firebaseUser = {
          displayName: currentUser.displayName || "",
          email: currentUser.email || "",
        };
        setUser(firebaseUser);
        localStorage.setItem("user", JSON.stringify(firebaseUser));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    localStorage.removeItem("user"); // remove do localStorage
  };

  const handleRegister = (data: { name: string; email: string; whatsapp: string }) => {
    const newUser = {
      displayName: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
    };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser)); // persiste no navegador
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={!user ? <RegistrationForm onRegister={handleRegister} /> : <Navigate to="/members" />}
        />
        <Route
          path="/members"
          element={user ? (
            <MembersArea
              user={{ name: user.displayName, email: user.email, whatsapp: user.whatsapp || "" }}
              onLogout={handleLogout}
            />
          ) : (
            <Navigate to="/register" />
          )}
        />
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App;

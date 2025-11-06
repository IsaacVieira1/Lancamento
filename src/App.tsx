import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MembersArea from "./components/MembersArea";
import { ScrollToTop } from "./components/ScrollToTop";

import VipSignup from "./components/VipSignup";

interface User {
  displayName: string;
  email: string;
  whatsapp?: string;
}

function App() {
  const [, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      const guestUser: User = { displayName: "Visitante", email: "visitante@example.com" };
      localStorage.setItem("user", JSON.stringify(guestUser));
      setUser(guestUser);
    }
    setLoadingUser(false);
  }, []);

  if (loadingUser) return null;

  return (
    <Router>
      <ScrollToTop />
      <Routes>
         <Route path="/members" element={<MembersArea />} /> 
        {/* <Route path="/entregaveis" element={<Entregaveis />} /> */}
        {/* <Route path="/comunidade" element={<CommunityPage />} /> */}
        {/* <Route path="/aulasextras" element={<AulasExtras />} /> */}
         <Route path="/VipSignup" element={<VipSignup />} /> 
        {/*<Route
          path="/vip"
          element={
            <VIPArea
            //user={{
            //name: user?.displayName || "Visitante",
            //email: user?.email || "visitante@example.com",
            // whatsapp: user?.whatsapp || "",
            //}}
            />
          }
        />*/}

        <Route path="*" element={<Navigate to="/members" />} />
      </Routes>
    </Router>
  );
}

export default App;

import { useState } from "react";
import "./CommunityPage.css";
import { FaUserCircle, FaPaperPlane, FaArrowLeft, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  author: string;
  message: string;
  time: string;
}

export function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Isaac Vieira",
      message: "Bem-vindo à comunidade Impactflix! 🚀",
      time: "há 2h",
    },
    {
      id: 2,
      author: "Mariana Alves",
      message: "Ansiosa para as próximas aulas de IA 🤖",
      time: "há 1h",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    const newPost: Post = {
      id: Date.now(),
      author: "Você",
      message: newMessage,
      time: "agora mesmo",
    };
    setPosts([newPost, ...posts]);
    setNewMessage("");
  };

  const handleBack = () => {
    navigate("/vip"); // volta para a área VIP
  };

  return (
    <div className="community-container">
      <header className="community-header">
        <div className="community-header-top">
          <button className="back-button" onClick={handleBack}>
            <FaArrowLeft /> Voltar 
          </button>

          <div className="community-title">
            <FaUsers className="community-icon" />
            <h1>Comunidade Impactflix</h1>
          </div>
        </div>
        <p className="community-subtitle">
          Conecte-se, compartilhe ideias e faça networking com outros membros.
        </p>
      </header>

      <main className="community-feed">
        {posts.map((post) => (
          <div key={post.id} className="community-post">
            <FaUserCircle className="user-icon" />
            <div className="post-content">
              <div className="post-header">
                <strong>{post.author}</strong>
                <span>{post.time}</span>
              </div>
              <p>{post.message}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="community-input">
        <input
          type="text"
          placeholder="Escreva algo para a comunidade..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>
          <FaPaperPlane />
        </button>
      </footer>
    </div>
  );
}

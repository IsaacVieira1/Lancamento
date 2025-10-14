import { useState, useEffect } from "react";
import axios from "axios";
import "./CommentsSection.css";

interface Comment {
  id: number;
  name: string;
  text: string;
}

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const API_URL = "http://localhost:4000/comments";

  const loadComments = async () => {
    try {
      const res = await axios.get(API_URL);
      setComments(res.data);
    } catch (err) {
      console.error("Erro ao carregar comentários:", err);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    await axios.post(API_URL, { name, text });
    setName("");
    setText("");
    loadComments();
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    loadComments();
  };

  return (
    <section className="comments-section">
      <h2 className="comments-title">Comentários</h2>

      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Escreva um comentário..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      <div className="comments-container">
        {comments.length === 0 ? (
          <p className="no-comments">Nenhum comentário ainda.</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="comment">
              <h4>{c.name}</h4>
              <p>{c.text}</p>
              <button onClick={() => handleDelete(c.id)}>✖</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

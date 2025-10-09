import { useState, useEffect } from "react";
import axios from "axios";
import { BsChatDots, BsTrash } from "react-icons/bs";

export function CommentsSection() {
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  // Pega os comentários do backend
  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await axios.get("http://localhost:10000/api/comments"); // ajuste a URL se necessário
        setComments(res.data.comments || []);
      } catch (err) {
        console.error("Erro ao carregar comentários:", err);
      }
    }
    fetchComments();
  }, []);

  const handleAddComment = async () => {
    if (!newComment.trim() || !name.trim()) return;

    const tempComment = { name, message: newComment };
    setComments((prev) => [...prev, tempComment]);

    setNewComment("");
    setName("");

    try {
      const res = await axios.post("http://localhost:10000/api/comments", {
        name,
        message: newComment,
      });

      setComments((prev) =>
        prev.map((c) => (c === tempComment ? res.data.comment : c))
      );
    } catch (err) {
      console.error("Erro ao enviar comentário:", err);
      setComments((prev) => prev.filter((c) => c !== tempComment));
    }
  };

  // Função para deletar comentário
  const handleDeleteComment = async (id: string) => {
    try {
      await axios.delete(`http://localhost:10000/api/comments/${id}`);
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Erro ao deletar comentário:", err);
    }
  };

  return (
    <div
      style={{
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backdropFilter: "blur(12px)",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "1rem",
        padding: "40px 20px",
        gap: "20px",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h3
        style={{
          color: "white",
          fontSize: "1.8rem",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <BsChatDots size={30} /> Espaço de comentários
      </h3>

      <p
        style={{
          color: "#d1d5db",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        Compartilhe suas dúvidas, experiências ou feedback sobre as aulas.
      </p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome"
        style={{
          width: "80%",
          maxWidth: "600px",
          borderRadius: "0.5rem",
          padding: "12px",
          border: "1px solid rgba(255,255,255,0.2)",
          backgroundColor: "rgba(255,255,255,0.05)",
          color: "white",
          fontSize: "14px",
        }}
      />

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Compartilhe sua experiência..."
        style={{
          width: "80%",
          maxWidth: "600px",
          height: "100px",
          borderRadius: "0.5rem",
          padding: "12px",
          border: "1px solid rgba(255,255,255,0.2)",
          backgroundColor: "rgba(255,255,255,0.05)",
          color: "white",
          fontSize: "14px",
          resize: "none",
        }}
      />

      <button
        onClick={handleAddComment}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "rgba(40, 167, 69, 0.2)",
          border: "1px solid rgba(40, 167, 69, 0.3)",
          color: "rgb(40, 197, 77)",
          padding: "10px 20px",
          borderRadius: "0.5rem",
          marginTop: "30px",
          fontWeight: 500,
          fontSize: "15px",
          transition: "all 0.3s ease",
          animation: "float 2s ease-in-out infinite",
        }}
      >
        Enviar
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
          maxWidth: "600px",
          marginTop: "20px",
        }}
      >
        {comments.map((c, i) => (
          <div
            key={c.id || i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "0.5rem",
              padding: "12px",
              color: "white",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          >
            <span>
              <strong style={{ color: "rgb(250, 204, 21)" }}>{c.name}:</strong>{" "}
              {c.message}
            </span>

            <button
              onClick={() => handleDeleteComment(c.id)}
              style={{
                backgroundColor: "rgba(255, 0, 0, 0.2)",
                border: "1px solid rgba(255,0,0,0.3)",
                color: "rgb(255, 0, 0)",
                borderRadius: "0.5rem",
                padding: "6px 10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              🗑️ Excluir
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

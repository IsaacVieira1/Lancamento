import React from "react";

interface LoadingButtonProps {
  loading: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({ loading, onClick, children, type = "button", style }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      style={{
        position: "relative",
        ...style,
      }}
    >
      <span style={{ opacity: loading ? 0.5 : 1 }}>{children}</span>

      {loading && (
        <span
          style={{
            position: "absolute",
            top: "21%",
            left: "46%",
            transform: "translate(-50%, -50%)",
            width: "40px",
            height: "40px",
            border: "3px solid rgba(255, 255, 255, 0.59)",
            borderTop: "3px solid #3875f9ff",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
};

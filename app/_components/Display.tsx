import {ReactNode} from "react";

export const Display = ({children}: { children: ReactNode }) => {
  return (
    <>
      <div
        style={{
          background: "#fff",
          padding: "16px",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        Header
      </div>

      {/* Контент */}
      <div
        style={{
          flex: 1,
          padding: "16px",
          color: "white",
          background: '#000'
        }}
      >
        {children}
      </div>

      {/* Футер */}
      <div
        style={{
          background: "#fff",
          padding: "16px",
          textAlign: "center",
          marginTop: "auto",
          boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
        }}
      >
        Footer
      </div>
    </>
  );
};
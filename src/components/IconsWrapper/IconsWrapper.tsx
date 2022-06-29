import React from "react";

interface WrapperProps {
  titulo: string;
  texto: string;
  icon: React.ReactNode;
}

const IconsWrapper: React.FC<WrapperProps> = ({ titulo, texto, icon }) => {
  return (
    <>
      <span>{icon}</span>
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </>
  );
};

export default IconsWrapper;

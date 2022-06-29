import * as React from "react";
import { ImAmazon, ImBook } from "react-icons/im";
import { GiTargetPoster } from "react-icons/gi";
import styled from "styled-components";
import ContainerIcon from "../ContainerIcon/ContainerIcon";

const SectionIconStyled = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SectionIcons = () => {
  return (
    <SectionIconStyled>
      <ContainerIcon
        titulo="Venda"
        texto="Livros com ilustrações"
        icon={<ImAmazon />}
      />
      <ContainerIcon
        titulo="Catarse"
        texto="Vendas de Livro Autoral"
        icon={<ImBook />}
      />
      <ContainerIcon
        titulo="rare prints and posters"
        texto="Venda de posters"
        icon={<GiTargetPoster />}
      />
    </SectionIconStyled>
  );
};

export default SectionIcons;

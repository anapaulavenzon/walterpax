import React from "react";
import Banner from "../components/Banner/Banner";
import SectionContent from "../components/SectionContent/SectionContent";
import SectionIcons from "../components/SectionIcons/SectionIcons";
import perfil from "../assets/perfil.jpg";
import img1 from "../assets/ADVENTURETIME1.jpg";
import img2 from "../assets/HISTORIASESTRANHAS2.jpg";
import img3 from "../assets/SLEEPYHOLLOW1.jpg";
import Footer from "../components/Footer/Footer";
import BannerFooter from "../components/BannerFooter.tsx/BannerFooter";
const Home: React.FC = () => {
  return (
    <>
      <Banner />

      <SectionIcons />

      <SectionContent
        titulo="O artista por ele mesmo"
        texto="Sou gaúcho, born and raised. Atuo profissionalmente como desenhista há mais de vinte anos e 
        já ilustrei para algumas das principais editoras do país, como Editora Abril, Cia.Das Letras, 
        Editora Saraiva, etc. É de minha autoria o livro LOVE-The Art That Should Not Be, em homenagem 
        à H.P. Lovecraft.
        Participei da antologia 24Seven da editora Image (EUA), que concorreu ao prêmio Will Eisner 
        (um dos maiores do mundo no segmento de quadrinhos) e sou responsável pelas ilustrações da 
        versão nacional do livro de RPG O Chamado de Chtulhu (Editora Terra Incógnita). Ilustrei 
        Adventure Time (Hora da Aventura) para BOOM!Studios (EUA), além de alguns posters alternativos 
        (para colecionadores), nos EUA.
        Atuo também como designer de personagens e storyboarder para filmes de cinema e televisão. 
        Meu projeto mais recente foram as ilustrações para o livro O Povo Branco e O Selo Negro, de 
        Arthur Machen, publicação da Pyro Editora."
        imagem={perfil}
        reverse
      />

      <SectionContent
        titulo="Ilustrações História em Quadrinhos"
        subtitulo="História em quadrinhos para Hora da Aventura 
        (Adventure Time) da editora BOOM!Studios (EUA)"
        imagem={img1}
      />
      <SectionContent
        titulo="Pôster para HISTÓRIAS ESTRANHAS"
        subtitulo="Pôster para a antologia de horror Histórias Estranhas"
        imagem={img2}
        reverse
      />
      <SectionContent
        titulo="Ilustrações livro"
        subtitulo="Ilustração para o livro 
        A Lenda do Cavaleiro sem Cabeça (Editora Leya/Brasil)"
        imagem={img3}
      />
      <BannerFooter />
      <Footer />
    </>
  );
};

export default Home;

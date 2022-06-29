import styled from "styled-components";
import imagemFundo from "../../assets/images.jpg";

const BannerStyled = styled.div`
  background-image: url(${imagemFundo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    color: black;
    font-size: 100px;
  }
`;

export default BannerStyled;

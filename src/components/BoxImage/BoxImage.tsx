import styled from "styled-components";

interface BoxImageProps {
  urlimagem: string;
}

const BoxImage = styled.div<BoxImageProps>`
  width: 50vw;
  height: 100%;
  background-image: url(${(props) => props.urlimagem});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default BoxImage;

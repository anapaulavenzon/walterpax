import styled from "styled-components";

interface BoxFooterProps {
  urlimagem: string;
}

const BoxFooter = styled.div<BoxFooterProps>`
  width: 50px;
  height: 100px;
  background-image: url(${(props) => props.urlimagem});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export default BoxFooter;

import styled from "styled-components";

interface SectionProps {
  ordem?: boolean;
}

const SectionContentStyled = styled.div<SectionProps>`
  width: 100vw;
  height: 400px;
  display: flex;
  align-items: center;
  text-align: justify;
  flex-direction: ${(props) => (props.ordem ? "row-reverse" : "row")};
  background-color: ${(props) => props.theme.backgroundColor};

  .container-text {
    width: 50vw;
    padding: 50px;
    color: ${(props) => props.theme.color};
  }
  p {
    font-family: sans-serif;
  }
  h2 {
    padding-bottom: 20px;
  }
`;

export default SectionContentStyled;

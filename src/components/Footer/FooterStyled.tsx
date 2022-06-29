import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100vw;
  height: 8vh;
  background-color: #bbb;
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
    display: inline-flex;
    margin: 10px;
  }

  small {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: #b61010;
  }

  .copyright-links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default FooterStyled;

import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import BoxFooter from "../BoxFooter.tsx/BoxFooter";
import BannerFooterStyled from "./BannerFooterStyled";

const BannerFooter: React.FC = () => {
  return (
    <BannerFooterStyled>
      <Link to={"https://www.instagram.com/maquinafantasma/"}>
        <BoxFooter urlimagem={instagram} />
      </Link>
      <Link to={"https://twitter.com/paxwalter"}>
        <BoxFooter urlimagem={twitter} />
      </Link>
      <Link to={"https://pt-br.facebook.com/maquinafantasma/"}>
        <BoxFooter urlimagem={facebook} />
      </Link>
    </BannerFooterStyled>
  );
};

export default BannerFooter;

import { Link } from "react-router-dom";
import logoHeader from "../assets/logo-header.svg";
import logoFooter from "../assets/logo-footer.svg";

// "variant" escolhe qual versão da marca aparece: a colorida do cabeçalho ou a branca do rodapé
export default function Logo({ variant = "header" }) {
  const src = variant === "footer" ? logoFooter : logoHeader;

  return (
    <Link to="/" aria-label="Digital Store, ir para a página inicial">
      <img src={src} alt="Digital Store" width="253" height="44" />
    </Link>
  );
}

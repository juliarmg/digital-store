import { Link } from "react-router-dom";
import "./CollectionCards.css";

// A imagem de cada coleção já traz o título desenhado; o selo e o botão ficam por cima
export default function CollectionCards({ collections }) {
  return (
    <div className="collection-cards">
      {collections.map((colecao) => (
        <article key={colecao.image} className="collection-card">
          <img src={colecao.image} alt={colecao.alt} />
          <span className="collection-card__selo">{colecao.desconto}% OFF</span>
          <Link to={colecao.link} className="collection-card__botao">
            Comprar
          </Link>
        </article>
      ))}
    </div>
  );
}

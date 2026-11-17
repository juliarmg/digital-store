import { Link } from "react-router-dom";
import "./CollectionCards.css";

export default function CollectionCards({ collections }) {
  return (
    <div className="collection-cards">
      {collections.map((colecao) => (
        <Link key={colecao.image} to={colecao.link} className="collection-card">
          <img src={colecao.image} alt={colecao.alt} />
        </Link>
      ))}
    </div>
  );
}

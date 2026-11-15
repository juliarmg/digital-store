import { Link } from "react-router-dom";
import formatPrice from "../utils/formatPrice";
import "./ProductCard.css";

export default function ProductCard({ id, image, name, price, priceDiscount, tipo = "Tênis" }) {
  const temDesconto = priceDiscount !== undefined && priceDiscount !== null;
  const percentual = temDesconto ? Math.round((1 - priceDiscount / price) * 100) : 0;

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card__imagem">
        {temDesconto && <span className="product-card__selo">{percentual}% OFF</span>}
        <img src={image} alt={name} loading="lazy" />
      </div>
      <p className="product-card__tipo">{tipo}</p>
      <h3>{name}</h3>
      <p className="product-card__precos">
        {temDesconto ? (
          <>
            <span className="product-card__preco-antigo">{formatPrice(price)}</span>
            <span className="product-card__preco">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="product-card__preco">{formatPrice(price)}</span>
        )}
      </p>
    </Link>
  );
}

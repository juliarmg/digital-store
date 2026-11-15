import formatPrice from "../utils/formatPrice";
import starIcon from "../assets/star-icon.svg";
import "./BuyBox.css";

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  const temDesconto = priceDiscount !== undefined && priceDiscount !== null;

  return (
    <div className="buy-box">
      <h1>{name}</h1>
      <p className="buy-box__referencia">{reference}</p>

      <div className="buy-box__avaliacao">
        <span className="buy-box__estrelas">
          {stars}
          <img src={starIcon} alt="" width="16" height="16" />
        </span>
        <span className="buy-box__total">({rating} avaliações)</span>
      </div>

      <div className="buy-box__precos">
        {temDesconto ? (
          <>
            <span className="buy-box__preco">{formatPrice(priceDiscount)}</span>
            <span className="buy-box__preco-antigo">{formatPrice(price)}</span>
          </>
        ) : (
          <span className="buy-box__preco">{formatPrice(price)}</span>
        )}
      </div>

      <div className="buy-box__descricao">
        <p className="buy-box__rotulo">Descrição do produto</p>
        <p>{description}</p>
      </div>

      {children}

      <button type="button" className="buy-box__comprar">
        COMPRAR
      </button>
    </div>
  );
}

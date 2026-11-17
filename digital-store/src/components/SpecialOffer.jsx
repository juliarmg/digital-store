import { Link } from "react-router-dom";
import "./SpecialOffer.css";

export default function SpecialOffer({ image, alt, tag, title, text, buttonText, link }) {
  return (
    <section className="special-offer">
      <div className="container special-offer__conteudo">
        <img src={image} alt={alt} />
        <div className="special-offer__texto">
          <p className="special-offer__tag">{tag}</p>
          <h2>{title}</h2>
          <p className="special-offer__descricao">{text}</p>
          <Link to={link} className="special-offer__botao">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

const INTERVALO = 6000;

export default function HeroBanner({ slides }) {
  const [atual, setAtual] = useState(0);

  // troca de slide sozinha, mas o timer reinicia quando a pessoa clica numa bolinha
  useEffect(() => {
    const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduzirMovimento || slides.length < 2) return undefined;

    const timer = setTimeout(() => {
      setAtual((indice) => (indice + 1) % slides.length);
    }, INTERVALO);

    return () => clearTimeout(timer);
  }, [atual, slides.length]);

  const slide = slides[atual];

  return (
    <section className="hero" aria-roledescription="carrossel" aria-label="Ofertas em destaque">
      <div className="hero__pontilhado" aria-hidden="true" />

      <div className="container hero__conteudo" key={atual}>
        <div className="hero__texto">
          <p className="hero__chamada">{slide.chamada}</p>
          <h1>{slide.titulo}</h1>
          <p className="hero__descricao">{slide.descricao}</p>
          <Link to={slide.link} className="hero__botao">
            {slide.botao}
          </Link>
        </div>

        <div className="hero__imagem">
          <img src={slide.imagem} alt={slide.alt} />
        </div>
      </div>

      <div className="hero__indicadores">
        {slides.map((item, indice) => (
          <button
            key={item.titulo}
            type="button"
            className={indice === atual ? "ativo" : undefined}
            onClick={() => setAtual(indice)}
            aria-label={`Ir para o slide ${indice + 1}`}
            aria-current={indice === atual}
          />
        ))}
      </div>
    </section>
  );
}

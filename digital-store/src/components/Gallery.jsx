import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import "./Gallery.css";

// aceita 700, "700" ou "700px" e devolve sempre um número
function paraNumero(valor) {
  return parseInt(valor, 10);
}

export default function Gallery({
  images,
  width = 1440,
  height = 681,
  radius = "0px",
  showThumbs = false,
  showDots = false,
  className = "",
}) {
  const [atual, setAtual] = useState(0);

  const larguraNum = paraNumero(width);
  const alturaNum = paraNumero(height);
  const naPrimeira = atual === 0;
  const naUltima = atual === images.length - 1;

  return (
    <div className={`gallery ${className}`.trim()} style={{ maxWidth: larguraNum }}>
      <div
        className="gallery__slide"
        style={{ aspectRatio: `${larguraNum} / ${alturaNum}`, borderRadius: radius }}
      >
        <div className="gallery__trilho" style={{ transform: `translateX(-${atual * 100}%)` }}>
          {images.map((imagem, indice) => (
            <img
              key={imagem.src}
              src={imagem.src}
              alt={`Imagem ${indice + 1} de ${images.length}`}
              draggable="false"
            />
          ))}
        </div>

        <button
          type="button"
          className="gallery__seta gallery__seta--esquerda"
          onClick={() => setAtual(atual - 1)}
          disabled={naPrimeira}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <button
          type="button"
          className="gallery__seta gallery__seta--direita"
          onClick={() => setAtual(atual + 1)}
          disabled={naUltima}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>

        {showDots && (
          <div className="gallery__bolinhas">
            {images.map((imagem, indice) => (
              <button
                key={imagem.src}
                type="button"
                className={indice === atual ? "ativa" : undefined}
                onClick={() => setAtual(indice)}
                aria-label={`Ir para a imagem ${indice + 1}`}
                aria-current={indice === atual}
              />
            ))}
          </div>
        )}
      </div>

      {showThumbs && (
        <div className="gallery__miniaturas">
          {images.map((imagem, indice) => (
            <button
              key={imagem.src}
              type="button"
              className={indice === atual ? "selecionada" : undefined}
              style={{ borderRadius: radius }}
              onClick={() => setAtual(indice)}
              aria-label={`Ver imagem ${indice + 1}`}
              aria-current={indice === atual}
            >
              <img src={imagem.src} alt="" width="117" height="95" style={{ borderRadius: radius }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

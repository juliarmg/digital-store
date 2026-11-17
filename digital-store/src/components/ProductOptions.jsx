import { useState } from "react";
import "./ProductOptions.css";

export default function ProductOptions({
  options,
  radius = "4px",
  shape = "square",
  type = "text",
  defaultValue = null,
  onChange,
}) {
  const [selecionada, setSelecionada] = useState(defaultValue);

  function escolher(opcao) {
    setSelecionada(opcao);
    if (onChange) onChange(opcao);
  }

  return (
    <div className="product-options">
      {options.map((opcao) => {
        const classes = [
          "product-options__item",
          `product-options__item--${shape}`,
          `product-options__item--${type}`,
          selecionada === opcao ? "selecionada" : "",
        ]
          .filter(Boolean)
          .join(" ");

        // no círculo o raio é sempre 50%, o radius só vale para o quadrado
        const estilo = {
          borderRadius: shape === "circle" ? "50%" : radius,
          ...(type === "color" ? { backgroundColor: opcao } : {}),
        };

        return (
          <button
            key={opcao}
            type="button"
            className={classes}
            style={estilo}
            onClick={() => escolher(opcao)}
            aria-pressed={selecionada === opcao}
            aria-label={type === "color" ? `Cor ${opcao}` : `Tamanho ${opcao}`}
          >
            {type === "text" ? opcao : null}
          </button>
        );
      })}
    </div>
  );
}

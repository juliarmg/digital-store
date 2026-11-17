import { useState } from "react";
import "./CategoryShortcuts.css";

const icones = {
  camisetas: (
    <path d="M12 6L5 9L3 15L7 17V30H25V17L29 15L27 9L20 6C19 8.5 13 8.5 12 6Z" />
  ),
  calcas: <path d="M9 4H23L25 30H18.5L16 13L13.5 30H7L9 4Z" />,
  bones: (
    <>
      <path d="M5 21C5 12.5 10 8 16 8C22 8 27 12.5 27 21H5Z" />
      <path d="M27 21H30C30 23.5 27.5 25 24 25H8" />
      <path d="M16 8V21" />
    </>
  ),
  headphones: (
    <>
      <path d="M6 20V16C6 10 10.5 5 16 5C21.5 5 26 10 26 16V20" />
      <rect x="4" y="19" width="6" height="9" rx="2" />
      <rect x="22" y="19" width="6" height="9" rx="2" />
    </>
  ),
  tenis: (
    <>
      <path d="M3 24V17L9 15.5L13 11L16 15L25 17C28.5 18 30 20 30 24H3Z" />
      <path d="M3 21H30" />
    </>
  ),
};

export default function CategoryShortcuts({ categories }) {
  const [selecionada, setSelecionada] = useState(categories[0].id);

  return (
    <div className="category-shortcuts">
      {categories.map((categoria) => {
        const ativa = selecionada === categoria.id;
        return (
          <button
            key={categoria.id}
            type="button"
            className={ativa ? "ativa" : undefined}
            onClick={() => setSelecionada(categoria.id)}
            aria-pressed={ativa}
          >
            <span className="category-shortcuts__circulo">
              <svg
                width="36"
                height="36"
                viewBox="0 0 34 34"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {icones[categoria.id]}
              </svg>
            </span>
            <span className="category-shortcuts__nome">{categoria.nome}</span>
          </button>
        );
      })}
    </div>
  );
}

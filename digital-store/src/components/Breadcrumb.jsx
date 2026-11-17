import { Link } from "react-router-dom";
import "./Breadcrumb.css";

// O último item é a página atual e por isso não vira link
export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Você está em">
      <ol>
        {items.map((item, indice) => {
          const ultimo = indice === items.length - 1;
          return (
            <li key={item.texto}>
              {item.to && !ultimo ? (
                <Link to={item.to}>{item.texto}</Link>
              ) : (
                <span aria-current={ultimo ? "page" : undefined}>{item.texto}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

import { Link } from "react-router-dom";

// Coluna do rodapé: um título e uma lista de links vinda de props
export default function InfoColumn({ title, informations }) {
  return (
    <div className="info-column">
      <h3>{title}</h3>
      <ul>
        {informations.map((item) => (
          <li key={item.text}>
            {item.link ? <Link to={item.link}>{item.text}</Link> : <span>{item.text}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Link } from "react-router-dom";
import "./Section.css";

function SetaDireita() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
      <path d="M1 6H16M16 6L11 1M16 6L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Section({ title, titleAlign = "left", link, children }) {
  // links internos usam o roteador, os externos ficam como âncora normal
  const linkInterno = link && link.href.startsWith("/");

  return (
    <section className="section">
      <div className={`section__cabecalho section__cabecalho--${titleAlign}`}>
        <h2>{title}</h2>
        {link &&
          (linkInterno ? (
            <Link to={link.href}>
              {link.text}
              <SetaDireita />
            </Link>
          ) : (
            <a href={link.href}>
              {link.text}
              <SetaDireita />
            </a>
          ))}
      </div>
      {children}
    </section>
  );
}

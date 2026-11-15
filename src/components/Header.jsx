import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Logo from "./Logo";
import miniCart from "../assets/mini-cart.svg";
import "./Header.css";

const links = [
  { texto: "Home", to: "/", end: true },
  { texto: "Produtos", to: "/products" },
  { texto: "Categorias", to: "/categorias" },
  { texto: "Meus Pedidos", to: "/pedidos" },
];

export default function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filtroDaUrl = searchParams.get("filter") || "";
  const [busca, setBusca] = useState(filtroDaUrl);

  // se a pessoa chegar numa listagem já filtrada, o campo mostra o termo usado
  useEffect(() => {
    setBusca(filtroDaUrl);
  }, [filtroDaUrl]);

  function buscar(event) {
    event.preventDefault();
    const termo = busca.trim();
    navigate(termo ? `/products?filter=${encodeURIComponent(termo)}` : "/products");
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__topo">
          <Logo />

          <form className="header__busca" onSubmit={buscar} role="search">
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Pesquisar produto..."
              aria-label="Pesquisar produto"
            />
            <button type="submit" aria-label="Buscar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="6.5" stroke="#474747" strokeWidth="2" />
                <path d="M15.5 15.5L21 21" stroke="#474747" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <div className="header__acoes">
            <Link to="/cadastro" className="header__cadastro">
              Cadastre-se
            </Link>
            <Link to="/login" className="header__entrar">
              Entrar
            </Link>
            <span className="header__carrinho" aria-label="Carrinho de compras">
              <img src={miniCart} alt="" width="28" height="28" />
              <span className="header__indicador" />
            </span>
          </div>
        </div>

        <nav className="header__nav" aria-label="Navegação principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "ativo" : undefined)}
            >
              {link.texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

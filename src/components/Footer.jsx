import Logo from "./Logo";
import InfoColumn from "./InfoColumn";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import "./Footer.css";

const redes = [
  { nome: "Facebook", icone: facebook, href: "https://www.facebook.com" },
  { nome: "Instagram", icone: instagram, href: "https://www.instagram.com" },
  { nome: "Twitter", icone: twitter, href: "https://twitter.com" },
];

const informacoes = [
  { text: "Sobre Drip Store", link: "/sobre" },
  { text: "Segurança", link: "/seguranca" },
  { text: "Wishlist", link: "/wishlist" },
  { text: "Blog", link: "/blog" },
  { text: "Trabalhe conosco", link: "/trabalhe-conosco" },
  { text: "Meus Pedidos", link: "/pedidos" },
];

const categorias = [
  { text: "Camisetas", link: "/products?filter=camiseta" },
  { text: "Calças", link: "/products?filter=calca" },
  { text: "Bonés", link: "/products?filter=bone" },
  { text: "Headphones", link: "/products?filter=headphone" },
  { text: "Tênis", link: "/products" },
];

const contato = [
  { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161" },
  { text: "(85) 3051-3411" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__corpo">
          <div className="footer__marca">
            <Logo variant="footer" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </p>
            <div className="footer__redes">
              {redes.map((rede) => (
                <a
                  key={rede.nome}
                  href={rede.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={rede.nome}
                >
                  <img src={rede.icone} alt="" />
                </a>
              ))}
            </div>
          </div>

          <InfoColumn title="Informação" informations={informacoes} />
          <InfoColumn title="Categorias" informations={categorias} />
          <InfoColumn title="Contato" informations={contato} />
        </div>

        <hr />
        <p className="footer__copy">&copy; {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  );
}

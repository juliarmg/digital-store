import Layout from "./Layout";
import HeroBanner from "../components/HeroBanner";
import Section from "../components/Section";
import CollectionCards from "../components/CollectionCards";
import CategoryShortcuts from "../components/CategoryShortcuts";
import ProductListing from "../components/ProductListing";
import SpecialOffer from "../components/SpecialOffer";
import products from "../data/products";
import "./HomePage.css";

const slides = [
  {
    chamada: "Melhores ofertas personalizadas",
    titulo: "Queima de estoque Nike",
    descricao:
      "Modelos selecionados com preço reduzido enquanto durarem as unidades. Vale conferir antes que acabe.",
    botao: "Ver Ofertas",
    link: "/products?filter=nike",
    imagem: "/produtos/nike-revolution.png",
    alt: "Tênis Nike branco com detalhes em vermelho",
  },
  {
    chamada: "Lançamento da semana",
    titulo: "K-Swiss V8 chegou à loja",
    descricao:
      "Um tênis leve e confortável, pensado para quem passa o dia em pé e não abre mão do estilo.",
    botao: "Ver Ofertas",
    link: "/products?filter=k-swiss",
    imagem: "/produtos/kswiss-v8.png",
    alt: "Tênis K-Swiss V8 em branco, azul e laranja",
  },
  {
    chamada: "Para o dia a dia",
    titulo: "Casuais com até 50% de desconto",
    descricao:
      "Os tênis mais pedidos do momento, com parcelamento e troca facilitada em todos os pedidos.",
    botao: "Ver Ofertas",
    link: "/products",
    imagem: "/produtos/nike-revolution.png",
    alt: "Tênis Nike branco com detalhes em vermelho",
  },
  {
    chamada: "Últimas unidades",
    titulo: "Corrida e treino em promoção",
    descricao:
      "Amortecimento e boa aderência para treinar sem preocupação. Algumas numerações já estão acabando.",
    botao: "Ver Ofertas",
    link: "/products",
    imagem: "/produtos/kswiss-v8.png",
    alt: "Tênis K-Swiss V8 em branco, azul e laranja",
  },
];

const colecoes = [
  { image: "/collection-1.png", alt: "Coleção Novo drop Supreme", desconto: 30, link: "/products" },
  { image: "/collection-2.png", alt: "Coleção Adidas", desconto: 30, link: "/products?filter=adidas" },
  { image: "/collection-3.png", alt: "Coleção Novo Beats Bass", desconto: 30, link: "/products" },
];

const categorias = [
  { id: "camisetas", nome: "Camisetas" },
  { id: "calcas", nome: "Calças" },
  { id: "bones", nome: "Bonés" },
  { id: "headphones", nome: "Headphones" },
  { id: "tenis", nome: "Tênis" },
];

export default function HomePage() {
  const emAlta = products.slice(0, 8);

  return (
    <Layout>
      <HeroBanner slides={slides} />

      <div className="container home__secoes">
        <Section title="Coleções em destaque" titleAlign="left">
          <CollectionCards collections={colecoes} />
        </Section>

        <Section title="Categorias em destaque" titleAlign="center">
          <CategoryShortcuts categories={categorias} />
        </Section>

        <Section title="Produtos em alta" titleAlign="left" link={{ text: "Ver todos", href: "/products" }}>
          <ProductListing products={emAlta} columns={4} />
        </Section>
      </div>

      <SpecialOffer
        image="/produtos/jordan-oferta.png"
        alt="Par de tênis Air Jordan em preto, bege e amarelo"
        tag="Oferta especial"
        title="Air Jordan edição de colecionador"
        text="Uma edição limitada para quem coleciona e para quem só quer um par diferente de tudo que já tem no armário. Poucas unidades disponíveis."
        buttonText="Ver Oferta"
        link="/products?filter=nike"
      />
    </Layout>
  );
}

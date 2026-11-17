import Layout from "./Layout";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import CollectionCards from "../components/CollectionCards";
import CategoryShortcuts from "../components/CategoryShortcuts";
import ProductListing from "../components/ProductListing";
import SpecialOffer from "../components/SpecialOffer";
import products from "../data/products";
import "./HomePage.css";

const slides = Array.from({ length: 8 }, (_, i) => ({ src: `/home-slide-${i + 1}.jpeg` }));

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
      <Gallery images={slides} width="1440" height="681" showDots />

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
        image="/home-slide-4.jpeg"
        alt="Par de tênis Air Jordan sobre fundo cinza"
        tag="Oferta especial"
        title="Air Jordan edição de colecionador"
        text="Uma edição limitada para quem coleciona e para quem só quer um par diferente de tudo que já tem no armário. Poucas unidades disponíveis."
        buttonText="Ver Oferta"
        link="/products?filter=nike"
      />
    </Layout>
  );
}

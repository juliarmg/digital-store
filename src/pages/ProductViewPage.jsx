import { Link, useParams } from "react-router-dom";
import Layout from "./Layout";
import Breadcrumb from "../components/Breadcrumb";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import products from "../data/products";
import "./ProductViewPage.css";

export default function ProductViewPage() {
  const { id } = useParams();
  const produto = products.find((p) => String(p.id) === id);

  if (!produto) {
    return (
      <Layout>
        <div className="container produto__nao-encontrado">
          <h1>Produto não encontrado</h1>
          <p>Não existe nenhum produto com esse código na loja.</p>
          <Link to="/products">Ver todos os produtos</Link>
        </div>
      </Layout>
    );
  }

  const relacionados = products.filter((p) => p.id !== produto.id).slice(0, 4);

  const caminho = [
    { texto: "Home", to: "/" },
    { texto: "Produtos", to: "/products" },
    { texto: "Tênis", to: "/products" },
    { texto: produto.brand, to: `/products?filter=${encodeURIComponent(produto.brand)}` },
    { texto: produto.name },
  ];

  return (
    <Layout>
      <div className="container produto">
        <Breadcrumb items={caminho} />

        <div className="produto__principal" key={produto.id}>
          <Gallery images={produto.images} width="700px" height="570px" radius="4px" showThumbs />

          <BuyBox
            name={produto.name}
            reference={`${produto.category} | ${produto.brand} | REF:${produto.reference}`}
            stars={produto.stars}
            rating={produto.rating}
            price={produto.price}
            priceDiscount={produto.priceDiscount}
            description={produto.description}
          >
            <div className="produto__opcao">
              <p>Tamanho</p>
              <ProductOptions
                options={produto.sizes}
                shape="square"
                radius="4px"
                type="text"
                defaultValue="41"
              />
            </div>
            <div className="produto__opcao">
              <p>Cor</p>
              <ProductOptions
                options={produto.colors}
                shape="circle"
                type="color"
                defaultValue={produto.colors[1]}
              />
            </div>
          </BuyBox>
        </div>

        <Section
          title="Produtos relacionados"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing products={relacionados} columns={4} />
        </Section>
      </div>
    </Layout>
  );
}

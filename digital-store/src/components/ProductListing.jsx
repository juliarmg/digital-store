import ProductCard from "./ProductCard";
import "./ProductListing.css";

// "columns" só muda quantas colunas cabem; o resto do comportamento é igual nas páginas
export default function ProductListing({ products, columns = 4 }) {
  return (
    <div className="product-listing" style={{ "--colunas": columns }}>
      {products.map((produto) => (
        <ProductCard
          key={produto.id}
          id={produto.id}
          image={produto.image}
          name={produto.name}
          price={produto.price}
          priceDiscount={produto.priceDiscount}
          tipo={produto.type}
        />
      ))}
    </div>
  );
}

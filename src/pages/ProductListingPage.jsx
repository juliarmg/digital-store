import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "./Layout";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import products from "../data/products";
import { filterProducts, sortProducts } from "../utils/filterProducts";
import "./ProductListingPage.css";

const opcoesMarca = ["Adidas", "K-Swiss", "Nike", "Puma", "Converse"].map((text) => ({ text }));
const opcoesCategoria = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map((text) => ({ text }));
const opcoesGenero = ["Masculino", "Feminino", "Unissex"].map((text) => ({ text }));
const opcoesEstado = ["Novo", "Usado"].map((text) => ({ text }));

const filtrosVazios = { brand: [], category: [], gender: [], condition: [] };

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const textoDaBusca = searchParams.get("filter") || "";

  const [ordem, setOrdem] = useState("");
  const [filtros, setFiltros] = useState(filtrosVazios);

  function alternarFiltro(grupo, valor, marcado) {
    setFiltros((anterior) => {
      const atuais = anterior[grupo];
      const proximos = marcado ? [...atuais, valor] : atuais.filter((v) => v !== valor);
      return { ...anterior, [grupo]: proximos };
    });
  }

  // radio só aceita um valor por vez
  function escolherEstado(valor) {
    setFiltros((anterior) => ({ ...anterior, condition: [valor] }));
  }

  const resultado = useMemo(() => {
    const filtrados = filterProducts(products, { text: textoDaBusca, ...filtros });
    return sortProducts(filtrados, ordem);
  }, [textoDaBusca, filtros, ordem]);

  const quantidade = resultado.length === 1 ? "1 produto" : `${resultado.length} produtos`;
  const titulo = textoDaBusca ? `Resultados para "${textoDaBusca}" - ${quantidade}` : quantidade;

  const temFiltroAtivo =
    filtros.brand.length > 0 ||
    filtros.category.length > 0 ||
    filtros.gender.length > 0 ||
    filtros.condition.length > 0;

  return (
    <Layout>
      <div className="container listagem">
        <div className="listagem__topo">
          <h1>{titulo}</h1>

          <label className="listagem__ordenar">
            <span>Ordenar por:</span>
            <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
              <option value="">mais relevantes</option>
              <option value="menor">menor preço</option>
              <option value="maior">maior preço</option>
            </select>
          </label>
        </div>

        <div className="listagem__corpo">
          <aside className="listagem__filtros">
            <h2>Filtrar por</h2>
            <hr />
            <FilterGroup
              title="Marca"
              inputType="checkbox"
              name="marca"
              options={opcoesMarca}
              selected={filtros.brand}
              onChange={(valor, marcado) => alternarFiltro("brand", valor, marcado)}
            />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              name="categoria"
              options={opcoesCategoria}
              selected={filtros.category}
              onChange={(valor, marcado) => alternarFiltro("category", valor, marcado)}
            />
            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              name="genero"
              options={opcoesGenero}
              selected={filtros.gender}
              onChange={(valor, marcado) => alternarFiltro("gender", valor, marcado)}
            />
            <FilterGroup
              title="Estado"
              inputType="radio"
              name="estado"
              options={opcoesEstado}
              selected={filtros.condition}
              onChange={(valor) => escolherEstado(valor)}
            />
            {temFiltroAtivo && (
              <button type="button" className="listagem__limpar" onClick={() => setFiltros(filtrosVazios)}>
                Limpar filtros
              </button>
            )}
          </aside>

          <div className="listagem__produtos">
            {resultado.length > 0 ? (
              <ProductListing products={resultado} columns={3} />
            ) : (
              <p className="listagem__vazio">
                Nenhum produto bateu com esses filtros. Tente tirar alguma seleção ou buscar por outro termo.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

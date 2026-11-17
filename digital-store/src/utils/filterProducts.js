// Tira acentos e deixa tudo em minúsculo para a busca não ser chata com "Tênis" x "tenis"
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function passaNoGrupo(selecionados, valor) {
  return selecionados.length === 0 || selecionados.includes(valor);
}

export function filterProducts(products, { text, brand, category, gender, condition }) {
  const termo = normalizar(text || "");

  return products.filter((produto) => {
    const alvoDaBusca = normalizar(
      `${produto.name} ${produto.type} ${produto.brand} ${produto.category}`
    );

    return (
      (termo === "" || alvoDaBusca.includes(termo)) &&
      passaNoGrupo(brand, produto.brand) &&
      passaNoGrupo(category, produto.category) &&
      passaNoGrupo(gender, produto.gender) &&
      passaNoGrupo(condition, produto.condition)
    );
  });
}

export function sortProducts(products, order) {
  const lista = [...products];
  const precoFinal = (p) => p.priceDiscount ?? p.price;

  if (order === "menor") {
    return lista.sort((a, b) => precoFinal(a) - precoFinal(b));
  }
  if (order === "maior") {
    return lista.sort((a, b) => precoFinal(b) - precoFinal(a));
  }
  return lista;
}

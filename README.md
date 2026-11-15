# Digital Store

Loja virtual feita em React como projeto da Digital College Para o Projeto da Geração TECH 4.0 IEL.
O código segue a documentação oficial do repositório `digitalcollegebr/projeto-digital-store` e o visual do Figma.

## Como rodar
Precisa do Node 18 ou mais novo.
```
npm install
npm run dev
```

O site abre em `http://localhost:5173`. Para gerar a versão de produção:
```
npm run build
npm run preview
```

## O que tem no projeto

Três páginas, todas dentro do componente `Layout` 

| Rota | Página | O que faz |
| --- | --- | --- |
| `/` | HomePage | Banner com 4 slides, coleções em destaque, atalhos de categoria, 8 produtos em alta e oferta especial |
| `/products` | ProductListingPage | Listagem com busca, ordenação e filtros |
| `/product/:id` | ProductViewPage | Breadcrumb, galeria com miniaturas, BuyBox, opções de tamanho e cor e produtos relacionados |

A rota `/produtos` redireciona para `/products` 
As páginas Categorias e Meus Pedidos do menu mostram um aviso de página em construção, pois não fazem parte dos requisitos mínimos.


## Estrutura

```
src/
  components/   Logo, Header, Footer, InfoColumn, Section, ProductCard,
                ProductListing, Gallery, FilterGroup, ProductOptions, BuyBox,
                HeroBanner, CollectionCards, CategoryShortcuts, SpecialOffer, Breadcrumb
  pages/        Layout, HomePage, ProductListingPage, ProductViewPage, NotFoundPage
  data/         products.js (produtos de exemplo)
  utils/        formatPrice.js, filterProducts.js
  assets/       logos e ícones em SVG
public/
  collection-*.png   imagens das coleções
  produtos/          fotos dos tênis e galerias da página de produto
```



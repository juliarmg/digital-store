# Digital Store

Loja virtual feita em React como projeto da Digital College. O código segue a documentação oficial do repositório `digitalcollegebr/projeto-digital-store` e o visual do Figma da Drip Store.

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

Três páginas, todas dentro do componente `Layout` (cabeçalho e rodapé compartilhados):

| Rota | Página | O que faz |
| --- | --- | --- |
| `/` | HomePage | Galeria com 8 slides, coleções em destaque, atalhos de categoria, 8 produtos em alta e oferta especial |
| `/products` | ProductListingPage | Listagem com busca, ordenação e filtros |
| `/product/:id` | ProductViewPage | Breadcrumb, galeria com miniaturas, BuyBox, opções de tamanho e cor e produtos recomendados |

A rota `/produtos` redireciona para `/products`, já que a documentação usa os dois nomes. As páginas Categorias e Meus Pedidos do menu mostram um aviso de página em construção, pois não fazem parte dos requisitos mínimos.

### Comportamento

- A galeria da Home passa os slides pelas setas ou pelas bolinhas na parte de baixo.
- A busca do cabeçalho envia para `/products?filter=termo`, tanto no clique na lupa quanto no Enter. A listagem lê esse parâmetro e filtra por nome, tipo, marca e categoria, ignorando acentos e maiúsculas.
- Os filtros de marca, categoria e gênero são checkboxes. Dentro de um mesmo grupo vale "ou", entre grupos vale "e". O filtro de estado usa radio.
- O título da listagem mostra o termo buscado e o total de produtos, e muda conforme os filtros.
- "Ordenar por" aceita menor preço e maior preço, considerando o preço com desconto quando existe.
- A galeria desabilita a seta da esquerda na primeira imagem e a da direita na última. Nas miniaturas, a selecionada ganha borda de 2px na cor primária.

## Estrutura

```
src/
  components/   Logo, Header, Footer, InfoColumn, Section, ProductCard,
                ProductListing, Gallery, FilterGroup, ProductOptions, BuyBox,
                CollectionCards, CategoryShortcuts, SpecialOffer, Breadcrumb
  pages/        Layout, HomePage, ProductListingPage, ProductViewPage, NotFoundPage
  data/         products.js (produtos de exemplo)
  utils/        formatPrice.js, filterProducts.js
  assets/       logos e ícones em SVG
public/             fotos do repositório da Digital College
```

Cada componente tem o seu arquivo CSS ao lado. As cores estão como variáveis em `src/index.css`.

## Fotos

Todas as fotos vêm da pasta `public` do repositório da Digital College:

- `home-slide-1.jpeg` a `home-slide-8.jpeg`: galeria da Home. O `home-slide-4.jpeg` também aparece recortado em círculo na seção de oferta especial.
- `collection-1.png` a `collection-3.png`: cards de coleções em destaque.
- `product-thumb-1.jpeg` a `product-thumb-5.jpeg`: cards de produto (292x321).
- `produc-image-1.jpeg` a `produc-image-5.jpeg`: galeria da página de produto (700x570).

São só cinco fotos de card para doze produtos, então elas se repetem. Em `src/data/products.js`, o campo `image` de cada produto aceita outra foto, e `images` aceita outra galeria, se quiser trocar.

## Decisões

- Estilo feito com CSS puro, usando as cores e medidas da documentação (campo de busca, botão Entrar, cartão de produto 292x321, miniaturas 117x95, filtros de 308px e assim por diante).
- Os dados dos produtos ficam em `src/data/products.js`. Como não há API, a página de produto procura o item pelo `id` da rota.
- O texto da oferta especial é em português corrido, no lugar do lorem ipsum do Figma. O rodapé mantém o texto original.

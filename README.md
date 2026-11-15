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
| `/` | HomePage | Banner com 4 slides, coleções em destaque, atalhos de categoria, 8 produtos em alta e oferta especial |
| `/products` | ProductListingPage | Listagem com busca, ordenação e filtros |
| `/product/:id` | ProductViewPage | Breadcrumb, galeria com miniaturas, BuyBox, opções de tamanho e cor e produtos relacionados |

A rota `/produtos` redireciona para `/products`, já que a documentação usa os dois nomes. As páginas Categorias e Meus Pedidos do menu mostram um aviso de página em construção, pois não fazem parte dos requisitos mínimos.

### Comportamento

- O banner da Home troca de slide sozinho a cada 6 segundos e também pelas bolinhas. Quem prefere menos movimento no sistema não vê a troca automática.
- A busca do cabeçalho envia para `/products?filter=termo`, tanto no clique na lupa quanto no Enter. A listagem lê esse parâmetro e filtra por nome, tipo, marca e categoria, ignorando acentos e maiúsculas.
- Os filtros de marca, categoria e gênero são checkboxes. Dentro de um mesmo grupo vale "ou", entre grupos vale "e". O filtro de estado usa radio.
- O título da listagem mostra o termo buscado e o total de produtos, e muda conforme os filtros.
- "Ordenar por" aceita menor preço e maior preço, considerando o preço com desconto quando existe.
- O selo de desconto nos cards é calculado a partir do preço e do preço com desconto.
- A galeria desabilita a seta da esquerda na primeira imagem e a da direita na última. Nas miniaturas, a selecionada ganha borda de 2px na cor primária.

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

Cada componente tem o seu arquivo CSS ao lado. As cores estão como variáveis em `src/index.css`.

## Fotos

As fotos dos tênis em `public/produtos/` foram recortadas de prints do Figma, então têm resolução menor que a dos arquivos originais. Para trocar por imagens melhores, exporte do Figma (botão direito na imagem, Export, PNG em 2x) e salve por cima dos arquivos com o mesmo nome:

- `nike-revolution.png` e `kswiss-v8.png`: banner e cards de produto, com fundo branco.
- `jordan-oferta.png`: seção de oferta especial.
- `galeria/nike-1.jpg` a `nike-5.jpg` e `galeria/kswiss-1.jpg` a `kswiss-5.jpg`: galeria da página de produto, em 700x570.

Em `src/data/products.js` cada produto usa uma dessas duas fotos pelo campo `foto`. Para dar uma foto própria a um produto, troque esse campo por `image` (card) e `images` (galeria).

## Decisões

- Estilo feito com CSS puro, usando as cores e medidas da documentação (campo de busca, botão Entrar, cartão de produto 292x321, miniaturas 117x95, filtros de 308px e assim por diante).
- Os dados dos produtos ficam em `src/data/products.js`. Como não há API, a página de produto procura o item pelo `id` da rota.
- Os textos de exemplo do Figma (lorem ipsum) foram trocados por frases em português nas seções da Home. O rodapé mantém o texto original.

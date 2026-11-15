import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function NotFoundPage({ emConstrucao = false }) {
  return (
    <Layout>
      <div className="container" style={{ padding: "96px 0", textAlign: "center" }}>
        <h1 style={{ margin: "0 0 12px", color: "var(--dark-gray)" }}>
          {emConstrucao ? "Página em construção" : "Página não encontrada"}
        </h1>
        <p style={{ margin: "0 0 24px" }}>
          {emConstrucao
            ? "Essa parte da loja ainda não faz parte desta entrega."
            : "O endereço que você tentou abrir não existe."}
        </p>
        <Link to="/" style={{ color: "var(--primary)" }}>
          Voltar para a página inicial
        </Link>
      </div>
    </Layout>
  );
}

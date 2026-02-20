import React, { useMemo, useState } from "react";

const produtos = [
  { id: 1, nome: "Brigadeiro Gourmet", categoria: "Docinhos", destaque: true },
  { id: 2, nome: "Beijinho", categoria: "Docinhos", destaque: false },
  { id: 3, nome: "Cajuzinho", categoria: "Docinhos", destaque: false },
  { id: 4, nome: "Bolo no Pote de Ninho", categoria: "Bolos", destaque: true },
  { id: 5, nome: "Brownie Recheado", categoria: "Brownies", destaque: true },
  { id: 6, nome: "Cookie de Chocolate", categoria: "Cookies", destaque: false },
];

const categorias = ["Todas", ...new Set(produtos.map((p) => p.categoria))];

export default function App() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [ordem, setOrdem] = useState("destaque");
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho((atual) => {
      const existe = atual.find((item) => item.id === produto.id);
      if (existe) {
        return atual.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...atual, { ...produto, quantidade: 1 }];
    });
  }

  function removerDoCarrinho(id) {
    setCarrinho((atual) =>
      atual
        .map((item) => (item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item))
        .filter((item) => item.quantidade > 0)
    );
  }

  const produtosFiltrados = useMemo(() => {
    let lista = [...produtos];

    if (categoria !== "Todas") {
      lista = lista.filter((p) => p.categoria === categoria);
    }

    if (busca.trim()) {
      const termo = busca.toLowerCase();
      lista = lista.filter((p) => p.nome.toLowerCase().includes(termo));
    }

    if (ordem === "az") {
      lista.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (ordem === "za") {
      lista.sort((a, b) => b.nome.localeCompare(a.nome));
    } else {
      lista.sort((a, b) => Number(b.destaque) - Number(a.destaque));
    }

    return lista;
  }, [busca, categoria, ordem]);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Doces da Juliana</h1>
        <p style={styles.subtitle}>Sabores artesanais feitos com carinho</p>
      </header>

      <section style={styles.controls}>
        <input
          type="text"
          placeholder="Buscar doce..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={styles.input}
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)} style={styles.select}>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select value={ordem} onChange={(e) => setOrdem(e.target.value)} style={styles.select}>
          <option value="destaque">Destaques</option>
          <option value="az">Nome (A-Z)</option>
          <option value="za">Nome (Z-A)</option>
        </select>
      </section>

      <section style={styles.grid}>
        {produtosFiltrados.map((p) => (
          <article key={p.id} style={styles.card}>
            {p.destaque && <span style={styles.badge}>Destaque</span>}
            <h3 style={styles.cardTitle}>{p.nome}</h3>
            <p style={styles.category}>{p.categoria}</p>
            <button style={styles.button} onClick={() => adicionarAoCarrinho(p)}>
              Adicionar ao carrinho
            </button>
          </article>
        ))}
      </section>

      <section style={styles.cart}>
        <h2 style={{ marginTop: 0 }}>Carrinho</h2>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            {carrinho.map((item) => (
              <div key={item.id} style={styles.cartRow}>
                <span>
                  {item.nome} x {item.quantidade}
                </span>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <button style={styles.removeBtn} onClick={() => removerDoCarrinho(item.id)}>
                    Remover 1
                  </button>
                </div>
              </div>
            ))}
            <button style={styles.clearBtn} onClick={() => setCarrinho([])}>
              Limpar carrinho
            </button>
          </>
        )}
      </section>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: 20,
    fontFamily: "'Trebuchet MS', sans-serif",
    color: "#2d1f16",
  },
  header: {
    textAlign: "center",
    marginBottom: 24,
    background: "linear-gradient(135deg, #fff1dc, #ffe4bf)",
    borderRadius: 16,
    padding: "24px 16px",
  },
  title: { margin: 0, fontSize: 34 },
  subtitle: { marginTop: 8, opacity: 0.85 },
  controls: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1fr",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    border: "1px solid #d8c2a9",
    fontSize: 15,
  },
  select: {
    padding: 10,
    borderRadius: 10,
    border: "1px solid #d8c2a9",
    fontSize: 15,
    background: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
    marginBottom: 24,
  },
  card: {
    position: "relative",
    background: "#fff",
    border: "1px solid #f0dcc1",
    borderRadius: 14,
    padding: 14,
    boxShadow: "0 6px 18px rgba(89, 52, 21, 0.08)",
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    background: "#ff8f3a",
    color: "#fff",
    borderRadius: 999,
    padding: "4px 10px",
    fontSize: 12,
    fontWeight: 700,
  },
  cardTitle: { margin: "0 0 6px 0", paddingRight: 70 },
  category: { margin: "0 0 12px 0", color: "#7a5a44", fontSize: 14 },
  button: {
    width: "100%",
    background: "#7b3f00",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "10px 12px",
    cursor: "pointer",
    fontWeight: 600,
  },
  cart: {
    background: "#fffaf3",
    border: "1px solid #f0dcc1",
    borderRadius: 14,
    padding: 16,
  },
  cartRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    borderBottom: "1px dashed #e7cfb3",
    padding: "10px 0",
  },
  removeBtn: {
    border: "1px solid #c8a98a",
    background: "#fff",
    borderRadius: 8,
    padding: "6px 10px",
    cursor: "pointer",
  },
  clearBtn: {
    background: "#c0392b",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "10px 12px",
    cursor: "pointer",
    fontWeight: 600,
  },
};

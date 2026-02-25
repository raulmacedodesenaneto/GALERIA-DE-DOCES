import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";
import "./App.css";

const FRETE_FIXO = 8;
const LIMITE_FRETE_GRATIS = 80;

const doces = [
  {
    id: 1,
    nome: "Brigadeiro Gourmet",
    descricao: "Chocolate belga com granulado crocante.",
    preco: 4.5,
    imagem:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    nome: "Cupcake de Morango",
    descricao: "Massa fofinha com cobertura de cream cheese.",
    preco: 12,
    imagem:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    nome: "Macaron Colorido",
    descricao: "Casquinha crocante e recheio cremoso.",
    preco: 8,
    imagem:
      "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    nome: "Donut Glaceado",
    descricao: "Cobertura doce com toque de baunilha.",
    preco: 10,
    imagem:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    nome: "Cheesecake Frutas Vermelhas",
    descricao: "Base crocante e calda artesanal.",
    preco: 16,
    imagem:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    nome: "Torta de Limão",
    descricao: "Azedinho equilibrado com merengue leve.",
    preco: 14,
    imagem:
      "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=900&q=80",
  },
];

const brl = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function App() {
  const [carrinho, setCarrinho] = useState(() => {
    const salvo = localStorage.getItem("carrinho_doces");
    return salvo ? JSON.parse(salvo) : {};
  });

  useEffect(() => {
    localStorage.setItem("carrinho_doces", JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionar = (id) => {
    setCarrinho((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const diminuir = (id) => {
    setCarrinho((prev) => {
      const q = prev[id] || 0;
      if (q <= 1) {
        const copia = { ...prev };
        delete copia[id];
        return copia;
      }
      return { ...prev, [id]: q - 1 };
    });
  };

  const remover = (id) => {
    setCarrinho((prev) => {
      const copia = { ...prev };
      delete copia[id];
      return copia;
    });
  };

  const limparCarrinho = () => setCarrinho({});

  const itensCarrinho = useMemo(
    () =>
      doces
        .filter((d) => carrinho[d.id])
        .map((d) => ({ ...d, quantidade: carrinho[d.id] })),
    [carrinho]
  );

  const totalItens = useMemo(
    () => itensCarrinho.reduce((s, i) => s + i.quantidade, 0),
    [itensCarrinho]
  );

  const subtotal = useMemo(
    () => itensCarrinho.reduce((s, i) => s + i.preco * i.quantidade, 0),
    [itensCarrinho]
  );

  const frete =
    subtotal >= LIMITE_FRETE_GRATIS || subtotal === 0 ? 0 : FRETE_FIXO;
  const total = subtotal + frete;

  const faltaFreteGratis = Math.max(0, LIMITE_FRETE_GRATIS - subtotal);
  const progressoFrete = Math.min((subtotal / LIMITE_FRETE_GRATIS) * 100, 100);

  const finalizarWhatsApp = () => {
    if (!itensCarrinho.length) return;
    const linhas = itensCarrinho.map(
      (i) => `- ${i.nome} (${i.quantidade}x) = ${brl(i.preco * i.quantidade)}`
    );
    const msg = [
      "Olá! Quero finalizar este pedido:",
      "",
      ...linhas,
      "",
      `Subtotal: ${brl(subtotal)}`,
      `Frete: ${brl(frete)}`,
      `Total: ${brl(total)}`,
    ].join("\n");

    const numero = "+55 92 99310-0355";
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
  <main className="app">
    <div className="topbar">
            <button
        className="topbar-cart"
        onClick={() =>
          document.querySelector(".cart")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Ir para o carrinho"
      >
        <FiShoppingCart aria-hidden="true" />
        <span aria-hidden="true">🛒</span>
        <span className="topbar-badge">{totalItens}</span>
      </button>
    </div>

      <header className="hero">
        <p className="tag">Galeria de Doces</p>
        <h1>Sabores que encantam em cada detalhe</h1>
        <p className="subtitle">
          Escolha seus favoritos e adicione ao carrinho.
        </p>
      </header>

      <div className="layout">
        <section className="grid">
          {doces.map((doce) => (
            <article className="card" key={doce.id}>
              <img src={doce.imagem} alt={doce.nome} loading="lazy" />
              <div className="content">
                <h2>{doce.nome}</h2>
                <p>{doce.descricao}</p>
                <div className="row">
                  <strong>{brl(doce.preco)}</strong>
                  <button onClick={() => adicionar(doce.id)}>Adicionar</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside className="cart">
          <h3 className="cart-title">
  <span aria-hidden="true">🛒</span>
  <span>Carrinho</span>
  <span className="badge">{totalItens}</span>
</h3>

  <p className="shipping-text">
    {faltaFreteGratis > 0
      ? `Faltam ${brl(faltaFreteGratis)} para frete grátis`
      : "Frete grátis liberado"}
  </p>
  <div className="shipping-bar">
    <span style={{ width: `${progressoFrete}%` }} />
  </div>

  {itensCarrinho.length === 0 ? (
    <div className="cart-empty-box">
      <p className="cart-empty">Seu carrinho está vazio.</p>
      <small>Adicione doces para continuar.</small>
    </div>
  ) : (
    <>
      <ul className="cart-list">
        {itensCarrinho.map((item) => (
          <li key={item.id}>
            <div>
              <strong>{item.nome}</strong>
              <span>{item.quantidade}x {brl(item.preco)}</span>
            </div>
            <div className="actions">
              <button onClick={() => diminuir(item.id)}>-</button>
              <button onClick={() => adicionar(item.id)}>+</button>
              <button className="remove" onClick={() => remover(item.id)}>remover</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="summary">
        <p><span>Subtotal</span><strong>{brl(subtotal)}</strong></p>
        <p><span>Frete</span><strong>{brl(frete)}</strong></p>
        <p className="total"><span>Total</span><strong>{brl(total)}</strong></p>
      </div>
    </>
  )}

  <div className="cart-buttons">
    <button className="secondary" onClick={limparCarrinho} disabled={!totalItens}>
      Limpar carrinho
    </button>
    <button onClick={finalizarWhatsApp} disabled={!totalItens}>
      Finalizar no WhatsApp
    </button>
  </div>
</aside>
      </div>
    </main>
  );
}

export default App;

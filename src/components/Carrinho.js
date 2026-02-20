import React, { useState } from 'react';
import './Carrinho.css';

function Carrinho({ itens, onRemover, onLimpar }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="carrinho-container">
      <button
        className="btn-carrinho-flutuante"
        onClick={() => setAberto(!aberto)}
      >
        🛒 {itens.length}
      </button>

      {aberto && (
        <div className="carrinho-modal">
          <div className="carrinho-header">
            <h2>Carrinho de Compras</h2>
            <button
              className="btn-fechar"
              onClick={() => setAberto(false)}
            >
              ✕
            </button>
          </div>

          <div className="carrinho-conteudo">
            {itens.length > 0 ? (
              <>
                <div className="carrinho-itens">
                  {itens.map((item, index) => (
                    <div key={index} className="carrinho-item">
                      <span className="item-emoji">{item.imagem}</span>
                      <div className="item-info">
                        <p className="item-nome">{item.nome}</p>
                        <p className="item-categoria">{item.categoria}</p>
                      </div>
                      <button
                        className="btn-remover"
                        onClick={() => onRemover(index)}
                        title="Remover item"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>

                <div className="carrinho-resumo">
                  <p className="total-itens">
                    Total: <strong>{itens.length}</strong> item(ns)
                  </p>
                </div>

                <div className="carrinho-acoes">
                  <button className="btn-comprar">
                    ✓ Finalizar Compra
                  </button>
                  <button
                    className="btn-limpar"
                    onClick={onLimpar}
                  >
                    Limpar Carrinho
                  </button>
                </div>
              </>
            ) : (
              <div className="carrinho-vazio">
                <p>Seu carrinho está vazio 😢</p>
                <p className="subtexto">Adicione alguns doces deliciosos!</p>
              </div>
            )}
          </div>
        </div>
      )}

      {aberto && <div className="carrinho-overlay" onClick={() => setAberto(false)} />}
    </div>
  );
}

export default Carrinho;

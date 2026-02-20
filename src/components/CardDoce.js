import React from 'react';
import './CardDoce.css';

function CardDoce({ doce, onAdicionar }) {
  const handleAdicionar = () => {
    onAdicionar(doce);
  };

  return (
    <div className="card-doce">
      <div className="card-imagem">
        <span className="emoji">{doce.imagem}</span>
      </div>

      <div className="card-conteudo">
        <h2>{doce.nome}</h2>
        
        <div className="rating">
          {'⭐'.repeat(Math.floor(doce.rating))}
          <span className="rating-numero">{doce.rating}</span>
        </div>

        <p className="descricao">{doce.descricao}</p>

        <div className="categoria-badge">
          {doce.categoria.toUpperCase()}
        </div>

        <div className="card-footer">
          <button
            className="btn-adicionar"
            onClick={handleAdicionar}
          >
            🛒 Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDoce;

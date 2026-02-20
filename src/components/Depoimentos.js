import React from 'react';
import './Depoimentos.css';

function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      nome: 'Maria Silva',
      texto: 'Os bolos de pote são incríveis! Pedido para o aniversário da minha filha e todos adoraram.',
      rating: 5,
      imagem: '😊'
    },
    {
      id: 2,
      nome: 'João Santos',
      texto: 'Qualidade excelente, embalagem linda. Recomendo demais!',
      rating: 5,
      imagem: '🥰'
    },
    {
      id: 3,
      nome: 'Ana Costa',
      texto: 'O bolo de morango é meu favorito. Muito fresco e delicioso!',
      rating: 5,
      imagem: '😍'
    },
    {
      id: 4,
      nome: 'Carlos Mendes',
      texto: 'Ótimo custo-benefício e entrega rápida. Voltarei a pedir!',
      rating: 4.5,
      imagem: '😄'
    }
  ];

  return (
    <section className="depoimentos-section">
      <h2>O que Dizem Nossos Clientes</h2>
      <div className="depoimentos-container">
        {depoimentos.map(depoimento => (
          <div key={depoimento.id} className="depoimento-card">
            <div className="depoimento-header">
              <span className="depoimento-emoji">{depoimento.imagem}</span>
              <div className="depoimento-info">
                <h3>{depoimento.nome}</h3>
                <div className="stars">
                  {'⭐'.repeat(Math.floor(depoimento.rating))}
                </div>
              </div>
            </div>
            <p className="depoimento-texto">"{depoimento.texto}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Depoimentos;

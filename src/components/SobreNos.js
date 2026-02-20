import React, { useState } from 'react';
import './SobreNos.css';

function SobreNos() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <button className="btn-sobre" onClick={() => setAberto(true)}>
        ℹ️ Sobre Nós
      </button>

      {aberto && (
        <div className="modal-sobre">
          <div className="modal-conteudo-sobre">
            <button className="btn-fechar-modal" onClick={() => setAberto(false)}>
              ✕
            </button>
            
            <h2>Sobre Nossa Loja 🍰</h2>
            
            <div className="sobre-texto">
              <p>
                <strong>Bem-vindo à Galeria de Doces!</strong>
              </p>
              <p>
                Somos especializados em bolos de pote artesanais, feitos com ingredientes frescos e de qualidade. 
                Cada bolo é preparado com amor e dedicação para garantir o melhor sabor em cada colherada.
              </p>

              <h3>Por que nos escolher?</h3>
              <ul>
                <li>🍫 Ingredientes frescos e de qualidade premium</li>
                <li>🎨 Apresentação linda e sofisticada</li>
                <li>📦 Embalagem especial para presente</li>
                <li>🚀 Entrega rápida e segura</li>
                <li>💯 Garantia de satisfação</li>
              </ul>

              <h3>Atendimento</h3>
              <div className="contato-info">
                <p>📞 <strong>Telefone:</strong> (11) 98765-4321</p>
                <p>📧 <strong>Email:</strong> contato@galeriadoces.com.br</p>
                <p>📍 <strong>Local:</strong> São Paulo - SP</p>
                <p>🕐 <strong>Horário:</strong> Seg-Dom 09h às 18h</p>
              </div>

              <h3>Redes Sociais</h3>
              <div className="redes-sociais">
                <a href="#" className="rede-btn">Instagram</a>
                <a href="#" className="rede-btn">Facebook</a>
                <a href="#" className="rede-btn">WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="modal-overlay-sobre" onClick={() => setAberto(false)} />
        </div>
      )}
    </>
  );
}

export default SobreNos;

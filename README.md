# Galeria de Doces 🍬

Uma aplicação web moderna e responsiva para uma galeria de doces desenvolvida em React.

## Características

✨ **Interface moderna e atrativa**

- Design responsivo que funciona em desktop e mobile
- Gradientes e animações suaves
- Cards interativos com efeitos hover

🎯 **Funcionalidades**

- Galeria completa de doces com 12 produtos
- Sistema de filtros por categoria (Chocolates, Bolos, Pudins, Confeitaria, Gelados)
- Exibição de classificação por estrelas
- Preços e descrições detalhadas
- Botão para "Pedir" com feedback visual

📱 **Responsivo**

- Funciona perfeitamente em dispositivos móveis
- Grid dinâmico que se adapta ao tamanho da tela
- Touchs amigáveis para mobile

## Como Instalar e Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. **Instale as dependências:**

```bash
npm install
```

1. **Inicie o servidor de desenvolvimento:**

```bash
npm start
```

1. **Acesse no navegador:**

```text
http://localhost:3000
```

## Estrutura do Projeto

```text
src/
├── App.js                 # Componente principal
├── App.css               # Estilos da aplicação
├── index.js              # Arquivo de entrada
├── index.css             # Estilos globais
└── components/
    ├── CardDoce.js       # Componente de card dos doces
    └── CardDoce.css      # Estilos do card
```

## Produtos Disponíveis

### Chocolates 🍫

- Brigadeiro - R$ 3.50
- Beijinho - R$ 3.50

### Bolos 🍰

- Pavê - R$ 28.00
- Bolo de Chocolate - R$ 35.00
- Torta de Morango - R$ 45.00
- Cheesecake - R$ 40.00

### Pudins ⭐

- Pudim de Leite - R$ 12.00
- Pudim de Chocolate - R$ 12.00

### Confeitaria ✨

- Açúcar de Ouro - R$ 8.00
- Bem-Casado - R$ 2.50
- Paçoca - R$ 4.00

### Gelados 🍦

- Sorvete - R$ 15.00

## Personalizações Possíveis

Você pode facilmente personalizar:

- **Cores**: Edite no arquivo CSS
- **Doces**: Modifique o array `doces` em `App.js`
- **Categorias**: Adicione novas categorias na lista `categorias`
- **Preços**: Atualize os valores no array de doces

## Build para Produção

```bash
npm run build
```

Isso gera uma pasta `build` otimizada para produção.

## Tecnologias Utilizadas

- React 18.2
- React DOM 18.2
- CSS3 (Flexbox e Grid)
- JavaScript ES6+

## Autoria

Desenvolvido com ❤️ para amantes de doces!

---

### Aproveite sua galeria de doces! 🍰🍫🎂

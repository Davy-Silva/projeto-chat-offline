# Projeto Chat Offline

Uma interface de chat local desenvolvida em React + TypeScript com Vite, focada em simular conversas entre usuário e robô em um ambiente totalmente front-end.

O projeto foi pensado como uma aplicação simples, leve e visualmente agradável para demonstrar a criação de componentes de chat, mensagens em lista, alternância de remetente e boa experiência em dispositivos móveis e desktop.

## ✨ Demonstração

Este projeto é um chat offline, ou seja:

- não há backend;
- não salva mensagens em banco de dados;
- as mensagens ficam apenas em estado do aplicativo;
- ao recarregar a página, o histórico é resetado.

É ideal para estudos de UI/UX, componentes React, gerenciamento de estado local e prototipagem de interfaces de conversa.

## 🧩 Funcionalidades

- Interface de chat moderna e responsiva
- Campo de texto com autofalha ajustável
- Envio de mensagens com tecla Enter
- Seleção de remetente entre Usuário e Robô
- Lista dinâmica de mensagens
- Estilo visual com Tailwind CSS
- Componentização em React para melhor organização do código

## 🛠️ Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## 📁 Estrutura do projeto

```bash
projeto-chat-offline/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ChatScreen.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── MessageInput.tsx
│   │   ├── MessageList.tsx
│   │   └── SenderToggle.tsx
│   ├── types/
│   │   └── message.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
└── .gitignore
```

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/projeto-chat-offline.git
cd projeto-chat-offline
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o projeto em modo de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível no navegador, normalmente em:

```bash
http://localhost:5173
```

### 4. Build de produção

```bash
npm run build
```

### 5. Preview da build

```bash
npm run preview
```

## 🧠 Como funciona

A aplicação inicia com um estado de mensagens vazio. Ao digitar algo no campo de entrada e enviar, uma nova mensagem é adicionada ao estado local do componente principal. O usuário pode escolher se a mensagem será enviada como:

- Usuário
- Robô

Isso é feito pela troca de um `senderMode` e pela renderização condicional dos balões de mensagem.

## 📌 Observações

Este projeto é uma base excelente para:

- aprender React com componentes reutilizáveis;
- entender estados e eventos em interfaces de chat;
- praticar layout responsivo com Tailwind;
- evoluir para um chat com API real futuramente.

## 🧪 Scripts disponíveis

No arquivo `package.json`, os scripts principais são:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  }
}
```

## 📚 Licença

Este projeto está disponível para fins educacionais e de estudo.

## 🤝 Contribuição

Contribuições são bem-vindas. Se você quiser melhorar o projeto:

1. Faça um fork
2. Crie uma branch para a sua feature
3. Faça o commit
4. Abra um pull request

## ✨ Autor

Desenvolvido como projeto de estudo em React + TypeScript com foco em interface de chat front-end.

Se quiser, também posso criar uma segunda versão com:

- persistência local usando localStorage;
- integração com OpenAI ou LLM;
- autenticação simples;
- suporte a múltiplos usuários por sala.

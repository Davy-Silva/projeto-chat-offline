# PRD de Implementação - Chat Offline

## 1. Visão Geral

Este projeto tem como objetivo implementar uma interface de chat offline em uma única tela, com experiência visual acolhedora e foco em simplicidade de uso. O usuário poderá enviar mensagens como usuário ou como robô, alternando o comportamento por meio de um toggle no input de mensagem.

### Premissas de implementação
- O projeto será desenvolvido em React + Vite + TypeScript.
- A estilização será feita com Tailwind CSS 4.
- O histórico do chat ficará armazenado em state local, sem persistência.
- As mensagens do robô serão enviadas manualmente pelo usuário através do toggle, sem geração automática de resposta.
- Os tipos devem ser definidos em src/types, utilizando type e não interface.
- Os componentes devem ficar em src/components.

---

## 2. Objetivo do Produto

Criar uma interface de chat simples, visualmente agradável e funcional, em que o usuário possa:
- escrever mensagens;
- alternar entre enviar como usuário ou como robô;
- visualizar o histórico de mensagens em uma conversa linear;
- ter uma experiência limpa, com layout centralizado e input fixo na parte inferior.

---

## 3. Público-Alvo

Usuário final que deseja:
- experimentar uma interface de chat single-page;
- testar a distinção visual entre mensagens de usuário e de robô;
- ver uma implementação simples de UI com foco em layout e interação.

---

## 4. Escopo MVP

### Funcionalidades incluídas
- Tela única de chat.
- Histórico de mensagens em state local.
- Input de mensagem com área ajustável conforme o conteúdo.
- Toggle para escolher o remetente da mensagem:
  - usuário: mensagem alinhada à direita;
  - robô: mensagem alinhada à esquerda.
- Botão de envio habilitado somente quando houver texto.
- Estilização visual com fundo marrom claro e card de input branco.
- Layout com largura máxima 2xl, centralizado em telas maiores.
- Input fixo no canto inferior da tela.

### Funcionalidades não incluídas no MVP
- Persistência do histórico em localStorage ou backend.
- Autenticação.
- Histórico com datas ou timestamps complexos.
- Respostas automáticas do robô.
- Envio de arquivos, mídia ou emojis avançados.

---

## 5. Requisitos Funcionais

### 5.1 Layout e estrutura
- A aplicação exibe uma única tela com área de conversa e área de input.
- O chat ocupa a maior parte da tela e o input permanece visível ao fundo.
- O conteúdo principal é centralizado no desktop com largura máxima 2xl.

### 5.2 Conversa
- O usuário pode adicionar mensagens ao histórico.
- Cada mensagem exibe o remetente e o conteúdo.
- Mensagens do usuário aparecem à direita.
- Mensagens do robô aparecem à esquerda.

### 5.3 Input de mensagem
- O input aceita texto multilinha.
- O card do input tem fundo branco.
- A altura do input aumenta conforme a mensagem digitada.
- O botão de envio fica à direita do card.
- O botão de envio fica desabilitado quando o campo estiver vazio.

### 5.4 Toggle de remetente
- O toggle define se a próxima mensagem será enviada como usuário ou como robô.
- Quando o toggle estiver ativado para robô, o card do input recebe uma borda roxa, indicando o modo ativo.

### 5.5 Estado da aplicação
- O histórico do chat é mantido em state React.
- O estado é atualizado ao enviar novas mensagens.

---

## 6. Requisitos Não Funcionais

- Interface responsiva para desktop e dispositivos menores.
- Código organizado em componentes reutilizáveis.
- Tipagem forte com TypeScript.
- Estilo consistente com Tailwind CSS.
- Performance adequada para uma aplicação simples sem backend.

---

## 7. Fluxo de Uso

1. O usuário abre a aplicação.
2. Visualiza a tela de chat vazia ou com mensagens iniciais, se houver.
3. Digita uma mensagem no input.
4. Define o remetente pelo toggle.
5. Clica em enviar.
6. A mensagem é adicionada ao histórico e exibida na posição correta.
7. O input é limpo para permitir nova entrada.

---

## 8. Estrutura de Arquivos Sugerida

- src/components
  - ChatScreen
  - MessageList
  - MessageBubble
  - MessageInput
  - SenderToggle
  - SendButton
- src/types
  - message.ts
- src/App.tsx
- src/index.css

---

## 9. Critérios de Aceitação

- A interface exibe uma área de chat e um input fixo na parte inferior.
- O usuário consegue enviar mensagens como usuário e como robô.
- As mensagens aparecem corretamente alinhadas à direita ou à esquerda.
- O botão de envio fica desabilitado quando não há texto.
- O card de input muda visualmente quando o modo robô estiver ativo.
- O histórico é renderizado corretamente sem necessidade de persistência.
- O app compila com sucesso e sem erros de TypeScript.

---

## 10. Divisão de Tarefas em Ordem Progressiva de Implementação

### Fase 1 - Estrutura base
1. [x] Criar a estrutura inicial da tela principal.
2. [x] Definir o layout base com área de chat e área de input.
3. [x] Configurar o fundo visual e o container centralizado com largura máxima 2xl.

### Fase 2 - Modelagem de dados
4. [x] Criar o tipo Message em src/types.
5. [x] Definir o estado inicial do chat com um array vazio ou com mensagens de exemplo.

### Fase 3 - Renderização do chat
6. [x] Criar o componente de lista de mensagens.
7. [x] Criar o componente de bolha de mensagem com alinhamento condicional.
8. [x] Renderizar o histórico de mensagens na tela.

### Fase 4 - Input e interação
9. [x] Criar o componente de input com área ajustável.
10. [x] Implementar o controle do texto digitado.
11. [x] Implementar o botão de envio com estado desabilitado quando não houver conteúdo.

### Fase 5 - Toggle de remetente
12. [x] Criar o toggle para alternar entre usuário e robô.
13. [x] Implementar a lógica de envio de mensagem com base no remetente selecionado.
14. [x] Aplicar a estilização visual diferenciada no input quando o modo robô estiver ativo.

### Fase 6 - Polimento e validação
15. [x] Ajustar espaçamentos, cores e responsividade.
16. [x] Verificar o comportamento visual do input fixo e do histórico.
17. [x] Validar a compilação e corrigir problemas de UI/TypeScript.

---

## 11. Observações de Implementação

- A implementação deve priorizar clareza de código e separação de responsabilidades.
- Os componentes devem ser pequenos e reutilizáveis.
- A lógica de estado deve permanecer centralizada na tela principal ou em um componente container responsável pelo chat.
- O foco principal é entregar um MVP visual e funcional com boa experiência de uso.

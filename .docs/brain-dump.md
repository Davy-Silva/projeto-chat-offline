# Projeto: Chat Offline

## Aspectos Técnicos

Tecnologias usadas:
- React + vite
- Typescript
- Tailwindcss 4

obs:
- todos os types salvos na pasta src/types (usando type e nao interface)
- todos os componentes salvos na pasta src/components
- o histórico do chat deve estar em um state sem persistência

## Aspectos Visuais 

Descrição:
Projeto de janela única de chat em que eu consiga enviar mensagens como usuário e como robô(através de um toggle no input de mensagem)

obs:
- A tela vai ter um fundo marrom claro
- Todo o chat (incluindo histórico de mensagens e input) terão uma largura máxima(2xl), centralizado no desktop
- O input será um card com fundo branco e altura ajustada conforme a mensagem
- O card do input ficará no canto inferior o tempo inteiro
- Botão de enviar mensagem ao lado direito do card do input, e ficará desabilitado quando não tiver mensagem digitada
- O Botão toggle ficará na esquerda do card do input, ele serve para decidir se a mensagem será do usuário (que fica a direita do chat) ou do robô(que fica na esquerda do chat)
- Quando o toggle estiver ativado(robô) p card do input terá uma borda roxa, indicando visualmente que a mensagem eviada será enviada como robô e não com usuário

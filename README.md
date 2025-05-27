# 📊 SGP.WebUI

Bem-vindo ao frontend do **SGP (Sistema de Gestão de Processos)**, apresentado na palestra "**Dashboard Dinâmica com .NET e SignalR**"!

Este projeto é uma aplicação React + TypeScript construída com **Vite** e estilizada com **Material UI**, que se comunica em tempo real com um backend em **.NET 8 + SignalR**.

## 🚀 Funcionalidades

- 📋 Lista interativa de processos em tempo real
- 🛠️ CRUD completo (criar, editar, excluir) de processos
- 🔄 Atualizações dinâmicas via SignalR
- 🎯 Exibição de:
  - Nome do processo
  - Responsável
  - Prioridade
  - Status
  - Porcentagem de conclusão
- ✍️ Formulário para cadastro e edição de processos

## 🧠 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material UI (MUI)](https://mui.com/)
- [SignalR (via ASP.NET Core)](https://learn.microsoft.com/aspnet/core/signalr/introduction)

## 🖥️ Backend

O backend da aplicação pode ser encontrado no repositório [`SGP.Api`](https://github.com/PSThiago/SGP.WebApi).  
Ele expõe uma API REST minimalista e um **Hub SignalR** para comunicação em tempo real.

## 🔧 Como rodar localmente

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/SGP.WebUI.git
    cd SGP.WebUI
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Rode o projeto:

    ```bash
    npm run dev
    ```

4. Acesse em:

    ```
    http://localhost:5173
    ```

> ⚠️ Certifique-se em qual porta o backend esteja rodando e que o **CORS**
> esteja devidamente configurado para permitir conexões do frontend.

---

## 🤔 Sobre o projeto

Este projeto foi desenvolvido como exemplo didático para demonstrar o uso de **SignalR**  
na construção de **dashboards dinâmicas**, utilizando tecnologias modernas no frontend e backend.

---

Feito com 💻, ☕ e uma pitada de WebSocket.


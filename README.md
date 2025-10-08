# 📱 API WhatsApp Simulation

API RESTful criada em **Node.js** com **Express**, simulando interações de usuários e contatos do WhatsApp.  
Permite listar usuários, contatos e mensagens, além de buscar conversas específicas e filtrar mensagens por palavra-chave.

---

## 🌐 API Online

A API está disponível publicamente no **Render**:  
👉 **https://api-whatsapp-toxy.onrender.com**

Exemplo de uso direto:
```
https://api-whatsapp-toxy.onrender.com/v1/whatsapp/users/list
```

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Cors**
- **Body-parser**

---

## ⚙️ Instalação Local

```bash
# Clone o repositório
git clone https://github.com/roger-ribeiro/api-whatsapp.git

# Acesse a pasta do projeto
cd api-whatsapp

# Instale as dependências
npm install express cors body-parser
```

---

## ▶️ Execução Local

```bash
# Inicie o servidor
node app.js
```
Servidor será iniciado em:  
📍 **http://localhost:8080**

---

## 📚 Endpoints

### 1️⃣ Listar todos os usuários  
**GET** `/v1/whatsapp/users/list`

**Exemplo de resposta:**
```json
{
  "status": true,
  "statuscode": 200,
  "developer": "Roger Ribeiro de Oliveira",
  "users": [
    {
      "id": 1,
      "number": "5511999999999",
      "account": "Roger",
      "contacts": [...]
    },
    {
      "id": 2,
      "number": "5521998888888",
      "account": "Maria",
      "contacts": [...]
    }
  ]
}
```

---

### 2️⃣ Buscar informações de um usuário específico  
**GET** `/v1/whatsapp/users/:number`

**Parâmetro:** `:number` → número do usuário

**Exemplo de resposta:**
```json
{
  "status": true,
  "statuscode": 200,
  "developer": "Roger Ribeiro de Oliveira",
  "userInfo": [
    {
      "id": 1,
      "number": "5511999999999",
      "account": "Roger",
      "image": "https://cdn.whatsapp.com/avatar.jpg"
    }
  ]
}
```

---

### 3️⃣ Listar contatos de um usuário  
**GET** `/v1/whatsapp/users/:number/contacts`

**Parâmetro:** `:number` → número do usuário

**Exemplo de resposta:**
```json
{
  "status": true,
  "statuscode": 200,
  "developer": "Roger Ribeiro de Oliveira",
  "userInfo": [
    {
      "id": 1,
      "number": "5511999999999",
      "nome": "Roger",
      "contacts": [
        {
          "name": "Maria",
          "number": "5521998888888",
          "description": "Colega de trabalho",
          "image": "https://cdn.whatsapp.com/maria.jpg"
        },
        {
          "name": "João",
          "number": "5531997777777",
          "description": "Amigo de infância",
          "image": "https://cdn.whatsapp.com/joao.jpg"
        }
      ]
    }
  ]
}
```

---

### 4️⃣ Listar todas as mensagens trocadas por um usuário  
**GET** `/v1/whatsapp/users/:number/messages`

**Exemplo de resposta:**
```json
{
  "status": true,
  "statuscode": 200,
  "developer": "Roger Ribeiro de Oliveira",
  "userInfo": {
    "id": 1,
    "number": "5511999999999",
    "nome": "Roger",
    "messagesExchanged": [
      {
        "name": "Maria",
        "number": "5521998888888",
        "messages": [
          {
            "from": "Roger",
            "to": "Maria",
            "content": "Oi, tudo bem?",
            "time": "14:32"
          },
          {
            "from": "Maria",
            "to": "Roger",
            "content": "Tudo ótimo, e você?",
            "time": "14:33"
          }
        ]
      }
    ]
  }
}
```

---

### 5️⃣ Buscar mensagens trocadas entre dois contatos  
**GET** `/v1/whatsapp/users/messages/contact?number={user}&contact={contact}`

**Parâmetros de consulta:**
- `number` → número do usuário principal
- `contact` → número do contato

**Exemplo de resposta:**
```json
{
  "status": true,
  "statuscode": 200,
  "developer": "Roger Ribeiro de Oliveira",
  "userInfo": {
    "id": 1,
    "number": "5511999999999",
    "nome": "Roger",
    "exchangedMessages": {
      "name": "Maria",
      "number": "5521998888888",
      "messages": [
        {
          "from": "Roger",
          "content": "Oi Maria!",
          "time": "14:30"
        },
        {
          "from": "Maria",
          "content": "Oi Roger! Tudo certo?",
          "time": "14:31"
        }
      ]
    }
  }
}
```

---

### 6️⃣ Buscar mensagens por palavra-chave  
**GET** `/v1/whatsapp/contact/keyword?number={user}&contact={contact}&keyword={palavra}`

**Exemplo de resposta:**
```json
{
  "status": true,
  "statuscode": 200,
  "developer": "Roger Ribeiro de Oliveira",
  "userInfo": {
    "id": 1,
    "number": "5511999999999",
    "nome": "Roger",
    "contact": {
      "name": "Maria",
      "number": "5521998888888",
      "messagesFound": [
        {
          "from": "Roger",
          "content": "Oi Maria!",
          "time": "14:30"
        }
      ]
    }
  }
}
```

---

## ⚠️ Possíveis Erros

**Resposta de erro padrão:**
```json
{
  "status": false,
  "statuscode": 500,
  "developer": "Roger Ribeiro de Oliveira"
}
```

---

## 👨‍💻 Autor

**Roger Ribeiro de Oliveira**  
📅 Versão 1.0 — 2025  
💼 [LinkedIn](https://www.linkedin.com/in/rogerrib/)

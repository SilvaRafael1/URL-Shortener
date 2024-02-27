<h1 align="center">URL Shortener</h1>
<p align="center">Site para encurtar links</p>

<h1 align="center">
  <img src="https://i.imgur.com/xssZoYO.png" alt="URL Shortener" />
</h1>

<p align="center">
 <a href="#dizzy-objetivo">Objetivo</a> •
 <a href="#exclamation-pré-requisitos">Pré-requisitos</a> • 
 <a href="#sparkles-features">Features</a> • 
 <a href="#wrench-tecnologias">Tecnologias</a> • 
 <a href="#bust_in_silhouette-autor">Autor</a>
</p>

## :dizzy: Objetivo
Principal objetivo do projeto URL Shortener é ter um encurtador de links de fácil acesso, onde em apenas um "colar" e um clique no botão "Encurtar" já esteja pronto para uso.

## :exclamation: Pré Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en).

Além disso é necessário ter uma conta no [MongoDB](https://www.mongodb.com/pt-br) para utilizarmos como banco de dados, lá crie um novo projeto juntamente com uma nova database.

Caso queira trabalhar com o código fonte, é bom ter um editor de texto como o [VSCode](https://code.visualstudio.com).

### Rodando o Back End (Servidor)
```bash
# Clone este repositório
$ git clone https://github.com/SilvaRafael1/URL-Shortener.git

# Acesse a pasta do projeto no terminal/cmd
$ cd url-shortener

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Crie o arquivo .env
$ nano .env
# Digite
MONGO_URI= # MongoDB connection URI - ex: mongodb+srv://<username>:<password>@cluster.com
# Agora salve apertando Control+S e saia com Control+X

# Após isso já pode iniciar o Back End com o comando
$ npm start

# O servidor iniciará na porta:3333 - acesse <http://localhost:3333>
```

### Rodando o Front End (Cliente)
```bash
# Acesse novamente a pasta raiz do projeto no terminal/cmd
$ cd url-shortener

# Vá para a pasta client
$ cd client

# Instale as dependências
$ npm install

# Monte o projeto para torná-lo mais rápido
$ npm run build

# Após isso já pode iniciar o Front End com o comando
$ npm start

# O servidor iniciará na porta:5173 - acesse <http://localhost:5173>
```

## :sparkles: Features
- [X] Encurtador de URL

## :wrench: Tecnologias
- ``Express`` v^4.18.2
- ``Mongoose`` v^8.1.1
- ``Nanoid`` v^5.0.5
- ``Axios`` v^1.6.7
- ``Formik`` v^2.4.5
- ``React`` v^18.2.0
- ``Yup`` v^1.3.3
- ``Tailwind CSS`` v^3.4.1
- ``Vite`` v^5.1.0

## :bust_in_silhouette: Autor
| [<img src="https://avatars.githubusercontent.com/u/104951242?v=4" width="80px;"/>](https://github.com/SilvaRafael1) |
| --- |
| Rafael Augusto |
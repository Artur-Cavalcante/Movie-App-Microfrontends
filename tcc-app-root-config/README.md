# Root-Config

<div >
    <img src="https://img.shields.io/badge/SingleSpa-v5.9.3-violet?style=flat"/>
    <img src="https://img.shields.io/badge/Webpack-v5.51.1-red?style=flat"/>
    <img src="https://img.shields.io/badge/BabelCore-v7.15.0-sucess?style=flat"/>

</div>

> Protótipo aplicando os conceitos e técnicas do abordagem de micro-frontends.

O projeto foi implementado utilizando o framework [Single-Spa]https://single-spa.js.org/) que auxilia na estruturação e organização para configurar o webpack.
Aplicação foi dividida em 7 repositórios:
- [tcc-app-root-config](https://gitlab.com/yArturC6/tcc-app-root-config)
    * Repositório principal conhecido com 'app-shell', que serve para organizar as rotas dos modulos que são importados, modulos esses que são os outros projetos que complementam a aplicação. 
- [tcc-app-core](https://gitlab.com/yArturC6/tcc-app-core)
    * Compartilha os services e as cores entre os outros módulos. 
- [tcc-app-navbar](https://gitlab.com/yArturC6/tcc-app-navbar)
    * Contém a navbar de navegação da aplicação.
- [tcc-app-movies](https://gitlab.com/yArturC6/tcc-app-movies)
    * Módulo principal que mostra os filmes populares e lida com a pesquisa disponível na navbar.
- [tcc-app-details](https://gitlab.com/yArturC6/tcc-app-details)
    * Com este repositório, é exibido detalhes sobre o filme selecionado.
- [tcc-app-favorites](https://gitlab.com/yArturC6/tcc-app-favorites)
    * Mostra os filmes que são marcados como favoritos.
- [tcc-app-favorites-backend](https://gitlab.com/yArturC6/tcc-app-favorites-backend)
    * Backend simples feito em nodejs, e sqlite como banco de dados simples e único para armazenar os filmes favoritos.

A aplicação está hospedado no amplify(aws) e consegui ser visualizado a partir da url:
https://main.d1nrxnoeoj2pmz.amplifyapp.com/

## Como Executar o Projeto

Em cada projeto explicado anteriormente existe um readme de como executar cada um. E todos ele rodam de forma independente, tendo apenas que configurar a url no arquivo 'index.js' para obter cada modulo.

**Inicializar o projeto Root Config**

Inicialmente baixe o reposítorio na sua máquina
```
  $ git clone https://gitlab.com/yArturC6/tcc-app-root-config
```

No terminal estando na raiz do projeto, entre na pasta 'tcc-app-root-config':

```
  $ cd tcc-app-root-config

```

E lance o comando para instalar as dependência:

```
  $ npm install
```

Após o gerenciador de pacotes realizar o download das dependências, lance o comando para inicializar:

```
  $ npm run start
```

##### Após inicializar o front-end irá rodar na porta **9000**. A partir dai, é possível acessar a aplicação pelo browser através do endereço `http://localhost:9000/` ou  `http://127.0.0.1:9000/`




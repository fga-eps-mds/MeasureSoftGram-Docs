# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Versionamento da documentacao

Esta documentacao e **unica e versionada**: em vez de criar um site novo a cada
semestre, todos os ciclos contribuem para este mesmo repositorio e as versoes
estaveis ficam congeladas no historico do site.

Como funciona:

- A pasta `docs/` e a versao **em desenvolvimento** (servida em `/docs/next`). E
  nela que todo trabalho novo acontece.
- As versoes estaveis ficam em `versioned_docs/` e sao selecionadas pelo seletor
  de versao no topo do site. A versao estavel padrao e definida por `lastVersion`
  em `docusaurus.config.ts`.

Para congelar uma nova versao estavel (por exemplo, ao fechar um ciclo), rode:

```bash
yarn docusaurus docs:version <numero>
```

Isso copia o conteudo atual de `docs/` para `versioned_docs/version-<numero>/` e
registra a versao em `versions.json`. Depois, atualize `lastVersion` em
`docusaurus.config.ts` se a nova versao deve passar a ser a servida por padrao.

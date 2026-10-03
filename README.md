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

## Versionamento da documentação (Automatizado via CI/CD)

Esta documentação é **única e versionada**: em vez de criar um site novo a cada semestre, todos os ciclos contribuem para este mesmo repositório e as versões são montadas automaticamente pelo workflow `.github/workflows/deploy.yml`:

- **No dia a dia (PRs para a `develop`):**
  - Edite sempre apenas a pasta `docs/` (e `sidebars.ts`).
  - Todo merge na branch **`develop`** publica automaticamente o site atualizando a versão **"Em desenvolvimento"** (servida em `/docs/next`), sem alterar a versão oficial padrão.
- **Em Produção (Promoção `develop` $\rightarrow$ `main` + Google Release Please):**
  - Ao fazer merge da `develop` na **`main`**, o workflow `.github/workflows/release.yml` (Google Release Please) abre automaticamente o PR de release (`chore(main): release X.Y.Z`) atualizando o `package.json` e o `CHANGELOG.md`.
  - **Substituição de *Minors* e Histórico por *Major*:**
    - Dentro de uma mesma *Major* (ex.: `1.0` $\rightarrow$ `1.1` $\rightarrow$ `1.2`), a nova versão **substitui** a *minor* anterior no seletor do site e passa a ser a única versão oficial ativa daquela *Major* (evitando poluir o menu e duplicar pastas no repositório).
    - Quando houver incremento de *Major* (ex.: `2.0`), o workflow preserva automaticamente no menu de histórico apenas a **última versão consolidada de cada *Major* anterior** (ex.: `1.x`), enquanto a nova *Major* (`2.0`) assume como versão oficial padrão.



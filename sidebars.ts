import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Sidebar manual da documentacao da comunidade do MeasureSoftGram.
 *
 * A navegacao segue o framework Diataxis, que separa o conteudo pela
 * necessidade do leitor:
 *   - Conceitos (explanation): entender o que e e como funciona.
 *   - Primeiros passos (tutorial): aprender fazendo.
 *   - Repositorios (how-to): onde vive cada modulo.
 *   - Referencia (reference): consulta tecnica.
 *   - Contribuicao (how-to): participar do projeto.
 *
 * A ordem dentro de cada categoria define os links proximo/anterior.
 */
const sidebars: SidebarsConfig = {
  comunidadeSidebar: [
    {
      type: 'category',
      label: 'Conceitos',
      collapsed: false,
      items: ['intro', 'modelo-de-qualidade', 'arquitetura', 'glossario'],
    },
    {
      type: 'category',
      label: 'Primeiros passos',
      collapsed: false,
      items: ['primeiros-passos', 'como-usar'],
    },
    {
      type: 'category',
      label: 'Repositorios',
      collapsed: false,
      items: ['repos-ativos', 'repos-originais'],
    },
    {
      type: 'category',
      label: 'Referencia',
      collapsed: false,
      items: ['referencia-cli', 'publicar-no-pypi'],
    },
    {
      type: 'category',
      label: 'Contribuicao',
      collapsed: false,
      items: ['como-contribuir'],
    },
  ],
};

export default sidebars;

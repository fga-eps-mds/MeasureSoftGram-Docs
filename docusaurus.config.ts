import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MeasureSoftGram',
  tagline: 'Plataforma de medicao e avaliacao de qualidade de software',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://fga-eps-mds.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/MeasureSoftGram-Docs/',
  trailingSlash: true,

  // GitHub pages deployment config.
  organizationName: 'fga-eps-mds', // GitHub org.
  projectName: 'MeasureSoftGram-Docs', // Repo name.

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/fga-eps-mds/MeasureSoftGram-Docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MeasureSoftGram',
      logo: {
        alt: 'Logo do MeasureSoftGram',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'comunidadeSidebar',
          position: 'left',
          label: 'Documentacao',
        },
        {
          href: 'https://github.com/fga-eps-mds',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentacao',
          items: [
            {
              label: 'Sobre o produto',
              to: '/docs/intro',
            },
            {
              label: 'Como usar',
              to: '/docs/como-usar',
            },
            {
              label: 'Como contribuir',
              to: '/docs/como-contribuir',
            },
          ],
        },
        {
          title: 'Repositorios',
          items: [
            {
              label: 'Repositorios ativos',
              to: '/docs/repos-ativos',
            },
            {
              label: 'Repositorios originais',
              to: '/docs/repos-originais',
            },
            {
              label: 'Organizacao no GitHub',
              href: 'https://github.com/fga-eps-mds',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Como contribuir',
              to: '/docs/como-contribuir',
            },
            {
              label: 'Configurar o TestPyPI',
              to: '/docs/configurar-testpypi',
            },
          ],
        },
      ],
      copyright: `MeasureSoftGram - fga-eps-mds. Construido com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

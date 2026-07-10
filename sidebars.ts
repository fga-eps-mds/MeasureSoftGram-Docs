import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Sidebar manual da documentacao da comunidade do MeasureSoftGram.
 * A ordem aqui define a navegacao lateral e os links proximo/anterior.
 */
const sidebars: SidebarsConfig = {
  comunidadeSidebar: [
    'intro',
    'modelo-de-qualidade',
    'arquitetura',
    'como-usar',
    'como-contribuir',
    'repos-ativos',
    'repos-originais',
    'configurar-testpypi',
  ],
};

export default sidebars;

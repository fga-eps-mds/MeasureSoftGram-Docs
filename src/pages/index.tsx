import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const BADGES = [
  {
    href: 'https://pypi.org/project/msgram/',
    src: 'https://img.shields.io/pypi/v/msgram?label=msgram&color=2E8555',
    alt: 'Versao do msgram no PyPI',
  },
  {
    href: 'https://github.com/fga-eps-mds',
    src: 'https://img.shields.io/badge/license-AGPLv3-blue',
    alt: 'Licenca AGPLv3',
  },
  {
    href: 'https://github.com/fga-eps-mds',
    src: 'https://img.shields.io/badge/python-3.9%2B-3776AB',
    alt: 'Python 3.9 ou superior',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.badges}>
          {BADGES.map((b) => (
            <a key={b.alt} href={b.href} target="_blank" rel="noopener noreferrer">
              <img src={b.src} alt={b.alt} height={20} />
            </a>
          ))}
        </div>

        <div className={styles.quickstart}>
          <CodeBlock language="bash">{`pip install msgram
msgram init`}</CodeBlock>
        </div>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Comece por aqui
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://github.com/fga-eps-mds">
            Ver no GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function WhoUses() {
  return (
    <section className={styles.whoUses}>
      <div className="container text--center">
        <Heading as="h2">Nascido na academia, aberto à comunidade</Heading>
        <p className={styles.whoUsesText}>
          O MeasureSoftGram é desenvolvido e evoluído a cada semestre por turmas
          das disciplinas de Engenharia de Produto de Software (EPS) e Métodos de
          Desenvolvimento de Software (MDS) da Universidade de Brasília (FGA), e é
          mantido como projeto de código aberto sob a organização{' '}
          <a href="https://github.com/fga-eps-mds" target="_blank" rel="noopener noreferrer">
            fga-eps-mds
          </a>
          . A cada ciclo, uma nova turma herda, usa e melhora a ferramenta.
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentacao da comunidade do MeasureSoftGram: medicao e avaliacao de qualidade de software.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <WhoUses />
      </main>
    </Layout>
  );
}

import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Mede qualidade de forma objetiva',
    Svg: require('@site/static/img/feature-medir.svg').default,
    description: (
      <>
        Coleta metricas do SonarCloud e do GitHub e as agrega num modelo de
        qualidade, produzindo uma nota unica e comparavel entre versoes.
      </>
    ),
  },
  {
    title: 'Modular por design',
    Svg: require('@site/static/img/feature-modular.svg').default,
    description: (
      <>
        Um ecossistema de modulos independentes (Core, Service, CLI, Parser,
        Front, Action e outros), cada um com uma responsabilidade bem definida.
      </>
    ),
  },
  {
    title: 'Aberto a contribuicoes',
    Svg: require('@site/static/img/feature-contribuir.svg').default,
    description: (
      <>
        Projeto academico e de codigo aberto sob a licenca AGPLv3. Veja o guia
        de contribuicao para abrir issues e enviar pull requests.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

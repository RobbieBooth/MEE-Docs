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
    title: 'Easy to Use',
    Svg: require('@site/static/img/designed-for-students-educators.svg').default,
    description: (
      <>
        Designed to facilitate a better experience for both students and educators when it comes to creating and taking quizzes.
      </>
    ),
  },
    {
        title: 'Dynamic Questions',
        Svg: require('@site/static/img/dynamic-question.svg').default,
        description: (
            <>
                Built to facility the creation of dynamic questions, allowing for students to have completely unique quiz experiences, instead of the traditional static questions.
            </>
        ),
    },
  {
    title: 'Drag and Drop',
    Svg: require('@site/static/img/modularity-diagram.svg').default,
    description: (
      <>
        Build with a modularity at heart. Allowing for educators to create question modules of there own and easily add them to the system.
      </>
    ),
  },
  {
    title: 'Powered by Modern Technology',
    Svg: require('@site/static/img/frameworks-overview-tailwind.svg').default,
    description: (
      <>
        Using spring boot, react, mongo db, nodejs, remix and tailwind. It is built to last, utilising industry standard technologies.
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

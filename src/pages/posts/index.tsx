import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
            <p>Suscipit expedita dignissimos impedit. Neque, illum. Repellendus, ullam odit. Vitae, dolorum perspiciatis nam ipsa molestias repellendus officiis, quas ab natus itaque illum?</p>
          </a>

          <a>
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
            <p>Suscipit expedita dignissimos impedit. Neque, illum. Repellendus, ullam odit. Vitae, dolorum perspiciatis nam ipsa molestias repellendus officiis, quas ab natus itaque illum?</p>
          </a>

          <a>
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong>
            <p>Suscipit expedita dignissimos impedit. Neque, illum. Repellendus, ullam odit. Vitae, dolorum perspiciatis nam ipsa molestias repellendus officiis, quas ab natus itaque illum?</p>
          </a>
        </div>
      </main>
    </>
  );
}

import { Layout } from '../components';
import { NextSeo } from 'next-seo';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Athiwat Hirunworawongkun"
        description="Humanity Needs an Upgrade."
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

import { Layout } from '@/components/Layout';
import { NextSeo } from 'next-seo';

import "../styles/globals.css";

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

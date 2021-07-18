import { Layout } from '../layout';
import { NextSeo } from 'next-seo';

import 'tailwindcss/tailwind.css'

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

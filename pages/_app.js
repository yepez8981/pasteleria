import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;

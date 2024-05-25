import '../styles/globals.css'; // Import global styles
import RootLayout from '../components/RootLayout'; // Import RootLayout
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <RootLayout>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </RootLayout>
  );
}

export default MyApp;

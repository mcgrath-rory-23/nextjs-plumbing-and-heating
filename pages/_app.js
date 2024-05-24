import '../styles/globals.css'; // Import global styles
import RootLayout from '../components/RootLayout'; // Import RootLayout

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;

import '../styles/globals.css'; // Import global styles
import RootLayout from '../components/RootLayout'; // Adjust path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;

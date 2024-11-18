import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps, example }) {
  return (
    <>
      <Navbar />
      <p>Data: {example}</p>
      {/* pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
  
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}
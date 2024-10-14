import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';  // For page load progress bar
import 'nprogress/nprogress.css';  // Import NProgress styles
import Layout from '../components/layout';  // Global Layout component

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // NProgress (page transition loading effect)
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, [router]);

  return (
    <Layout>
      {/* Wrapping the component with global layout */}
      <Component {...pageProps} />
    </Layout>
  );
}

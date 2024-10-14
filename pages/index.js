import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MyApp - Home</title>
        <meta name="description" content="Welcome to MyApp" />
      </Head>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to MyApp</h1>
        <p className="text-lg">This is a simple homepage built with Next.js.</p>
        <div className="mt-8">
          <a
            href="/signup"
            className="text-indigo-500 hover:text-indigo-400 font-semibold"
          >
            Sign Up
          </a>
          <span className="mx-4">or</span>
          <a
            href="/signin"
            className="text-indigo-500 hover:text-indigo-400 font-semibold"
          >
            Sign In
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

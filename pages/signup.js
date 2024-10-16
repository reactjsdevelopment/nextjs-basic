import Head from 'next/head';
import Header from '../components/Header';

const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800"> 
      <Head>
        <title>MyApp - Sign Up</title>
        <meta name="description" content="Create an account for MyApp" />
      </Head>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-10">
        <div className="bg-gray-900 border border-gray-600 rounded-lg shadow-lg p-8 w-full max-w-md"> 
          <h1 className="text-4xl font-bold text-center text-white mb-6">Sign Up</h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-300 mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <a href="/signin" className="text-indigo-500 hover:text-indigo-400">Already have an account? Sign In</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;

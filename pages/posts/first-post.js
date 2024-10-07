
  import Link from 'next/link';
  import Image from 'next/image';
  import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    // <>
    <Layout>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <YourComponent/>

      </Layout>
    // </>
  );
}

const YourComponent = () => (
    <Image
      src="/images/istockphoto-491520707-612x612.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );

const TailwindInstructions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">How to Install and Use Tailwind CSS</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What is Tailwind CSS?</h2>
        <p className="mb-4">
          Tailwind CSS is a utility-first CSS framework that helps you build modern, responsive websites quickly. Instead of writing custom CSS, you use predefined classes directly in your HTML to style your elements. This saves time and makes it easier to maintain your code.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Install Tailwind CSS</h2>
        <p className="mb-2">To install Tailwind CSS, follow these steps:</p>
        <ol className="list-decimal pl-5">
          <li>Install Tailwind via npm:
            <pre className="bg-gray-200 p-4 mt-2 rounded">
              <code>npm install -D tailwindcss</code>
            </pre>
          </li>
          <li>Generate the <code>tailwind.config.js</code> file:
            <pre className="bg-gray-200 p-4 mt-2 rounded">
              <code>npx tailwindcss init</code>
            </pre>
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Add Tailwind to Your CSS</h2>
        <p className="mb-2">In your CSS file, add the following:</p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>{`@tailwind base;\n@tailwind components;\n@tailwind utilities;`}</code>
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Start Using Tailwind in Your React App</h2>
        <p className="mb-2">Now, you can start using Tailwind classes in your components:</p>
        <pre className="bg-gray-200 p-4 rounded">
          <code>{`<div className="bg-blue-500 text-white p-4 rounded">Hello Tailwind!</div>`}</code>
        </pre>
      </section>
    </div>
  );
};

export default TailwindInstructions;

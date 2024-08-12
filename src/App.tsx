import { useState } from 'react';
import './app.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mx-auto p-4 h-[100vh] flex flex-col justify-start items-center">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Responsive Layout Example</h1>
      </header>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-blue-500">Home</a></li>
          <li><a href="#" className="text-blue-500">About</a></li>
          <li><a href="#" className="text-blue-500">Blog</a></li>
          <li><a href="#" className="text-blue-500">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section className="mb-4">
          <h2 className="text-xl font-semibold">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="p-4 border rounded-lg bg-gray-100">
              <h3 className="font-bold">Post 1</h3>
              <p>Content of the first post goes here.</p>
            </article>
            <article className="p-4 border rounded-lg bg-gray-100">
              <h3 className="font-bold">Post 2</h3>
              <p>Content of the second post goes here.</p>
            </article>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Featured Articles</h2>
          <div className="grid grid-cols-12 gap-4">
            <article className="col-span-6 p-4 border rounded-lg bg-gray-100">
              <h3 className="font-bold">Article 1</h3>
              <p>Content of the first article goes here.</p>
            </article>
            <article className="col-span-6 p-4 border rounded-lg bg-gray-100">
              <h3 className="font-bold">Article 2</h3>
              <p>Content of the second article goes here.</p>
            </article>
            <article className="col-span-12 p-4 border rounded-lg bg-gray-100">
              <h3 className="font-bold">Article 3</h3>
              <p>Content of the third article goes here.</p>
            </article>
          </div>
        </section>
        <div className="p-4 space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-4">Flexbox Example</h2>
        <div className="flex space-x-4">
          <div className="flex grow-1 shrink-1 basis-1/2 bg-blue-200 p-4">
            <p>This is a flex item with <code>flex: 1 1 50%</code>.</p>
          </div>
          <div className="flex grow shrink basis-1/2 bg-blue-300 p-4">
            <p>This is another flex item with <code>flex: 1 1 50%</code>.</p>
          </div>

          <div className="flex grow shrink-0 basis-[400px] bg-blue-300 p-4">
            <p>This is another flex item with <code>flex: 1 1 50%</code>.</p>
          </div>
        </div>
      </section>
    </div>
        <button
          className="button mt-4" // Apply the SCSS class
          onClick={toggleModal}
        >
          Open Modal
        </button>
      </main>
      <footer className="mt-4">
        <p className="text-center">&copy; 2024 Your Website</p>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h3 className="text-xl font-bold mb-4">Modal Title</h3>
          <p className="mb-4">This is the content of the modal.</p>
          <button
            className="button" // Apply the SCSS class
            onClick={toggleModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}


export default App;
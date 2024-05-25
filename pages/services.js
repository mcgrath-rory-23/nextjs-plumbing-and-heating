import Navigation from '../components/Navigation';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex flex-col items-center p-8 bg-gray-100 flex-1">
        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold mb-4">My Services</h1>
          <p className="text-lg mb-4">
            I offer a wide range of plumbing services including pipe repairs, leak detection, installation of new fixtures, and more.
          </p>
        </section>
      </main>
    </div>
  );
}

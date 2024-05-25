import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex flex-col items-center p-8 bg-gray-100 flex-1">
        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            I am an experienced plumber providing top-notch plumbing services in your area.
          </p>
          <p className="text-lg mb-4">
            I am licensed, insured, and bonded. I pride myself on professionalism and dedication to customer satisfaction.
          </p>
          <p className="text-lg mb-4">
            Whether you need emergency services or regular maintenance, I am here to help with all your plumbing needs.
          </p>
        </section>
      </main>
    </div>
  );
}

import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div>
      <Navigation />
      <main className="flex flex-col items-center p-8">
        <section className="max-w-4xl mb-8">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
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

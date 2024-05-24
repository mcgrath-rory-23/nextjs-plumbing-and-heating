import Navigation from '../components/Navigation';

export default function Services() {
  return (
    <div>
      <Navigation />
      <main className="flex flex-col items-center p-8">
        <section className="max-w-4xl mb-8">
          <h1 className="text-4xl font-bold mb-4">My Services</h1>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">Pipe Repairs</li>
            <li className="text-lg mb-2">Leak Detection</li>
            <li className="text-lg mb-2">Fixture Installation</li>
            <li className="text-lg mb-2">Water Heater Installation and Repair</li>
            <li className="text-lg mb-2">Drain Cleaning</li>
            <li className="text-lg mb-2">Sewer Line Repair</li>
          </ul>
          <p className="text-lg mt-4">
            I provide comprehensive plumbing services to ensure your home or business is always running smoothly.
          </p>
        </section>
      </main>
    </div>
  );
}

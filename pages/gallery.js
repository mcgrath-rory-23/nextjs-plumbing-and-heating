import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex flex-col items-center p-8 bg-gray-100 flex-1">
        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold mb-4">My Work Gallery</h1>
          <p className="text-lg mb-4">
            Check out some of the work I have done for my satisfied customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative h-64 w-full">
                <Image
                  src={`/images/work${num}.jpg`}
                  alt={`Work ${num}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

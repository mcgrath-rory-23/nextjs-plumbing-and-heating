import Navigation from '../components/Navigation';
import Image from 'next/image';  // Import Next.js Image component for optimized images

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex flex-col items-center p-8 bg-gray-100 flex-1">
        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold mb-4">My Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Example of a service with an icon using Next Image */}
            <div className="flex items-center space-x-4">
              <div className="relative h-12 w-12">
                <Image
                  src="/icons/leak.svg" 
                  alt="Leak Repair" 
                  layout="fill"  // Responsive fill layout
                  objectFit="contain"  // Contain the icon within the div without stretching
                />
              </div>
              <p className="text-lg">Leak Detection and Repair</p>
            </div>
            {/* Repeat for other services */}
          </div>
        </section>
      </main>
    </div>
  );
}

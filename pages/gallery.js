import Navigation from '../components/Navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex flex-col items-center p-8 bg-gray-100 flex-1">
        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold mb-4">My Work Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative h-64 w-full cursor-pointer" onClick={() => setSelectedImg(`/images/work${num}.jpg`)}>
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
          {selectedImg && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={() => setSelectedRig(null)}>
              <div className="relative w-full max-w-3xl max-h-full">
                <Image
                  src={selectedImg}
                  alt="Selected Work"
                  layout="fill"
                  objectFit="contain"  // Ensures the image is properly scaled within the modal
                  className="rounded-lg"
                />
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

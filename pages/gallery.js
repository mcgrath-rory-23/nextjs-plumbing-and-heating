import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div>
      <Navigation />
      <main className="flex flex-col items-center p-8">
        <section className="max-w-4xl mb-8">
          <h1 className="text-4xl font-bold mb-4">My Work Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-48">
              <Image src="/images/work1.jpg" alt="Work 1" layout="fill" objectFit="cover" />
            </div>
            <div className="relative h-48">
              <Image src="/images/work2.jpg" alt="Work 2" layout="fill" objectFit="cover" />
            </div>
            <div className="relative h-48">
              <Image src="/images/work3.jpg" alt="Work 3" layout="fill" objectFit="cover" />
            </div>
            <div className="relative h-48">
              <Image src="/images/work4.jpg" alt="Work 4" layout="fill" objectFit="cover" />
            </div>
            <div className="relative h-48">
              <Image src="/images/work5.jpg" alt="Work 5" layout="fill" objectFit="cover" />
            </div>
            <div className="relative h-48">
              <Image src="/images/work6.jpg" alt="Work 6" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

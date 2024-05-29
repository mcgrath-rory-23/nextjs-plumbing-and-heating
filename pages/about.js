import Navigation from '../components/Navigation';
import Image from 'next/image'; // Importing Image component for optimized images

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex flex-col items-center p-8 bg-gray-100 flex-1">
        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-5xl font-extrabold mb-4">About Me</h1>
          <Image
            src="/images/professional-photo.jpg" // Ensure you have a professional photo in your public/images folder
            alt="Professional Photo"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
          <p className="text-lg my-4">
            Hi, I&apos;m Clinton, your trusted local plumber. With over 15 years of experience in the plumbing industry, I&apos;ve dedicated my life to ensuring that your home&apos;s plumbing meets the highest standards of quality and efficiency.
          </p>
          <p className="text-lg my-4">
            From urgent repairs to routine maintenance, I am here to provide fast, reliable, and affordable services. My commitment to excellence and customer satisfaction has been the cornerstone of my career.
          </p>
          <p className="text-lg my-4">
            I am fully licensed, insured, and ready to handle any plumbing challenge. Outside of plumbing, I enjoy fishing and spending time with my family, embracing the beautiful outdoors our area offers.
          </p>
        </section>
      </main>
    </div>
  );
}

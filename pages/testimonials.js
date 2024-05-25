import Navigation from '../components/Navigation';

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex flex-col items-center p-8 bg-gray-100 flex-1">
        <section className="max-w-4xl w-full mb-8 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-5xl font-extrabold mb-4">Customer Testimonials</h1>
          <div className="mb-4">
            <p className="text-lg mb-2">
              &quot;Excellent service! The plumber was on time, friendly, and fixed the leak quickly. Highly recommend!&quot; - Jane D.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg mb-2">
              &quot;Great experience from start to finish. The work was professional and fantastic.&quot; - John S.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg mb-2">
              &quot;Very reliable and affordable service. Will definitely call again for any plumbing issues.&quot; - Mary W.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

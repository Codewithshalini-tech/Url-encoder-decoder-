
export default function Feature() {

  // Reusable card component inside the same file
  function FeatureCard({ icon, title, description, color }) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
        <div className={`${color} mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  }

  return (
    <section className="w-full py-16 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Use Our Tool?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <FeatureCard
            color="text-indigo-600"
            title="Fast Encoding"
            description="Encode URLs instantly without waiting. Super fast and reliable."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            }
          />

          <FeatureCard
            color="text-green-600"
            title="Decode Easily"
            description="Decode any encoded URL safely with just one click."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            }
          />

          <FeatureCard
            color="text-purple-600"
            title="Time Saver"
            description="Quickly encode and decode URLs to save your time."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
            }
          />

          <FeatureCard
            color="text-yellow-500"
            title="Free & Online"
            description="Use our tool anytime, anywhere. Completely free and browser based."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6h5v2H4v-2h5z" />
              </svg>
            }
          />

          <FeatureCard
            color="text-red-500"
            title="Secure"
            description="Your data is completely safe. We never store your URLs."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
              </svg>
            }
          />

          <FeatureCard
            color="text-teal-500"
            title="User Friendly"
            description="Easy to use interface. Anyone can encode or decode URLs in seconds."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            }
          />

        </div>
      </div>
    </section>
  );
}

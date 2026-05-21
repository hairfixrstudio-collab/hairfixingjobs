export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hair Fixing Jobs India
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          Connect Hair Fixing Studios with Verified Hair Technicians Across India.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Find Jobs
          </button>

          <button className="border border-white px-6 py-3 rounded-xl font-semibold">
            Post Job
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-8 pb-20">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">Verified Staff</h2>
          <p className="text-gray-400 mt-3">
            Aadhaar, PAN & Live Selfie verification for trusted hiring.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">Studio Reviews</h2>
          <p className="text-gray-400 mt-3">
            Staff can review studios and studios can review staff.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">3 Free Job Posts</h2>
          <p className="text-gray-400 mt-3">
            Studios get 3 free job posts before subscription starts.
          </p>
        </div>
      </section>
    </main>
  );
}
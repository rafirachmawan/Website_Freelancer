import React, { useState, useEffect } from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white text-center py-20 px-4 md:px-10 lg:px-20 flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
        Selamat Datang di Bantu
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl animate-slide-up">
        Platform freelance untuk pekerja formal & informal.
      </p>
      <button className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 shadow-md animate-pop-in">
        Get Started
      </button>
    </section>
  );
};

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // API dummy sebagai contoh
      .then((response) => response.json())
      .then((data) => setJobs(data.slice(0, 10))); // Ambil 10 data pertama sebagai contoh
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6 animate-fade-in">
        Cari Pekerjaan Freelance
      </h2>
      <input
        type="text"
        placeholder="Cari pekerjaan..."
        className="p-3 w-full max-w-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-md animate-slide-up"
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="mt-2 text-gray-600">{job.body}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Tidak ada pekerjaan ditemukan.</p>
        )}
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6 animate-fade-in">Fitur Utama</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {["Keamanan", "Fleksibilitas", "Dukungan 24/7", "Pembayaran Aman"].map(
          (feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-slide-up"
            >
              <h3 className="text-xl font-semibold">{feature}</h3>
              <p className="mt-2 text-gray-600">Deskripsi singkat fitur.</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 text-center">
      <h2 className="text-3xl font-bold mb-6 animate-fade-in">
        Testimoni Pengguna
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["User A", "User B"].map((user, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-slide-up"
          >
            <p className="text-gray-700 italic">
              "Layanan Bantu sangat membantu!"
            </p>
            <h4 className="text-lg font-semibold mt-4">- {user}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-16 bg-blue-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-4 animate-fade-in">
        Bergabung Sekarang!
      </h2>
      <button className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 shadow-md animate-pop-in">
        Daftar / Login
      </button>
    </section>
  );
};

export default function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <JobSearch />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}

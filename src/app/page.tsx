import Header from "../../components/Header/header";

export default function Home() {
  return (
      <>
      <Header/>
      <main className="min-h-screen bg-white text-gray-900 dark:text-white">
        <section className="flex flex-col items-center justify-center text-center py-24 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to MediPlatform
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mb-6">
            Book appointments, consult doctors, and access care — all in one platform.
          </p>
          <a
            href="/register"
            className="px-6 py-3 rounded-md bg-pexilllin-primary text-white font-medium hover:bg-pexilllin-primary/90 transition"
          >
            Get Started
          </a>
        </section>
      </main>
    </>
  );
}

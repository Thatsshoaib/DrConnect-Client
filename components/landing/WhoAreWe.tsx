import Image from "next/image";

export default function Whoarewe() {
  return (
    <section className="w-full py-24 transition-colors duration-300 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/icons/online-doctor-animate.svg"
              alt="About Us Illustration"
              width={600}
              height={400}
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-3xl ring-2 ring-[var(--primary)]/20 pointer-events-none" />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Are
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed space-y-4">
            DrConnect is a modern healthcare platform built to bridge the gap between patients and medical professionals with speed, convenience, and trust. Whether you're looking to find a specialist, book an in-clinic or virtual consultation, or simply get quick advice through our smart chatbot — we bring it all to your fingertips in a seamless experience.
            <br /><br />
            Our mission is to make healthcare not only accessible but truly personalized. We believe that every individual deserves quality care, no matter where they are. That's why DrConnect connects you to verified doctors, trusted hospitals, and reliable lab services — all through one secure and user-friendly interface.
            <br /><br />
            With a focus on privacy, real-time access, and intelligent support, DrConnect empowers you to take charge of your health journey confidently and effortlessly — anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
}

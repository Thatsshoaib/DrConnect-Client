import Image from "next/image";

export default function Whoarewe() {
  return (
    <section className="w-full py-20 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/hero1.png" 
            alt="About Us Illustration"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            DrConnect is a modern healthcare solution designed to bridge the
            gap between patients and medical professionals. Whether you need to
            find a specialist, book an appointment, or consult online — we
            streamline it all for you.
            <br /><br />
            Our mission is to make healthcare accessible, personalized, and
            simple for everyone — anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
}

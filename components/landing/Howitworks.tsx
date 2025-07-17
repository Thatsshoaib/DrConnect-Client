import Image from "next/image";

const HowItWorks = () => {
  return (
   <section className="py-28 ">
  <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-20">
    {/* Left Step List */}
    <div className="flex-1">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-10">
        How It Works
      </h2>
      <div className="space-y-10 text-left">
        {[
          "Search and find the right doctor or hospital using filters and location.",
          "Book appointments instantly—online or in-clinic, no wait needed.",
          "Consult securely via chat or video from anywhere, anytime.",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-5">
            <div className="w-10 h-10 rounded bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-lg font-bold">
              {i + 1}
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Visual Equation Style */}
    <div className="flex-1 flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap text-center">
      {/* Illustration 1 */}
      <div>
        <Image
          src="/assets/images/Howitworks1.jpg"
          alt="Video Tool"
          width={150}
          height={150}
          className="mx-auto mb-3"
        />
        <p className="text-lg text-gray-800 dark:text-white font-medium">Your Doctor</p>
      </div>

      {/* Plus */}
      <span className="text-4xl font-extrabold text-gray-800 dark:text-white">+</span>

      {/* Illustration 2 */}
      <div>
        <Image
          src="/assets/images/Whoarewe.png"
          alt="Chat App"
          width={150}
          height={150}
          className="mx-auto mb-3"
        />
        <p className="text-lg text-gray-800 dark:text-white font-medium">Smart Consultation</p>
      </div>

      {/* Equals */}
      <span className="text-4xl font-extrabold text-gray-800 dark:text-white">=</span>

      {/* Illustration 3 */}
      <div className="bg-gray-100 dark:bg-[#1f2937] rounded-2xl p-6 w-[180px]">
        <Image
          src="/assets/images/Howitworks3.jpg"
          alt="Result"
          width={150}
          height={150}
          className="mx-auto mb-3"
        />
        <p className="text-lg font-semibold text-gray-800 dark:text-white leading-snug">
          Healthier, Happier You!
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default HowItWorks;

export default function AboutSection() {
  return (
    <section className="bg-white flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-32 xl:px-48 py-16 sm:py-20 lg:py-28">
      <h2
        className="text-[28px] sm:text-[32px] lg:text-[36px] font-normal text-[#2E334E] mb-8 sm:mb-10"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        For Those Who Drive Growth
      </h2>

      <div
        className="text-[16px] sm:text-[17px] lg:text-[18px] text-black leading-relaxed max-w-4xl space-y-6"
        style={{ fontFamily: 'MuseoSans, sans-serif' }}
      >
        <p>
          CLA Global is a professional services network designed to help realize the ambitions of
          privately owned, fast-growing, mid-market clients with cross-border needs.
        </p>
        <p>
          Our member firms are united by a shared spirit of collegiality and exchange, a desire to
          shape the future of our network, and a drive to accelerate the growth of their clients and
          people.
        </p>
      </div>
    </section>
  );
}

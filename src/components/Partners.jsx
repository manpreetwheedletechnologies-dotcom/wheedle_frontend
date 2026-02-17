function Partners() {
  return (
    <section className="w-full py-8 lg:py-16">
      <div className="w-full px-4 lg:px-25 flex flex-col items-center gap-6 lg:gap-10">
        {/* Text */}
        <p className="text-[13px] lg:text-[16px] text-white text-center">
          Trusted by Industry’s Leading Organizations: Reliable. Equipped. Ahead
        </p>

        {/* Partner Logos */}
        <div className="w-full flex flex-wrap items-center justify-center overflow-hidden">
          <img
            src="/Parnter.png"
            alt="Our Partners"
            className="object-contain max-w-full h-auto scale-90 lg:scale-100"
          />
        </div>
      </div>
    </section>
  );
}

export default Partners;

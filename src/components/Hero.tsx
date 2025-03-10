const Hero = () => {
  return (
    <main className="flex-grow">
      <section
        id="hero"
        className="h-screen flex flex-col items-center justify-center bg-black text-white text-center"
      >
        <h1 className="text-5xl font-bold text-center mb-6">
          Hi, I'm <span className="text-blue-700">Collin Lanier</span>
        </h1>
        <p className="text-5xl mb-6">Computer Science Capstone</p>

        {/*  Scroll Down Button */}
        <a href="#about" className="mt-10 animate-bounce">
          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
            &darr;
          </div>
        </a>
      </section>
    </main>
  );
};

export default Hero;

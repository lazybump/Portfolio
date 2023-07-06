import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="h-screen w-5/6 mx-auto flex flex-col items-center justify-center space-y-20 text-white">
      <h1 className="text-3xl md:text-4xl">
        I&apos;m <span className="text-primary font-bold">REDACTED</span>
      </h1>
      <p className="text-2xl text-center max-w-2xl">
        A web developer focused on building sites that drive results for
        businesses
      </p>
      <a
        href="https://github.com/lazybump?tab=repositories"
        className="hover:scale-110 transition-all duration-300 hover:text-primary"
      >
        <FaGithub size={40} />
      </a>
    </main>
  );
};

export default Hero;

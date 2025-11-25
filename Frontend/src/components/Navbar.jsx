import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
   <header className="fixed top-0 w-full z-50 backdrop-blur bg-[#eef7ffcc] dark:bg-[#06121acc] 
border-b border-[#cce7ff] dark:border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white dark:text-gray-200">
          Portfolio<span className="text-blue-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-[#082f49] dark:text-white">
          <a href="#hero" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#Skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#certificates" className="hover:text-blue-400">Certificates</a>
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

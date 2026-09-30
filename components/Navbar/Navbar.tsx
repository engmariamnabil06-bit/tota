export default function Navbar() {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wide text-white transition hover:text-purple-400"
        >
          Mariam<span className="text-purple-500">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 transition duration-300 hover:text-purple-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
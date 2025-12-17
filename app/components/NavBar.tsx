export default function NavBar() {
  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-sm text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#f78a24] transition-colors text-sm sm:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button className="bg-[#f78a24] text-black px-4 sm:px-6 py-2 rounded flex items-center gap-2 hover:bg-[#e67a14] transition-colors font-medium text-sm sm:text-base whitespace-nowrap">
            Get a Quote
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}


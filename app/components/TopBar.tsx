import Link from "next/link";
// import Logo from "./Logo";

export default function TopBar() {
  return (
    <div className="bg-black/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-[#f78a24] rounded flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg">Platform Lubricant</div>
              <div className="text-xs text-gray-400">SOLUTIONS</div>
            </div>
          </Link>

          {/* <Logo /> */}

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Call */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#f78a24] rounded flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">Call</div>
                <div className="text-xs sm:text-sm font-medium">+234 723 123 1234</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#f78a24] rounded flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">Email</div>
                <div className="text-xs sm:text-sm font-medium">akapooluwatimilehin@gmail.com</div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#f78a24] rounded flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400">Office Hours</div>
                <div className="text-xs sm:text-sm font-medium">9am - 9pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


import Link from "next/link";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="bg-white text-gray-900 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Platform Lubricant Logo"
                width={40}
                height={40}
                className="h-auto w-auto object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg text-gray-900">Platform Lubricant</div>
              <div className="text-xs text-gray-600">SOLUTIONS</div>
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
                <div className="text-xs text-gray-600">Call</div>
                <div className="text-xs sm:text-sm font-medium text-gray-900">+234 705 095 7744</div>
                <div className="text-xs sm:text-sm font-medium text-gray-900">+234 708 596 1060</div>
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
                <div className="text-xs text-gray-600">Email</div>
                <div className="text-xs sm:text-sm font-medium text-gray-900">lubricants@platformlead.com</div>
              </div>
            </div>

            {/* Office Hours */}
            {/* <div className="flex items-center gap-2">
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
                <div className="text-xs text-gray-600">Office Hours</div>
                <div className="text-xs sm:text-sm font-medium text-gray-900">9am - 9pm</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}


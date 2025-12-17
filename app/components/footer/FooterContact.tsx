"use client";

import { useState } from "react";

interface FooterContactProps {
  email: string;
  address: string;
  bookCallLink?: string;
}

export default function FooterContact({
  email,
  address,
  bookCallLink = "#contact",
}: FooterContactProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium text-gray-500 mb-4">Contact</h4>
      
      {bookCallLink && (
        <a
          href={bookCallLink}
          className="text-sm text-gray-700 hover:text-[#f78a24] transition-colors block mb-4"
        >
          Book a Call
        </a>
      )}

      <div className="space-y-3">
        {/* Email with Copy Button */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-gray-700">{email}</span>
          <button
            onClick={copyEmail}
            className="bg-[#f78a24] text-white px-3 py-1 rounded text-xs font-medium hover:bg-[#e67a14] transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Address */}
        <p className="text-sm text-gray-700 leading-relaxed">{address}</p>
      </div>
    </div>
  );
}


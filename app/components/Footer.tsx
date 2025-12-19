import FooterLogo from "./footer/FooterLogo";
import FooterSocial from "./footer/FooterSocial";
import FooterLinks from "./footer/FooterLinks";
import FooterContact from "./footer/FooterContact";
import { footerData } from "../data/footerData";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Section - Logo and Social */}
          <div className="lg:col-span-1">
            <FooterLogo
              companyName={footerData.company.name}
              registrationNumber={footerData.company.registrationNumber}
              description={footerData.company.description}
            />
            <FooterSocial socialLinks={footerData.socialLinks} />
          </div>

          {/* Middle Section - Links */}
          {/* <div className="lg:col-span-1">
            <FooterLinks linkGroups={footerData.linkGroups} />
          </div> */}

          {/* Right Section - Contact */}
          <div className="lg:col-span-1">
            <FooterContact
              email={footerData.contact.email}
              address={footerData.contact.address}
              bookCallLink={footerData.contact.bookCallLink}
            />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {footerData.copyright.year || new Date().getFullYear()}{" "}
            {footerData.copyright.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

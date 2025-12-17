interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface FooterSocialProps {
  socialLinks: SocialLink[];
}

export default function FooterSocial({ socialLinks }: FooterSocialProps) {
  return (
    <div className="flex items-center gap-4 mt-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#f78a24] transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}


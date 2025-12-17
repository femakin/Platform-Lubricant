interface LinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterLinksProps {
  linkGroups: LinkGroup[];
}

export default function FooterLinks({ linkGroups }: FooterLinksProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {linkGroups.map((group) => (
        <div key={group.title}>
          <h4 className="text-sm font-medium text-gray-500 mb-4">
            {group.title}
          </h4>
          <ul className="space-y-3">
            {group.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-700 hover:text-[#f78a24] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


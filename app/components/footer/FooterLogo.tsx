import Image from "next/image";

interface FooterLogoProps {
  companyName: string;
  registrationNumber?: string;
  description: string;
}

export default function FooterLogo({
  companyName,
  registrationNumber,
  description,
}: FooterLogoProps) {
  return (
    <div className="space-y-4">
      {/* Logo */}
      <div className="flex items-start gap-3">
        <div className="shrink-0">
          <Image
            src="/assets/logodesktop.png"
            alt={`${companyName} Logo`}
            width={60}
            height={60}
            className="h-auto w-auto max-h-[60px] object-contain"
          />
        </div>
        <div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3 className="text-lg font-bold text-black">{companyName}</h3>
            {registrationNumber && (
              <span className="text-xs text-gray-500">RC {registrationNumber}</span>
            )}
          </div>
          <div className="text-xs text-gray-600 mt-1">LIMITED</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}


// components/BenefitCard.tsx
import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode; // The icon to display (e.g., an SVG or React component)
  text: string;          // The text to display alongside the icon
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, text }) => {
  return (
    <div className="flex w-full space-x-2 md:w-1/2 md:space-x-4">
      <div>
        {icon}
      </div>

      <span className="text-white">{text}</span>
    </div>
  );
};

export default BenefitCard;

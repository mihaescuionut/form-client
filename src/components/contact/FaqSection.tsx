// components/CenteredGrid.tsx
import React from "react";
import FaqAccordion from "./FaqAccordion";

const FaqSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 place-items-center p-24 bg-black">
  
      <div className="flex flex-col bg-blue-500 text-white rounded-lg w-2/3">
        <p className="text-primary font-bold text-left">Faq</p>
        <p className="text-white text-5xl">Frequently Asked <span className="font-bold">Questions</span></p>

        <p className="mt-8 text-disabled text-sm">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>

        <p className="mt-16 text-white">Ask us anything</p>
      </div>

   
      <div className="flex justify-start items-start text-white w-full">
        <FaqAccordion/>
      </div>
    </div>
  );
};

export default FaqSection;

import FaqAccordion from "../FaqAccordion";

const FaqSection = () => {
    return (
        <div className="p-6 md:p-24 bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">

                <div className="flex flex-col bg-blue-500 text-white rounded-lg w-full md:w-2/3 p-6 md:p-8">
                    <p className="text-primary font-bold text-left text-lg md:text-xl">Faq</p>
                    <p className="text-white text-2xl md:text-5xl mt-4">
                        Frequently Asked <span className="font-bold">Questions</span>
                    </p>

                    <p className="mt-8 text-disabled text-sm">
                        A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
                    </p>

                    <p className="mt-16 text-white">Ask us anything</p>
                </div>


                <div className="w-full flex justify-center items-start text-white lg:justify-start">
                    <FaqAccordion />
                </div>

            </div>
        </div>
    );
};

export default FaqSection;

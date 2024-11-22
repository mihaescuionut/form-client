import {Phone} from "lucide-react";
import ContactCard from "../ContactCard";
import CallIcon from "@/assets/icons/CallIcon";
import MailIcon from "@/assets/icons/MailIcon";
import ContactForm from "../ContactForm";
import CheckboxIcon from "@/assets/icons/CheckboxIcon";
import BenefitCard from "../BenefitCard";

const ContactSection = () => {
    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/contact-image.png')",

            }}
        >

            <div
                className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.99)] via-[rgba(3,3,3,0.12)] to-[rgba(7,7,7,1)]"></div>


            <div className="flex flex-col justify-center items-center h-full space-y-24 px-8 md:px-48 py-24">

                <div className="flex flex-col justify-center items-center w-full space-y-16 xl:items-start xl:flex-row xl:space-y-0 xl:space-x-48 ">

                    <div className="flex flex-col space-y-8 z-20 w-full xl:w-1/2 ">
                        <p className="text-3xl text-slate font-bold text-center md:text-left">Contact Us</p>

                        <ContactCard
                            icon={<CallIcon/>}
                            title="Contact@Example.Com"
                            text="Email us directly if you need any help. Our agents will help you"
                        />
                        <ContactCard
                            icon={<MailIcon/>}
                            title="+92 (123) 455 1400"
                            text="Call us directly if you need any urgent help. Our agents will help you."
                        />
                    </div>


                    <div className="flex z-20 w-full xl:w-1/2 justify-center">
                        <ContactForm/>
                    </div>
                </div>


                <div className="flex flex-col justify-start items-start z-20 space-y-8 w-full">
                    <div>
                        <p className="text-3xl md:text-5xl text-white text-center md:text-left">Benefits</p>
                    </div>

                    <div className="flex flex-wrap gap-4 lg:grid lg:grid-cols-3">
                        <BenefitCard
                            icon={<CheckboxIcon/>}
                            text="A 30 minutes advising session with one of our experienced consultants"
                        />
                        <BenefitCard
                            icon={<CheckboxIcon/>}
                            text="We'll focus on your product goals, context and technology needs to make sure we can add value."
                        />
                        <BenefitCard
                            icon={<CheckboxIcon/>}
                            text="We'll focus on your product goals, context and technology needs to make sure we can add value"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

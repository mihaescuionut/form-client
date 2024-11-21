import { Phone } from "lucide-react";
import ContactCard from "./ContactCard";
import CallIcon from "@/assets/icons/CallIcon";
import MailIcon from "@/assets/icons/MailIcon";
import ContactForm from "./ContactForm";
import CheckboxIcon from "@/assets/icons/CheckboxIcon";
import BenefitCard from "./BenefitCard";


const ContactSection = () => {


    return (

        <div 
        className="relative h-screen w-full bg-cover bg-center py-24" 
        style={{ 
            backgroundImage: "url('/assets/contact-image.png')",  
        }}>

        <div className="absolute inset-0 bg-gradient-to-r from-[#000000FC] via-[#0303031F] to-[#070707] blur-[70px]"></div>

        <div className="flex flex-col justify-center items-center h-full space-y-24 px-48">


            <div className="flex space-x-48 w-full">
                <div className="flex flex-col space-y-16 z-20 w-1/2">
                    <p className="text-3xl text-slate font-bold">Contact Us</p>

                    <ContactCard icon={<CallIcon />} title="Contact@Example.Com" text="Email us directly if you need any help. Our agents will help you" />
                    <ContactCard icon={<MailIcon />} title="+92 (123) 455 1400" 
                    text="Call us directly if you need any urgent help. Our agents will help you." />
                </div>


                <div className="flex z-20 w-1/2 justify-center">
                    <ContactForm/>
                </div>
            </div>


            <div className="flex flex-col z-20 space-y-8 w-full">

                <div>
                    <p className="text-5xl text-white">Benefits </p>
                </div>


                <div className="grid grid-cols-3 gap-4">

                    <BenefitCard icon={<CheckboxIcon />} text="A 30 minutes advising session with one of our experienced consultants" />
                    <BenefitCard icon={<CheckboxIcon />} text="We'll focus on your product goals, context and technology needs to make sure we can add value." />
                    <BenefitCard icon={<CheckboxIcon/>} text="We'll focus on your product goals, context and technology needs to make sure we can add value" />

                </div>

          
            </div>
           

        </div>

      
      </div>


    )
}

export default ContactSection;
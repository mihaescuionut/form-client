import Image from "next/image";
import HeaderList from "../header/HeaderList";
import SocialIcons from "../header/SocialIcons";
import { Twitter } from "lucide-react";

const HeroSection = () => {


    return (

        <div className="relative w-full h-1/2">
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/herobg.png')" }}/>
 
                <div className="absolute inset-0 bg-black opacity-50"></div>
        

               
                    <header className="absolute top-0 left-0 w-full px-1 py-4 flex items-center justify-around text-white z-10 border-b border-disabled">
                    
                        <div className="flex items-center justify-center gap-2">
                            <Image src="/assets/logo.png" width={50} height={30} alt="Logo" className="h-12" />
                            <p className="text-[#00A0C1] font-bold">Sette</p>
                        </div>

                        <HeaderList />  
                        
                        <div className="flex space-x-10">
                        <SocialIcons />

                        <div className="text-slate border py-2 px-4 border-primary">
                            Let's Talk
                        </div>
                        </div>
                     </header> 


                     <div className="absolute top-1/2 left-[10%] space-y-8">
                        <div className="flex items-center justify-center space-x-4">
                            <div className="flex space-x-0">
                                <Image src="/assets/Ellipse 13.png" width={61} height={61} alt="Ellipse13" />
                                <Image src="/assets/Ellipse 13.png" width={61} height={61} alt="Ellipse13" />
                            </div>
                             
                            <p className="text-7xl text-slate">Need help?</p>
                            <p className="text-7xl text-primary font-bold">Get in touch</p>
                        </div>


                        <div>
                            <p className="text-2xl text-white capitalize">Fill up the form and our team will get back to within 24 hrs</p>
                        </div>
                        
                     </div>
           
        </div>
       
    );
}

export default HeroSection;
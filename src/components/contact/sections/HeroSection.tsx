'use client';

import { useState } from "react";
import Image from "next/image";
import HeaderList from "../../header/HeaderList";
import SocialIcons from "../../header/SocialIcons";
import {Menu} from "lucide-react";

const HeroSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="relative w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/herobg.png')" }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <header
                className="absolute top-0 left-0 w-full px-4 py-4 flex flex-wrap items-center justify-start text-white z-10 border-b border-disabled lg:justify-around"
            >
                {/* Logo */}
                <div className="hidden lg:flex items-center gap-2">
                    <Image src="/assets/logo.png" width={50} height={50} alt="Logo" className="w-auto" />
                    <p className="text-[#00A0C1] font-bold">Sette</p>
                </div>

                {/* Hamburger Button */}
                <button
                    className="block lg:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Menu />
                </button>

                {/* HeaderList - Desktop */}
                <div className="hidden lg:block">
                    <HeaderList />
                </div>

                {/* Social Icons */}
                <div className="hidden lg:flex md:gap-16 md:items-center lg:mt-0">
                    <SocialIcons />
                    <div className="text-slate border py-2 px-4 border-primary">Let's Talk</div>
                </div>
            </header>

            {/* HeaderList - Mobile */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 z-20 p-4">
                    <HeaderList />
                </div>
            )}

            <div
                className="absolute top-1/3 md:top-1/2 md:left-40 w-full px-4 md:px-0 space-y-8 text-center md:text-left"
            >
                <div
                    className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4"
                >
                    <div className="flex space-x-2 justify-center md:justify-start">
                        <Image src="/assets/Ellipse 13.png" width={61} height={61} alt="Ellipse13" />
                        <Image src="/assets/Ellipse 14.png" width={61} height={61} alt="Ellipse14" />
                    </div>

                    <div>
                        <p className="text-4xl md:text-7xl text-slate">Need help?</p>
                        <p className="text-4xl md:text-7xl text-primary font-bold">Get in touch</p>
                    </div>
                </div>

                <div>
                    <p className="text-sm md:text-2xl text-white capitalize">
                        Fill up the form and our team will get back to you within 24 hrs
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

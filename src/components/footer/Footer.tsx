import CheckIcon from "@/assets/icons/CheckIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";

const Footer = () => {
    return (
        <footer>
            <div className="relative w-full bg-cover bg-center p-6 md:p-24"
                 style={{backgroundImage: "url('/assets/rectangle.png')"}}>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">

                    <div className="md:col-span-3 space-y-4">

                        <h2 className="text-3xl md:text-4xl font-light text-white">
                            We Are Available <span className="font-bold">For New Projects</span>
                        </h2>

                        <div
                            className="flex space-x-4 justify-center items-center md:justify-start md:space-x-16 text-white">
                            <div className="flex items-center space-x-2">
                                <CheckIcon/>
                                <p className="text-gray-700">Fully Secure</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckIcon/>
                                <p className="text-gray-700">24/7 Support</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckIcon/>
                                <p className="text-gray-700">Done Deal</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 flex justify-center md:justify-end">
                        <button className="bg-white py-3 px-6 rounded-none font-bold">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative px-6 md:px-24 py-12 w-full bg-cover bg-center"
                 style={{backgroundImage: "url('/assets/surface.jpg')"}}>

                <div className="absolute inset-0 bg-[#111111] opacity-95"></div>

                <div className="relative container mx-auto text-disabled">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Get Email Notifications</h3>
                            <p>Join our newsletter to stay up to date on features and releases.</p>
                            <div className="flex items-center w-full md:w-4/5">
                                <input
                                    type="email"
                                    placeholder="Enter email..."
                                    className="flex-grow px-4 py-2 rounded-l bg-input"
                                />
                                <button className="bg-primary text-white px-4 py-2 rounded-r hover:bg-cyan-600">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-sm mt-2">
                                Agree to our <a href="#" className="text-cyan-500">Privacy Policy</a> and receive
                                updates from our company.
                            </p>
                        </div>

                        <div className="flex gap-4 justify-center items-start md:justify-start md:gap-24 ">
                            <div>
                                <h4 className="font-semibold text-white mb-4">Column One</h4>
                                <ul className="space-y-2">
                                    <li><a href="#">Link One</a></li>
                                    <li><a href="#">Link Two</a></li>
                                    <li><a href="#">Link Three</a></li>
                                    <li><a href="#">Link Four</a></li>
                                    <li><a href="#">Link Five</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-white mb-4">Column Two</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-cyan-500">Link Six</a></li>
                                    <li><a href="#" className="hover:text-cyan-500">Link Seven</a></li>
                                    <li><a href="#" className="hover:text-cyan-500">Link Eight</a></li>
                                    <li><a href="#" className="hover:text-cyan-500">Link Nine</a></li>
                                    <li><a href="#" className="hover:text-cyan-500">Link Ten</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <div className="p-2 bg-primary rounded-full flex items-center justify-center">
                                            <FacebookIcon/>
                                        </div>
                                        <a href="#">Facebook</a>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="p-2 bg-primary rounded-full flex items-center justify-center">
                                            <InstagramIcon/>
                                        </div>
                                        <a href="#">Instagram</a>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="p-2 bg-primary rounded-full flex items-center justify-center">
                                            <TwitterIcon/>
                                        </div>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="p-2 bg-primary rounded-full flex items-center justify-center">
                                            <LinkedinIcon/>
                                        </div>
                                        <a href="#" className="hover:text-cyan-500">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>&copy; 2023 Sette Engineering SRL. All Rights Reserved.</p>
                        <div className="space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-cyan-500">Privacy Policy</a>
                            <a href="#" className="hover:text-cyan-500">Terms of Service</a>
                            <a href="#" className="hover:text-cyan-500">Cookies Settings</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

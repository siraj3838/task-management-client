import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-[#2c2958e1] pb-5">
            <footer className="footer p-10 text-neutral-content max-w-screen-2xl mx-auto">
                <aside>
                    <Link to={'/'}>
                        <img src="https://i.ibb.co/dKnsPKK/Screenshot-2023-12-20-140449-removebg-preview.png" alt="logo" />
                    </Link>
                    <p>DEV TOWN Industries Ltd.<br />Providing reliable tech since</p>
                </aside>
                <nav className="lg:ml-[990px] lg:mt-12">
                    <header className="footer-title">Our Social</header>
                    <div className="text-blue-700 text-2xl flex items-center gap-4">
                        <Link to={'https://web.facebook.com/WKmohammad.sakil'}>
                            <ImFacebook2></ImFacebook2>
                        </Link>
                        <Link to={'https://www.linkedin.com/in/sirajul-islam-41845a2a0/'}>
                            <ImLinkedin></ImLinkedin>
                        </Link>
                        <Link to={'https://youtube.com/@mohammadsakil4591?si=HedpmN5KcmF1tdw2'}>
                            <FaYoutube className="text-3xl text-red-700"></FaYoutube>
                        </Link>
                    </div>
                </nav>
            </footer>
            <p className="text-gray-500 text-center lg:-mt-10">Copyright © 2023 - All right reserved by DEV TOWN Industries Ltd.</p>
        </div>
    );
};

export default Footer;
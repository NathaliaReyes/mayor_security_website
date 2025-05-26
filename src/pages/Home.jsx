import React from 'react';
import { Button } from "@/components/ui/button";  // Asegúrate de importar tu componente de botón correctamente
import { Link } from 'react-router-dom';
import Image from '../assets/home/portadams.jpg';
import videoBanner2 from '@/assets/home/Mayor_Website.mp4';
import Map from '../components/map/Map';
import BannerServices from '@/components/home/BannerServices';
import '../styles/Home.css'; // Import the CSS file
import CarouselTestimonials from '@/components/home/Testimonial';
import FAQComponent from '@/components/home/FAQComponent';
import ProfessionalSecuritySection from '@/components/home/LearnMore';
// import TeamCard from '../components/home/professionalProfile';
// import GoogleReview from '@/components/home/GoogleReview';

const Home = () => {
    return (
        <>
            {/* <div className="hidden md:flex relative z-10 video-container mx-auto  justify-center">
                <video className="w-full h-auto flex" controls>
                    <source src={videoBanner} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}
            <div className='md:container inset-0' style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className=' inset-0 bg-black/90'>
                <div className=" relative z-10 justify-center md:py-4">
                    <video className="w-full md:h-96" controls>
                        <source src={videoBanner2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
            </div>
            {/* <img
                className='mx-auto h-60 md:h-72 w-screen'
                src={Image}
                alt="banner"
                loading="lazy"
                width="1920"
                height="1080" /> */}
            {/* <div className="content-container m-6 "> */}
            {/* <div > */}
            {/* <p className="lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-2">
                        At Mayor Security, your safety is our priority.
                        We specialize in providing comprehensive security solutions with armed and unarmed guards, as well as security vehicles with official logos for a visible and professional presence.
                        <br /><br />
                        We stand out as the #1 security company, thanks to our commitment to meeting each client’s specific needs with dedication, professionalism, and courage.
                        <br /><br />
                    </p> */}
            {/* <div className="flex justify-center items-center h-full">
                        <Link to="/services">
                            <Button className="m-2 lg:text-lg md:text-base sm:text-base bg-clearYellow text-black font-bold hover:bg-white hover:text-black hover:border hover:border-mainYellow hover:border-2 hover:shadow-lg hover:shadow-yellow-500/50">View Services</Button>
                        </Link>
                    </div> */}
            {/* <TeamCard /> */}
            {/* <p className="lg:text-xl md:text-lg sm:text-base mt-4 ml-2 mr-2 mb-4 text-center">
            Book your appointment via phone call or send us a text on
            <a href="https://wa.me/18134686878" target="_blank" rel="noopener noreferrer" className="underline text-green-500 hover:text-green-600"> WhatsApp. </a>
            <br />We are always ready to help!
          </p> */}
            {/* </div> */}
            {/* </div> */}
            <BannerServices />
            <FAQComponent />
            <ProfessionalSecuritySection />
            <Map />
            <CarouselTestimonials />
        </>
    );
}

export default Home;

import React from 'react';
import { Button } from "@/components/ui/button";  // Asegúrate de importar tu componente de botón correctamente
import { Link } from 'react-router-dom';
import Image from '../assets/home/portadams.jpg';
import Map from '../components/map/Map';
import BannerServices from '@/components/home/BannerServices';
import Personal from '@/components/home/Personal';
import '../styles/Home.css'; // Import the CSS file
import CarouselDefault from '../components/home/Testimonial';
// import TeamCard from '../components/home/professionalProfile';
// import GoogleReview from '@/components/home/GoogleReview';

const Home = () => {
    return (
        <>
            <img className='mx-auto' src={Image} alt="banner" style={{ width: '100%', height: '70vh', objectFit: 'fill', }} />
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
            <Map />
            <Personal />
            {/* <CarouselDefault /> */}
        </>
    );
}

export default Home;

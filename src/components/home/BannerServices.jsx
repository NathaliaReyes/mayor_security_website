import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images:
import Icon1 from '@/assets/home/guard.png';
import Icon2 from '@/assets/home/patrol.png';
import Icon3 from '@/assets/home/armedGuard.png';

// import { Button } from "@/components/ui/button";

const BannerServices = () => {
	useEffect(() => {
        AOS.init({ 
			duration: 1000,
			easing: 'ease-in-out',
		});
    }, []);
	return (
		<div className='gap-6 justify-content-center items-center text-center p-8' style={{ backgroundColor: '#ffde59' }}>
			<div className='text-center mb-6 md:mb-10 py-2'>
				<span className='lora600 font-bold text-2xl' style={{ textShadow: '0.5px 0.5px 0 #888, -0.5px -0.5px 0 #888, 0.5px -0.5px 0 #888, -0.5px 0.5px 0 #888' }}>How Can We Help You?</span>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 pb-4" >
				<div className="flex flex-col items-center mx-6 tracking-tight hover:bg-yellow-100 p-4 hover:shadow-lg rounded-xl transition duration-400 ease-in-out cursor-pointer">
					<img src={Icon1} alt="Icon Unarmed Guard" className="mb-5 md:mb-0 h-20 w-20 md:h-32 md:w-32"  data-aos="fade-down"/>
					<span id="targetId" className="roboto600 text-gray-800 font-extrabold text-lg mt-4">
						Unarmed Security Guards
					</span>
					<p className="roboto text-gray-900 mt-1 text-center text-sm font-bold">
						Our dedicated  security guards are the front-line protectors of your assets and peace of mind
					</p>
				</div>
				<div className="flex flex-col items-center mt-4 md:mt-0 mx-6 tracking-tight hover:bg-yellow-100 p-4 hover:shadow-lg rounded-xl transition duration-400 ease-in-out cursor-pointer">
					<img src={Icon2} alt="Icon Unarmed Guard" className="mb-5 md:mb-0 h-20 w-20 md:h-32 md:w-32" data-aos="fade-down"/>
					<span id="targetId" className="roboto600 text-gray-800 font-extrabold text-lg mt-4">
						Mobile Patrol with  Security Guards
					</span>
					<p className="roboto text-gray-900 mt-1 text-center text-sm font-bold">
						Our dedicated  security guards are the front line protectors of your assets and peace of mind
					</p>
				</div>
				<div className="flex flex-col items-center mt-4 md:mt-0 mx-6 tracking-tight hover:bg-yellow-100 p-4 hover:shadow-lg rounded-xl transition duration-400 ease-in-out cursor-pointer">
					<img src={Icon3} alt="Icon armed guard" className="mb-5 md:mb-0 h-20 w-20 md:h-32 md:w-32" data-aos="fade-down"/>
					<span id="targetId" className="roboto600 text-gray-800 font-extrabold text-lg mt-4 tracking-tight">
						Armed Security Guards
					</span>
					<p className="roboto text-gray-900 mt-1 text-center text-sm font-bold">
						For situations requiring an elevated level of protection, our armed security guard stand ready
					</p>
				</div>
			</div>
		</div>
	);
}

export default BannerServices;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images:
import Icon1 from '@/assets/home/guard.png';
import Icon2 from '@/assets/home/patrol.png';
import Icon3 from '@/assets/home/armedGuard.png';
import Banner from '@/components/Banner';

// import { Button } from "@/components/ui/button";
import "../../styles/Fonts.css";
import { useTranslation } from "react-i18next";

const BannerServices = () => {
	const { t } = useTranslation();
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
		});
	}, []);
	return (
		<>

			<Banner />
			<div className='md:container gap-6 justify-content-center items-center text-center p-8' style={{ backgroundColor: '#ffde59' }}>
				<div className='text-center  md:mb-10 py-2'>
					<span className='lora600 font-bold text-2xl' style={{ textShadow: '0.5px 0.5px 0 #888, -0.5px -0.5px 0 #888, 0.5px -0.5px 0 #888, -0.5px 0.5px 0 #888' }}>{t("help")}</span>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 pb-4" >
					<div className="flex flex-col items-center mx-6 tracking-tight hover:bg-yellow-100 p-4 hover:shadow-lg rounded-xl transition duration-400 ease-in-out cursor-pointer">
						<img src={Icon1} alt="Icon Unarmed Guard" className="mb-5 md:mb-0 h-20 w-20 md:h-32 md:w-32" />
						<span id="targetId" className="roboto600 text-gray-800 font-extrabold text-lg mt-4">
							{t("unarmed")}
						</span>
						<p className="roboto text-gray-900 mt-1 text-center text-sm font-bold">
							{t("unarmedText")}
						</p>
					</div>
					<div className="flex flex-col items-center mt-4 md:mt-0 mx-6 tracking-tight hover:bg-yellow-100 p-4 hover:shadow-lg rounded-xl transition duration-400 ease-in-out cursor-pointer">
						<img src={Icon2} alt="Icon Unarmed Guard" className="mb-5 md:mb-0 h-20 w-20 md:h-32 md:w-32" />
						<span id="targetId" className="roboto600 text-gray-800 font-extrabold text-lg mt-4">
							{t("patrol")}
						</span>
						<p className="roboto text-gray-900 mt-1 text-center text-sm font-bold">
							{t("patrolText")}
						</p>
					</div>
					<div className="flex flex-col items-center mt-4 md:mt-0 mx-6 tracking-tight hover:bg-yellow-100 p-4 hover:shadow-lg rounded-xl transition duration-400 ease-in-out cursor-pointer">
						<img src={Icon3} alt="Icon armed guard" className="mb-5 md:mb-0 h-20 w-20 md:h-32 md:w-32" />
						<span id="targetId" className="roboto600 text-gray-800 font-extrabold text-lg mt-4 tracking-tight">
							{t("armed")}
						</span>
						<p className="roboto text-gray-900 mt-1 text-center text-sm font-bold">
							{t("armedText")}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default BannerServices;
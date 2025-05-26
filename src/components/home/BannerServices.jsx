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

			
			<div className='md:container justify-content-center items-center text-center p-4 bg-mainYellow'>
				<div className='text-center  md:my-6 py-2 md:py-0'>
					<span className='lora600 font-bold text-xl md:text-2xl'>{t("help")}</span>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3" >
					<div className="flex flex-col items-center mx-1 md:mx-4 hover:bg-yellow-50 p-4 hover:shadow-md rounded-lg transition duration-400 ease-in-out cursor-pointer">
						<img src={Icon1} alt="Icon Unarmed Guard" className="mb-2 md:mb-0 h-20 w-20 md:h-24 md:w-24" />
						<span id="targetId" className="roboto600 text-gray-800 font-bold text-lg mt-2 md:mt-4 leading-tight">
							{t("unarmed")}
						</span>
						<p className="roboto text-gray-900 mt-1 md:mt-2 text-center text-sm">
							{t("unarmedText")}
						</p>
					</div>
					<div className="flex flex-col items-center mx-1 md:mx-4 hover:bg-yellow-50 p-4 hover:shadow-md rounded-lg transition duration-400 ease-in-out cursor-pointer">
						<img src={Icon2} alt="Icon Unarmed Guard" className="mb-2 md:mb-0 h-20 w-20 md:h-24 md:w-24" />
						<span id="targetId" className="roboto600 text-gray-800 font-bold text-lg mt-2 md:mt-4 leading-tight">
							{t("patrol")}
						</span>
						<p className="roboto text-gray-900 mt-1 md:mt-2 text-center text-sm">
							{t("patrolText")}
						</p>
					</div>
					<div className="flex flex-col items-center mx-1 md:mx-4 hover:bg-yellow-50 p-4 hover:shadow-md rounded-lg transition duration-400 ease-in-out cursor-pointer">
						<img src={Icon3} alt="Icon armed guard" className="mb-2 md:mb-0 h-20 w-20 md:h-24 md:w-24" />
						<span id="targetId" className="roboto600 text-gray-800 font-bold text-lg mt-2 md:mt-4 leading-tight">
							{t("armed")}
						</span>
						<p className="roboto text-gray-900 mt-1 md:mt-2 text-center text-sm">
							{t("armedText")}
						</p>
					</div>
				</div>
			</div>
			{/* <Banner /> */}
		</>
	);
}

export default BannerServices;
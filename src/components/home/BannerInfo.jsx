import React from 'react';
import bg from '../../assets/home/bg-rustic.jpg';
import { Button } from "@/components/ui/button";

const BannerInfo = () => {
    return (
        <div className='bg-gray-800 flex items-center justify-around px-4 py-2'>
            <div className='flex items-center'>
                <i className="fas fa-phone mr-2 text-white"></i>
                <span style={{ marginRight: '20px', color: 'white', textShadow: '0 0 2px white' }} className='text-xl'>
                    <strong><a href="tel:+17204682411"> +1 (720) 468-2411</a></strong>
                </span>
            </div>
            <a href="/Contact">
                <Button className='m-2 lg:text-lg text-base font-bold border-white border-2 hover:shadow-lg hover:shadow-black/90 hover:text-gray-300 hover:bg-red-700 bg-red-700'>
                    Get a Quote!
                </Button>
            </a>

        </div>
    );
}

export default BannerInfo;
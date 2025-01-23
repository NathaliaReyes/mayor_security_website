import React from 'react';
import bg from '../../assets/home/bg-rustic.jpg';
import { Button } from "@/components/ui/button"; 

const BannerInfo = () => {
    return (
        <div style={{
            position: 'relative',
            backgroundColor: '#1E1E1E',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <i className="fas fa-phone mr-2 text-white"></i>
                <span style={{ marginRight: '20px', color: 'white', textShadow: '0 0 2px white' }} className='text-xl'>
                    <strong><a href="tel:+17204682411"> +1 (720) 468-2411</a></strong>
                </span>
                <a href="http://harmony-wellness-spa-102368.square.site" target="_blank" rel="noopener noreferrer">
                    <Button className='m-2 lg:text-lg md:text-base sm:text-base  text-black font-bold hover:text-black hover:border-white hover:border-2 hover:shadow-lg hover:shadow-white/50' style={{ backgroundColor: '#C00F0C', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', textShadow: '0 0 2px #333' }}>
                        Get a Quote
                    </Button>
                </a>
            </div>

        </div>
    );
}

export default BannerInfo;
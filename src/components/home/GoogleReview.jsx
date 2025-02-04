import * as React from 'react';
import GoogleRev from '../../assets/home/google_rev.png';

export default function GoogleReview() {
    return (
        <a href="https://www.google.com/maps/place/Mayor+Security+LLC/@0,0,17z/data=!4m15!1m8!3m7!1s0x876c63dd643fa75b:0x82634622fac345f9!2sMayor+Security+LLC!8m2!3d39.7250648!4d-104.8111905!10e5!16s%2Fg%2F11lz_9yyvd!3m5!1s0x876c63dd643fa75b:0x82634622fac345f9!8m2!3d39.7250648!4d-104.8111905!16s%2Fg%2F11lz_9yyvd?hl=es&entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <img
                src={GoogleRev}
                alt="Google Review Mayor Security LLC"
                className='lg:h-64 lg:w-64 md:h-48 md:w-48 h-32 w-32 hover:shadow-lg rounded-full'
            />
        </a>
    );
}

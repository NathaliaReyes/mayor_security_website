import * as React from 'react';
import GoogleRev from '../../assets/home/google_rev.png';

export default function GoogleReview() {
    return (
        <a href="https://www.google.com/maps/place/Parking+lot,+15290+E+6th+Ave,+Aurora,+CO+80011/@39.7250829,-104.81177,19z/data=!3m1!4b1!4m6!3m5!1s0x876c631cb0816aa7:0xb1948f02ed63c5f!8m2!3d39.7250819!4d-104.8111263!16s%2Fg%2F11bw3xx0ym?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <img
                src={GoogleRev}
                alt="Google Review Harmony Wellness & Spa"
                className='lg:h-64 lg:w-64 md:h-48 md:w-48 h-32 w-32 hover:shadow-lg rounded-full'
            />
        </a>
    );
}

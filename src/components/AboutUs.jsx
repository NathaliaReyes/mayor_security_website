import React from 'react';
// Importa tus imágenes aquí
import badgesImage from '@/assets/images/patroll.jpg';
import officersImage from '@/assets/images/guardia2.jpeg';

const AboutUs = () => {
    return (
        <section id="aboutUs" className="pb-14 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-1 bg-yellow-400 mr-4"></div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Our Company
                        </h2>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* History Section */}
                    <div className="grid md:grid-cols-12 gap-0 overflow-hidden shadow-md">
                        {/* Imagen izquierda */}
                        <div className="md:col-span-5">
                            <img
                                src={badgesImage}
                                alt="Security badges and equipment"
                                className="w-full h-full object-cover min-h-64"
                            />
                        </div>

                        {/* Contenido derecho */}
                        <div className="md:col-span-7 p-8 md:p-12 flex items-center">
                            <div className="text-gray-900">
                                <h3 className="text-xl md:text-3xl font-bold">History</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Mayor Security was founded 5 years ago by a professional with over 10 years of experience in the security industry. 
                                    Our mission is to support and grow strong security teams. We take pride in hiring bilingual guards, which has made our company highly valued 
                                    by a diverse range of clients. Our growth is fueled by hard work, strong relationships, and a deep commitment to excellent service.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Success Section */}
                    <div className="grid md:grid-cols-12 gap-0 overflow-hidden shadow-md">
                        {/* Contenido izquierdo */}
                        <div className="md:col-span-7 p-8 md:p-12 flex items-center">
                            <div className="text-gray-900">
                                <h3 className="text-xl md:text-3xl font-bold mb-6">Success</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    We work as a team from the top-level management to the field officers;
                                    communication is what drives our day-to-day operations and keeps everyone in the
                                    loop. Our focus in the security industry is security patrol, security guards, and video
                                    surveillance. Our vehicle patrol division has grown significantly, and of course armed &
                                    unarmed guard services have continued to increase with new clients and continued
                                    client satisfaction.
                                </p>
                            </div>
                        </div>

                        {/* Imagen derecha */}
                        <div className="md:col-span-5 order-1 md:order-2">
                            <img
                                src={officersImage}
                                alt="Security officers walking together"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
import React from 'react';

const ProfessionalSecuritySection = () => {
    return (
        <section className="bg-gray-50 py-8 md:container px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header con línea amarilla */}
                <div className="flex items-center mb-4">
                    <div className="w-12 h-1 bg-yellow-400 mr-4"></div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        Mayor Security LLC
                    </h3>
                </div>

                {/* Título principal */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    Professional Security Services You Can Trust
                </h2>

                {/* Párrafo descriptivo */}
                <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-3xl">
                    We work as a team from the top-level management to the field officers; communication is what drives our 
                    day-to-day operations and keeps everyone in the loop. Our focus in the security industry is security 
                    patrol, security guards, and private surveillance. Our vehicle patrol division has grown significantly, and 
                    of course armed & unarmed guard services have continued to increase with new clients and continued 
                    client satisfaction.
                </p>

                {/* Características con iconos */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Primera característica */}
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-gray-800 font-medium text-lg">
                            Reliable, 24/7 protection for businesses
                        </span>
                    </div>

                    {/* Segunda característica */}
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-gray-800 font-medium text-lg">
                            Certified, trained, and highly experienced
                        </span>
                    </div>
                </div>

                {/* Botón Learn More */}
                <div>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-md transition-colors duration-200 flex items-center group">
                        Learn More
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalSecuritySection;
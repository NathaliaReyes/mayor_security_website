import React from 'react';
import FAQ from './FAQ';
import patrol from '@/assets/images/patrol.jpg';
import { useTranslation } from "react-i18next";

const FAQComponent = () => {
    const { t } = useTranslation();

    return (
        <div id="faq" className="max-w-7xl mx-auto px-4 py-8">
            {/* Layout para pantallas pequeñas (móvil): imagen primero */}
            <div className="block md:hidden">
                <img src={patrol} alt="Patrol" className="w-full h-64 object-cover mb-4" />
                <h2 className="text-xl md:text-2xl font-bold mb-4">{t("FAQ")}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {t("FAQDesc")}
                </p>
                <FAQ />
            </div>

            {/* Layout para pantallas medianas y grandes: dos columnas */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-12 md:items-stretch">
                {/* Columna izquierda: imagen */}
                <div className="relative">
                    <img
                        src={patrol}
                        alt="Mayor Security LLC patrol vehicle"
                        className="w-full h-full object-cover shadow-lg"
                    />
                </div>

                {/* Columna derecha: h2 + descripción + FAQ */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t("FAQ")}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {t("FAQDesc")}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <FAQ />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQComponent;
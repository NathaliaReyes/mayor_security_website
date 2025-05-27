import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Shield, Users, Building, Calendar, Award, Phone, Mail, MapPin, ChevronRight, Menu, X, Lock, Briefcase, ShieldCheck } from 'lucide-react';
// import InstagramButtonIcon from "@/components/icons/instagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import GoogleMapsIcon from "@/components/icons/GoogleIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logo from '@/assets/logo/logo.png';
// import '../styles/Footer.css';
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const sectionConfig = {
    'home': { id: 'logo', path: '/' },
    'about': { id: 'aboutUs', path: '/About' },
    'services': { id: 'services', path: '/Services' },
    'industries': { id: 'industries', path: '/Services' },
    'faq': { id: 'faq', path: '/FAQ' },
    'contact': { id: 'contact', path: '/Contact' },
    'careers': { id: 'careers', path: '/Contact' },
  };

  // Función genérica mejorada
  const handleSectionClick = (sectionKey) => (e) => {
    e.preventDefault();

    const config = sectionConfig[sectionKey];
    if (!config) return;

    const { id, path } = config;

    // Si estamos en la página correcta, hacer scroll
    if (location.pathname === path) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navegar a la página correcta y luego hacer scroll
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-6 md:container">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="logo" className='md:h-10 md:w-10 h-8 w-8 mr-2'></img>
              <span className="font-bold text-xl">MAYOR SECURITY LLC</span>
            </div>
            <p className="mb-4">{t("FooterDesc")}</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61558868641226" target="_blank"
                rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a
                href="https://wa.me/17204682411"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
              <a
                href="tel:+17204682411"
                className="text-blue-500 hover:text-blue-400"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </a>

            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleSectionClick('home')}
                  className="hover:text-blue-300 cursor-pointer bg-transparent border-none text-white text-left p-0"
                >
                  {t("home")}
                </button>
              </li>
              <li>
                <button
                  onClick={handleSectionClick('about')}
                  className="hover:text-blue-300 cursor-pointer bg-transparent border-none text-white text-left p-0"
                >
                  {t("about")}
                </button>
              </li>
              <li><a href="#" className="hover:text-blue-300">Services</a></li>
              <li><a href="#" className="hover:text-blue-300">Industries</a></li>
              <li>
                <button
                  onClick={handleSectionClick('careers')}
                  className="hover:text-blue-300 cursor-pointer bg-transparent border-none text-white text-left p-0"
                >
                  {t("careers")}
                </button>
              </li>
              <li>
                <button
                  onClick={handleSectionClick('contact')}
                  className="hover:text-blue-300 cursor-pointer bg-transparent border-none text-white text-left p-0"
                >
                  {t("contact")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Armed Security</a></li>
              <li><a href="#" className="hover:text-blue-300">Unarmed Security</a></li>
              <li><a href="#" className="hover:text-blue-300">Event Security</a></li>
              <li><a href="#" className="hover:text-blue-300">Loss Prevention</a></li>
              <li><a href="#" className="hover:text-blue-300">Executive Protection</a></li>
              <li><a href="#" className="hover:text-blue-300">Security Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-blue-400" />
                <span>15290 E 6th Ave, Aurora, CO 80011</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-blue-400" />
                <span>+1 (720) 468-2411</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-blue-400" />
                <span>contact@mayorsecurity.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="m-3 text-center text-gray-200 text-xs opacity-50">&copy; {new Date().getFullYear()} MAYOR SECURITY LLC. {t("allRights")} | <a href="#" className="hover:text-blue-300">Privacy Policy</a> | <a href="#" className="hover:text-blue-300">Terms of Service</a></p>
          <p className=" text-center text-gray-200 text-xs opacity-50" style={{ fontSize: '8px' }}>{t("madeWithLove")}
            <a href="https://silviareyes.netlify.app/" target="_blank" rel="noopener noreferrer" className='underline-link'> SR</a>
          </p>
          <p className="m-5 text-center text-gray-200 text-xs opacity-50"></p>
        </div>
      </div>
    </footer>
    // <footer className="bottom-0 w-full flex flex-col items-center justify-center p-3 bg-foreground">
    //   <div>
    //     <p className="m-3 text-center text-gray-200 text-xs opacity-50">{t("connectWithUs")}</p>
    //   </div>
    //   <div className="flex gap-4">
    //     <WhatsAppIcon />
    //     <GoogleMapsIcon />
    //     <FacebookIcon />
    //     {/* <LinkedinButtonIcon /> */}
    //   </div>
    //   <div>
    //     <p className="m-3 text-center text-gray-200 text-xs opacity-50">© Mayor Security, LLC. {t("allRights")}</p>
    //     <p className=" text-center text-gray-200 text-xs opacity-50" style={{ fontSize: '8px' }}>{t("madeWithLove")}
    //       <a href="https://silviareyes.netlify.app/" target="_blank" rel="noopener noreferrer" className='underline-link'> SR</a>
    //     </p>
    //     <p className="m-5 text-center text-gray-200 text-xs opacity-50">{t("privacyPolicy")}</p>
    //   </div>

    // </footer>
  );
}

export default Footer;

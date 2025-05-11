import React from 'react';
// import InstagramButtonIcon from "@/components/icons/instagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import GoogleMapsIcon from "@/components/icons/GoogleIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
// import '../styles/Footer.css';
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bottom-0 w-full flex flex-col items-center justify-center p-3 bg-foreground">
      <div>
        <p className="m-3 text-center text-gray-200 text-xs opacity-50">{t("connectWithUs")}</p>
      </div>
      <div className="flex gap-4">
        <WhatsAppIcon />
        <GoogleMapsIcon />
        <FacebookIcon />
        {/* <LinkedinButtonIcon /> */}
      </div>
      <div>
        <p className="m-3 text-center text-gray-200 text-xs opacity-50">© Mayor Security, LLC. {t("allRights")}</p>
        <p className=" text-center text-gray-200 text-xs opacity-50" style={{ fontSize: '8px' }}>{t("madeWithLove")}
          <a href="https://silviareyes.netlify.app/" target="_blank" rel="noopener noreferrer" className='underline-link'> SR</a>
        </p>
        <p className="m-5 text-center text-gray-200 text-xs opacity-50">{t("privacyPolicy")}</p>
      </div>

    </footer>
  );
}

export default Footer;

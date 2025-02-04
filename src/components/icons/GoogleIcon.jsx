import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from "@/components/ui/button";  // Asegúrate de importar tu componente de botón correctamente

const GoogleMapsIcon = () => (
  <a href="https://www.google.com/maps/place/Mayor+Security+LLC/@0,0,17z/data=!4m15!1m8!3m7!1s0x876c63dd643fa75b:0x82634622fac345f9!2sMayor+Security+LLC!8m2!3d39.7250648!4d-104.8111905!10e5!16s%2Fg%2F11lz_9yyvd!3m5!1s0x876c63dd643fa75b:0x82634622fac345f9!8m2!3d39.7250648!4d-104.8111905!16s%2Fg%2F11lz_9yyvd?hl=es&entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
    <Button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600">
      <FaMapMarkerAlt className="text-white" />
    </Button>
  </a>
);

export default GoogleMapsIcon;
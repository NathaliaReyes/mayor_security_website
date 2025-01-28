import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from "@/components/ui/button";  // Asegúrate de importar tu componente de botón correctamente

const GoogleMapsIcon = () => (
  <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
    <Button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600">
      <FaMapMarkerAlt className="text-white" />
    </Button>
  </a>
);

export default GoogleMapsIcon;
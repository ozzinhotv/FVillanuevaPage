import React from 'react';
import MapComponent from '../components/MapComponent';
import '../../src/styles/Fundacion.css';
import { useTranslation } from "react-i18next";


function Fundacion() {
  const { t } = useTranslation(['homePage']);
  return (
    <div className="fundacion">
      <h1>{t("name")}</h1>
      <div className="contact-info">
        <h2>Contactos</h2>
        <p>Email: <a href="mailto:fcmvillanueva@gmail.com">fcmvillanueva@gmail.com</a></p>
        <p>Dirección: Avenida Los Jabillos. Quinta Caoma # 27. La Florida</p>
        <p>Teléfono: +58 212 7314428</p>
        <p>Ubicación: Caracas, Venezuela</p>
      </div>
      <div className="team-info">
        <h2>Nosotros</h2>
        <p><strong>Paulina Villanueva - Directora</strong></p>
        <p>Email: <a href="mailto:paulinava@gmail.com">paulinava@gmail.com</a></p>
        <p><strong>Adriana Villanueva - Subdirectora</strong></p>
        <p>Email: <a href="mailto:adrianavillanuevag@gmail.com">adrianavillanuevag@gmail.com</a></p>
        <p><strong>Cecilia Castrillo - Asistente de Dirección</strong></p>
        <p>Email: <a href="mailto:ceci.castrillo@gmail.com">ceci.castrillo@gmail.com</a></p>
        <p>Teléfono: 0412-5145961</p>
      </div>
      <MapComponent />
    </div>
  );
}

export default Fundacion;

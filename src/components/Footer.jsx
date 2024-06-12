import React from "react";
import logo_Footer from "../../src/assets/logoBW.png";
import "../../src/styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-img">
                <img className="logo" alt="Logo" src={logo_Footer}/>
            </div>
                <div className="contact">
                    <h4>Contactos</h4>
                    <ul>
                        <p>fcmvillanueva@gmail.com</p>
                        <p>Avenida Los Jabillos. Quinta Caoma # 27. La Florida</p>
                        <p>Teléfono. 58 212 7314428</p>
                        <p>Caracas – Venezuela</p>
                    </ul>
                </div>
            <div/>    
            <div className="team">
                <h4>Nosotros</h4>
                <ul>
                    <li>Paulina Villanueva - Directora</li>
                    <p>paulinava@gmail.com</p>
                    <li>Adriana Villanueva - Subdirectora</li>
                    <p>adrianavillanuevag@gmail.com</p>
                    <li>Cecilia Castrillo - Asistente de Dirección</li>
                    <p>ceci.castrillo@gmail.com - 0412-5145961</p>
                </ul>     
            </div>
        </div>
    </footer>
  )
}

export default Footer;

import React, { useState } from "react";
import "../../src/styles/Vida.css";
import vidaImg from "../../src/assets/Vida.png";
import bano from "../../src/assets/bañoCaoma.png";
import croquis from "../../src/assets/croquisGif.gif";
import ejemplo1 from "../../src/assets/ejemplo1.webp";
import ejemplo2 from "../../src/assets/ejemplo2.jpg";
import bebeprueba from "../../src/assets/bebe-prueba.jpg";
import { useTranslation } from "react-i18next";

function Vida() {
    const [expanded, setExpanded] = useState(null);

    const { t } = useTranslation(['vida']);

    const toggleExpand = (index) => {
        const element = document.getElementById(`timeline-period-${index}`);
    
        if (expanded === index) {
            // 🔹 Si estamos cerrando el período, solo aseguramos que se mantenga en la misma posición
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (!entry.isIntersecting) {
                        element.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                    observer.disconnect();
                },
                { threshold: 0.5 }
            );
    
            observer.observe(element);
            setExpanded(null);
        } else {
            setExpanded(index);            
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100); 
        }
    };
    
    

    const periods = [
        { 
            period: "1900-1928", 
            subsections: [
                {
                    subtitle: "1900",
                    description: t("1900"),
                    images : [{src: bebeprueba, className: "bebeprueba"}]
                },
                {
                    subtitle: "1920-1928",
                    description: t("1920-1928"),
                    images: [
                        { src: bano, className: "bano" },
                        { src: croquis, className: "croquis" }
                    ]
                },
                {
                    subtitle: "1927",
                    description: t("1927"),
                    images: [
                        { src: croquis, className: "croquis" },
                        { src: bano, className: "bano" },
                        { src: ejemplo1, className: "ejemplo1" }
                    ]
                },
                {
                    subtitle: "1928",
                    description: t("1928"),
                    images: [
                        { src: croquis, className: "croquis" },
                        { src: bano, className: "bano" },
                        { src: ejemplo1, className: "ejemplo1" },
                        { src: ejemplo2, className: "ejemplo2" }
                    ]
                }
            ]
        },
        { 
            period: "1929-1940", 
            subsections: [
                {
                    subtitle: "1929",
                    description: t("1929")
                },
                {
                    subtitle: "1930",
                    description: t("1930")
                },
                {
                    subtitle: "1932-1933",
                    description: t("1932-1933")
                },
                {
                    subtitle: "1934",
                    description: t("1934")
                },
                {
                    subtitle: "1935",
                    description: t("1935")
                },
                {
                    subtitle: "1936",
                    description: t("1936")
                },
                {
                    subtitle: "1937",
                    description: t("1937")
                },
                {
                    subtitle: "1938",
                    description: t("1938")
                },
                {
                    subtitle: "1939",
                    description: t("1939")
                },
                {
                    subtitle: "1940",
                    description: t("1940")
                },
            ]
        },
        { 
            period: "1941-1949", 
            subsections: [
                {
                    subtitle: "1941",
                    description: t("1941")
                },
                {
                    subtitle: "1942",
                    description: t("1942")
                },
                {
                    subtitle: "1943",
                    description: t("1943")
                },
                {
                    subtitle: "1944",
                    description: t("1944")
                },
                {
                    subtitle: "1945",
                    description: t("1945")
                },
                {
                    subtitle: "1946",
                    description: t("1946")
                },
                {
                    subtitle: "1947",
                    description: t("1947")
                },
                {
                    subtitle: "1948",
                    description: t("1948")
                },
                {
                    subtitle: "1949",
                    description: t("1949")
                }
            ]
        },
        { 
            period: "1950-1958", 
            subsections: [
                {
                    subtitle: "1950",
                    description: t("1950")
                },
                {
                    subtitle: "1951",
                    description: t("1951")
                },
                {
                    subtitle: "1952",
                    description: t("1952")
                },
                {
                    subtitle: "1953",
                    description: t("1953")
                },
                {
                    subtitle: "1954",
                    description: t("1954")
                },
                {
                    subtitle: "1955",
                    description: t("1955")
                },
                {
                    subtitle: "1956",
                    description: t("1956")
                },
                {
                    subtitle: "1957",
                    description: t("1957")
                },
                {
                    subtitle: "1958",
                    description: t("1958")
                }
            ]
        },
        { 
            period: "1959-1969", 
            subsections:[
                {
                    subtitle: "1959",
                    description: t("1959")
                },
                {
                    subtitle: "1960",
                    description: t("1960")
                },
                {
                    subtitle: "1961",
                    description: t("1961")
                },
                {
                    subtitle: "1962",
                    description: t("1962")
                },
                {
                    subtitle: "1963",
                    description: t("1963")
                },
                {
                    subtitle: "1964",
                    description: t("1964")
                },
                {
                    subtitle: "1965",
                    description: t("1965")
                },
                {
                    subtitle: "1966",
                    description: t("1966")
                },
                {
                    subtitle: "1967",
                    description: t("1967")
                },
                {
                    subtitle: "1968",
                    description: t("1968")
                },
                {
                    subtitle: "1969",
                    description: t("1969")
                },
            ]},
        { period: "1970-1975",
        subsections:[
            {
                subtitle: "1970",
                description: t("1970")
            },
            {
                subtitle: "1971",
                description: t("1971")
            },
            {
                subtitle: "1972",
                description: t("1972")
            },
            {
                subtitle: "1973",
                description: t("1973")
            },
            {
                subtitle: "1974",
                description: t("1974")
            },
            {
                subtitle: "1975",
                description: t("1975")
            },
            
        ]
         },
    ];

    return (
        <div className="vida-page">
            <div className="carousel-container">
                <div className="carousel-slide">
                    <img src={bano} alt="First slide" />
                    <img src={croquis} alt="Second slide" />
                    <img src={vidaImg} alt="Third slide" />
                    <img src={ejemplo1} alt="Fourth slide" />
                    <img src={ejemplo2} alt="Fifth slide" />
                </div>
            </div>
            <div className="vida-container">
                <header>
                    <h1>Carlos Raul Villanueva</h1>
                    <p>Londres - 1900.</p>
                    <p>Caracas - 1975.</p>
                </header>
                <div className="timeline">
                    {periods.map((item, index) => (
                        <div 
                        key={index} 
                        id={`timeline-period-${index}`} 
                        className={`timeline-period ${expanded === index ? 'expanded' : ''}`} 
                        onClick={() => toggleExpand(index)}
                    >
                            <h2 className={expanded === index ? 'selected' : ''}>{item.period}</h2>
                            {expanded === index && item.subsections.map((subsection, subIndex) => (
                                <div key={subIndex} className="subsection">
                                    <h3>{subsection.subtitle}</h3>
                                    <p>{subsection.description}</p>
                                    {subsection.images && (
                                        <div className={`subsection-images ${subsection.images.length > 2 ? "multiple-images" : ""}`}>
                                            {subsection.images.map((image, imgIndex) => (
                                                <img 
                                                    key={imgIndex} 
                                                    src={image.src} 
                                                    alt={`${subsection.subtitle} - image ${imgIndex + 1}`} 
                                                    className={`subsection-img ${image.className}`} 
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
}

export default Vida;





import React, { useState } from "react";
import "../../src/styles/Vida.css";
import "../../src/styles/index.css";
import vidaImg from "../../src/assets/Vida.png";

function Vida() {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const periods = [
        { period: "1900-1928", description: "Descripción del periodo 1..." },
        { period: "1929-1940", description: "Descripción del periodo 2..." },
        { period: "1941-1949", description: "Descripción del periodo 3..." },
        { period: "1950-1958", description: "Descripción del periodo 4..." },
        { period: "1959-1969", description: "Descripción del periodo 5..." },
        { period: "1970-1975", description: "Descripción del periodo 6..." },
        { period: "1976-2000", description: "Descripción del periodo 7..." },
    ];

    return (
        <div className="vida-container">
            <header>
                <h1 className="fs-1 fw-bolder">Carlos Raul Villanueva</h1>
                <img src={vidaImg} alt="Fotografía del Arquitecto" />
                <p>Breve introducción sobre la vida y contribuciones del arquitecto.</p>
            </header>
            <div className="timeline">
                {periods.map((item, index) => (
                    <div
                        key={index}
                        className={`timeline-period ${expanded === index ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(index)}
                    >
                        <h2 className={expanded === index ? 'selected' : ''}>{item.period}</h2>
                        {expanded === index && <p>{item.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Vida;
import React, { useState } from "react";
import Modal from 'react-modal';
import '../../src/styles/Escritos.css';
import bano from "../../src/assets/bañoCaoma.png";
import croquis from "../../src/assets/croquisGif.gif";
import ejemplo1 from "../../src/assets/ejemplo1.webp";
import ejemplo2 from "../../src/assets/ejemplo2.jpg";
import vidaImg from "../../src/assets/Vida.png";

Modal.setAppElement('#root');

function Escritos() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEscrito, setSelectedEscrito] = useState(null);

    const escritos = [
        {
            title: "Encuesta de los alumnos de arquitectura sobre tradición",
            author: "Autor 1",
            date: "2024-07-01",
            summary: "Resumen del Encuesta de los alumnos de arquitectura sobre tradición...",
            content: "Contenido completo del Encuesta de los alumnos de arquitectura sobre tradición...",
            type: "articulo"
        },
        {
            title: "Reflexiones Personales",
            author: "Autor 2",
            date: "2024-07-02",
            summary: "Resumen de la Reflexiones Personales...",
            content: "Contenido completo de Reflexiones Personales...",
            type: "conferencia"
        },
        {
            title: "La Arquitectura",
            author: "Autor 2",
            date: "2024-07-02",
            summary: "Resumen de La Arquitectura...",
            content: "Contenido completo de La Arquitectura...",
            type: "conferencia"
        },
        {
            title: "Caracas de ayer",
            author: "Autor 2",
            date: "2024-07-02",
            summary: "Resumen de la Caracas de ayer...",
            content: "Contenido completo de Caracas de ayer...",
            type: "escrito"
        },
        {
            title: "Templos coloniales",
            author: "Autor 2",
            date: "2024-07-02",
            summary: "Resumen de la Templos coloniales...",
            content: "Contenido completo de Templos coloniales...",
            type: "escrito"
        },
        // ... más escritos
    ];

    const filteredEscritos = escritos.filter(escrito =>
        (filter === 'all' || escrito.type === filter) &&
        (escrito.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         escrito.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const openModal = (escrito) => {
        setSelectedEscrito(escrito);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedEscrito(null);
    };

    return (
        <div>
            <div className="container mt-4">
                <div className="header d-flex justify-content-between align-items-center">
                    <h1 className="mb-0">Biblioteca de Escritos</h1>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Buscar escritos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <select
                            className="form-select"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="all">Todos</option>
                            <option value="articulo">Artículos</option>
                            <option value="conferencia">Conferencias</option>
                            <option value="escrito">Escritos</option>
                        </select>
                    </div>
                </div>
                
                <div className="row">
                    {filteredEscritos.map((escrito, index) => (
                        <div key={index} className={filter !== 'all' ? "col-12 mb-3" : "col-md-6 mb-3"}>
                            <div className="card h-100">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{escrito.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{escrito.author} - {escrito.date}</h6>
                                    <p className="card-text">{escrito.summary}</p>
                                    <a className="btn btn-primary mt-auto" onClick={() => openModal(escrito)}>Leer más</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Escritos;

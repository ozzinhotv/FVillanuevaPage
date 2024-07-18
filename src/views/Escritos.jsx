import React, { useState } from "react";
import '../../src/styles/Escritos.css';

function Escritos() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const escritos = [
        {
            title: "Encuesta de los alumnos de arquitectura sobre tradición",
            author: "Autor 1",
            date: "2024-07-01",
            summary: "Resumen del Encuesta de los alumnos de arquitectura sobre tradición...",
            type: "articulo"
        },
        {
            title: "Reflexiones Personales",
            author: "Autor 2",
            date: "2024-07-02",
            summary: "Resumen de la Reflexiones Personales...",
            type: "conferencia"
        },
        {
            title: "La Arquitectura",
            author: "Autor 2",
            date: "2024-07-02",
            summary: "Resumen de La Arquitectura...",
            type: "conferencia"
        },
        {
            title: "Caracas de ayer",
            author: "Autor 2",
            date: "2024-07-02",
            summary: "Resumen de la Caracas de ayer...",
            type: "escrito"
        },
        {
            title: "Templos coloniales",
            author: "Autor 2",
            date: "2024-07-02",
            summary: "Resumen de la Templos coloniales...",
            type: "escrito"
        },
        // ... más escritos
    ];

    const filteredEscritos = escritos.filter(escrito => 
        (filter === 'all' || escrito.type === filter) && 
        (escrito.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         escrito.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="container mt-4">
            <h1 className="text-center">Biblioteca de Escritos</h1>
            <div className="row mb-3">
                <div className="col-md-8">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Buscar escritos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
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
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{escrito.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{escrito.author} - {escrito.date}</h6>
                                <p className="card-text">{escrito.summary}</p>
                                <a href="#" className="card-link">Leer más</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Escritos;

import React, { useState } from 'react';
import GalleryItem from '../components/GalleryItem';
import FilterButtons from '../components/FilterButtons';
import '../../src/styles/Obra.css';
import ejemplo1 from "../../src/assets/ejemplo1.webp";
import ejemplo2 from "../../src/assets/ejemplo2.jpg";
import ejemplo3 from "../../src/assets/ejemplo3.jpg";
import vidaImg from "../../src/assets/Vida.png";

const works = [
  { id: 1, category: 'casas', title: 'Quinta Caoma', imgSrc: ejemplo1, description: 'Descripción de Casa 1' },
  { id: 2, category: 'casas', title: 'Sotavento', imgSrc: ejemplo1, description: 'Descripción de Casa 2' },
  { id: 3, category: 'museos', title: 'Museo de Bellas Artes', imgSrc: ejemplo2, description: 'Descripción de Museo 1' },
  { id: 4, category: 'museos', title: 'Museo Soto', imgSrc: ejemplo2, description: 'Descripción de Museo 2' },
  { id: 5, category: 'vivienda-publica', title: 'Reurbanizacion el Silencio', imgSrc: 'https://via.placeholder.com/300x200', description: 'Descripción de Vivienda Pública 1' },
  { id: 6, category: 'vivienda-publica', title: 'Unidad Residencial El Paraiso', imgSrc: 'https://via.placeholder.com/300x200', description: 'Descripción de Vivienda Pública 2' },
  { id: 7, category: 'vivienda-publica', title: 'Urbanizacion 23 de de Enero', imgSrc: 'https://via.placeholder.com/300x200', description: 'Descripción de Vivienda Pública 3' },
  { id: 8, category: 'ciudad-universitaria', title: 'Conjunto', imgSrc: ejemplo3, description: 'Descripción de Ciudad Universitaria 1' },
  { id: 9, category: 'ciudad-universitaria', title: 'Hospital Clínico', imgSrc: ejemplo3, description: 'Descripción de Ciudad Universitaria 2' },
  { id: 10, category: 'ciudad-universitaria', title: 'Conujnto Central', imgSrc: ejemplo3, description: 'Descripción de Ciudad Universitaria 3' },
  { id: 11, category: 'ciudad-universitaria', title: 'Plaza del Rectorado', imgSrc: ejemplo3, description: 'Descripción de Ciudad Universitaria 4' },
  { id: 12, category: 'ciudad-universitaria', title: 'Plaza Cubierta y Paraninfo', imgSrc: ejemplo3, description: 'Descripción de Ciudad Universitaria 5' },
  { id: 13, category: 'ciudad-universitaria', title: 'Aula Magna', imgSrc: ejemplo3, description: 'Descripción de Ciudad Universitaria 6' },
  { id: 14, category: 'ciudad-universitaria', title: 'Sala de Conciertos', imgSrc: ejemplo3, description: 'Descripción de Ciudad Universitaria 7' },
  { id: 15, category: 'ciudad-universitaria', title: 'Bibloteca Central', imgSrc: ejemplo3, description: 'Descripción de Ciudad Universitaria 8' },
  { id: 16, category: 'ciudad-universitaria', title: 'Facultad de Humanidades', imgSrc: ejemplo3, description: 'Descripción de Ciudad Universitaria 9' },
  { id: 17, category: 'ciudad-universitaria', title: 'Facultad de Arquitectura', imgSrc: vidaImg, description: 'Descripción de Ciudad Universitaria 10' },
  { id: 18, category: 'ciudad-universitaria', title: 'Facultad de Odontología', imgSrc: vidaImg, description: 'Descripción de Ciudad Universitaria 11' },
  { id: 19, category: 'ciudad-universitaria', title: 'Escuela de Ingeniería y Petróleo', imgSrc: vidaImg, description: 'Descripción de Ciudad Universitaria 12' },
  { id: 20, category: 'ciudad-universitaria', title: 'Pabellón de Montreal', imgSrc: vidaImg, description: 'Descripción de Ciudad Universitaria 13' },
  { id: 21, category: 'ciudad-universitaria', title: 'Síntesis de Las Artes', imgSrc: vidaImg, description: 'Descripción de Ciudad Universitaria 14' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredWorks = filter === 'all' ? works : works.filter(work => work.category === filter);

  return (
    <div>
      <div className="gallery-header">
        <h1 fs-1 fw-bolder>Obras del Arquitecto</h1>
        <FilterButtons setFilter={setFilter} />
      </div>
      <div className="gallery">
        {filteredWorks.map(work => (
          <GalleryItem key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

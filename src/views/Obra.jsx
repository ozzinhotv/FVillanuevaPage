import React, { useState } from 'react';

const Obras = () => {
  // Estado para manejar el año seleccionado
  const [year, setYear] = useState('Todos');

  // Función para manejar el cambio de año
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  // Array de obras con su categoría y año
  const obras = [
    { id: 1, titulo: 'Casa Moderna', categoria: 'Casas', year: 2020 },
    { id: 2, titulo: 'Museo de Arte', categoria: 'Museos', year: 2018 },
    { id: 3, titulo: 'Vivienda Popular', categoria: 'Vivienda Publica', year: 2019 },
    { id: 4, titulo: 'Ciudad Universitaria', categoria: 'Ciudad Universitaria', year: 2021 },
    { id: 5, titulo: 'Sintesis de las Artes', categoria: 'Sintesis de las Artes', year: 2017 },
  ];

  // Filtrar las obras según el año seleccionado
  const obrasFiltradas = obras.filter((obra) => {
    return year === 'Todos' || obra.year === parseInt(year);
  });

  return (
    <div className="Obras">
      <div className="container mt-4 mb-4">
        <h1>Obras</h1>

        {/* Botón Dropdown para seleccionar el año */}
        <div className="dropdown mb-3">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownYear" data-bs-toggle="dropdown" aria-expanded="false">
            Filtrar por Año
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownYear">
            <li><button className="dropdown-item" onClick={() => setYear('Todos')}>Todos</button></li>
            <li><button className="dropdown-item" onClick={() => setYear('2021')}>2021</button></li>
            <li><button className="dropdown-item" onClick={() => setYear('2020')}>2020</button></li>
            <li><button className="dropdown-item" onClick={() => setYear('2019')}>2019</button></li>
            <li><button className="dropdown-item" onClick={() => setYear('2018')}>2018</button></li>
            <li><button className="dropdown-item" onClick={() => setYear('2017')}>2017</button></li>
          </ul>
        </div>

        {/* Mostrar obras filtradas */}
        <div className="obras-list">
          {obrasFiltradas.length > 0 ? (
            obrasFiltradas.map((obra) => (
              <div key={obra.id} className="obra-item">
                <h3>{obra.titulo}</h3>
                <p>Categoría: {obra.categoria}</p>
                <p>Año: {obra.year}</p>
              </div>
            ))
          ) : (
            <p>No hay obras para el año seleccionado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Obras;

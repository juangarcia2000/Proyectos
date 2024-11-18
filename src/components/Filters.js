import React from 'react';

function Filters({ updateFilters }) {
  const handleChange = (e) => {
    updateFilters({ [e.target.name]: e.target.value });
  };

  return (
    <div className="filters">
      <select name="status" onChange={handleChange}>
        <option value="">todos los estados</option>
        <option value="Alive">vivo</option>
        <option value="Dead">muerto</option>
        <option value="unknown">desconocido</option>
      </select>
      <select name="gender" onChange={handleChange}>
        <option value="">todos los generos</option>
        <option value="Male">masculino</option>
        <option value="Female">femenino</option>
        <option value="unknown">desconocido</option>
      </select>
      <select name="species" onChange={handleChange}>
        <option value="">todas las especies</option>
        <option value="Human">humano</option>
        <option value="Alien">alien</option>
      </select>
    </div>
  );
}

export default Filters;

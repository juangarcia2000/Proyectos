import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);            
  const [filteredCharacters, setFilteredCharacters] = useState([]);  
  const [filters, setFilters] = useState({
    status: '',
    gender: '',
    species: '',
  });

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const applyFilters = () => {
    let updatedCharacters = characters;

    if (filters.status) {
      updatedCharacters = updatedCharacters.filter(char => char.status === filters.status);
    }
    if (filters.gender) {
      updatedCharacters = updatedCharacters.filter(char => char.gender === filters.gender);
    }
    if (filters.species) {
      updatedCharacters = updatedCharacters.filter(char => char.species === filters.species);
    }

    setFilteredCharacters(updatedCharacters);
  };

  useEffect(applyFilters, [filters]);

  const updateFilters = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  return (
    <div className="App">
      <h1> Personajes de Rick and Morty  </h1>
      <Filters updateFilters={updateFilters} />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;

import React from 'react';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Especie: {character.species}</p>
      <p>Genero: {character.gender}</p>
      <p>Estado: {character.status}</p>
    </div>
  );
}

export default CharacterCard;

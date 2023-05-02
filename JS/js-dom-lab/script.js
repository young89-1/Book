let pokemon = [
    {
      name: "Pikachu",
      type: "Electric",
      power: 55,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    {
      name: "Charmander",
      type: "Fire",
      power: 52,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
    },
    {
      name: "Squirtle",
      type: "Water",
      power: 48,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
    {
      name: "Bulbasaur",
      type: "Grass",
      power: 49,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
      name: "Mewtwo",
      type: "Psychic",
      power: 106,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
    },
    {
      name: "Eevee",
      type: "Normal",
      power: 55,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
    },
    {
      name: "Gyarados",
      type: "Water",
      power: 125,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"
    },
    {
      name: "Dragonite",
      type: "Dragon",
      power: 134,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"
    }
  ];

  // console.log(pokemon);

  const pokemonList = document.getElementById('pokemon-list');
  
//create an li element
//add the inner html for img, name & power
//add it to the UL DOM as a child

function createPokemonList() {
    pokemon.forEach((item) => {
        //console.log(item);
    const tempLI = document.createElement("li");
    tempLI.innerHTML = `
    <img src=${item.image} alt=${item.name}></img>
    <span>${item.name} | Type: ${item.type} | Power: ${item.power}</span>
        `;

    pokemonList.appendChild(tempLI);
    
    });
}

createPokemonList();


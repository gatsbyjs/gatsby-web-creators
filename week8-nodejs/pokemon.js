const https = require('https');

function getPokeInfo(pokemonName) {
  https.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName, (response) => {
    let body = "";
    response.on('data', (data) => {
      body += data.toString();
    });

    response.on('end', () => {
      const pokemon = JSON.parse(body);
      console.log(`${pokemon.name} is Pokemon #${pokemon.id}!`);
    })
  }).on('error', (error) => {
    console.log("Check to make sure you spelled that pokeName correctly!")
  })
}

const pokemon = process.argv.slice(2);

pokemon.forEach(getPokeInfo);
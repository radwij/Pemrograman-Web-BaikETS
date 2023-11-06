class WorldCurrency {
    constructor(apiURL) {
        this.apiURL = apiURL;

        this.pokemonNames = [
            'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon',
            'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie',
            'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill',
            'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate'
        ];

        this.pokemonData = {};

        this.getPokemonData();
    }

    async getPokemonData() {
        try {
            const response = await fetch(this.apiURL);
            const data = await response.json();

            for (let i = 0; i < this.pokemonNames.length; i++) {
                const pokemonName = this.pokemonNames[i];
                this.pokemonData[pokemonName] = data.results[i].url;
            }

            this.updateText();
        } catch (error) {
            console.error(error);
        }
    }

    updateText() {
        for (const pokemonName of this.pokemonNames) {
            const pokemonBtn = document.getElementById(`${pokemonName}-btn`);
            pokemonBtn.href = this.pokemonData[pokemonName];
        }
    }
}

const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

const currency = new WorldCurrency(apiURL);

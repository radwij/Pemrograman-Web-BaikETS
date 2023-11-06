class WorldCurrency {
    constructor(apiURL) {
        this.apiURL = apiURL;
        this.pokemonContainer = document.getElementById('pokemon-container');

        this.getPokemonData();
    }

    async getPokemonData() {
        try {
            const response = await fetch(this.apiURL);
            const data = await response.json();

            for (const result of data.results) {
                const pokemonName = result.name;
                const pokemonURL = result.url;

                this.createPokemonCard(pokemonName, pokemonURL);
            }
        } catch (error) {
            console.error(error);
        }
    }

    createPokemonCard(pokemonName, pokemonURL) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'col-xl-3 col-md-6 mb-4'; // Adjust the grid classes if needed

        cardDiv.innerHTML = `
            <div class="card border-left-success shadow h-100 py-2 card text-center border-primary">
                <div class="card-body">
                    <div class="text-xs font-weight-bold mb-1" id="${pokemonName}">
                        ${pokemonName}
                    </div>
                    <a href="${pokemonURL}" class="btn btn-primary" id="${pokemonName}-btn">Detail</a>
                </div>
            </div>
        `;

        this.pokemonContainer.appendChild(cardDiv);
    }
}

const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0";

const currency = new WorldCurrency(apiURL);


class PokeBag {

    static maxPokemon = 10;

    owner;
    pokemonCollection = [];

    constructor(owner) {
        this.owner = owner;
    }

    add(pokemon) {
        if (this.isFull()) {
            console.log('Bag is full');
            return false;
        }
        if (this.pokemonCollection.includes(pokemon)) {
            console.log('PokeBag already contains that pokemon');
            return false;
        }
        if (!(pokemon instanceof Pokemon)) {
            return false;
        }

        this.pokemonCollection.push(pokemon);
        console.log('Added ' + pokemon.name + ' to bag');
    }

    remove(pokemon) {
        if (!Pokemon.isPokemon(pokemon)) {
            return false;
        }
        if (!this.pokemonCollection.includes(pokemon)) {
            console.log("PokeBag doesn't contain that pokemon");
            return false;
        }

        this.pokemonCollection = this.pokemonCollection.filter(p => p !== pokemon);
        console.log('Removed ' + pokemon.name + ' from bag');
    }

    removeAll() {
        
    }

    showAll() {

    }

    isFull() {
        if (this.pokemonCollection.length >= PokeBag.maxPokemon) {
            return true;
        }
        return false;
    }

}
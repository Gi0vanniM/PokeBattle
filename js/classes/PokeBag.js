
class PokeBag {

    static maxPokemon = 10;

    owner;
    pokemonCollection = [];

    constructor(owner) {
        this.owner = owner;
    }

    add(pokemon) {
        // check if bag is full
        if (this.isFull()) {
            console.log('Bag is full');
            return false;
        }
        // check if bag already contains pokemon
        if (this.pokemonCollection.includes(pokemon)) {
            console.log('PokeBag already contains that pokemon');
            return false;
        }
        // check if pokemon is instance of Pokemon class
        if (!(pokemon instanceof Pokemon)) {
            return false;
        }
        // add the pokemon to the bag's array
        this.pokemonCollection.push(pokemon);
        console.log('Added ' + pokemon.getName() + ' to bag');
    }

    remove(pokemon) {
        // check if pokemon is instance of Pokemon class
        if (!Pokemon.isPokemon(pokemon)) {
            return false;
        }
        // check if bag contains pokemon
        if (!this.pokemonCollection.includes(pokemon)) {
            console.log("PokeBag doesn't contain that pokemon");
            return false;
        }
        // recreate the bag's array of pokemon but without the pokemon that gets removed
        this.pokemonCollection = this.pokemonCollection.filter(p => p !== pokemon);
        console.log('Removed ' + pokemon.getName() + ' from bag');
    }

    removeAll() {
        // reset the array
        this.pokemonCollection = [];
        console.log('Removed all pokemon from bag');
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
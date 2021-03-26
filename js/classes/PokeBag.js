
class PokeBag {

    static maxPokemon = 10;

    owner;
    pokemonColleciton = [];

    constructor(owner) {
        this.owner = owner;
    }

    add(pokemon) {
        if (this.isFull()) {
            console.log('Bag is full');
            return false;
        }

    }

    remove(pokemon) {

    }

    removeAll() {

    }

    showAll() {

    }

    isFull() {
        if (this.pokemonColleciton.length >= 10) {
            return true;
        }
        return false;
    }

}
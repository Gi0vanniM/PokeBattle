
class Pokemon {

    constructor(pokemonName, energyType, hitpoints, attacks, weakness, resistance) {
        this.pokemonName = pokemonName;
        this.energyType = energyType;
        this.hitpoints = hitpoints;
        this.health = this.hitpoints; // at construction healt is at maximum
        this.attacks = attacks;
        this.weakness = weakness;
        this.resistance = resistance;
    }

}
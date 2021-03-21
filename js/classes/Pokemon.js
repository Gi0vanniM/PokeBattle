
class Pokemon {

    constructor(name, pokemonName, energyType, hitpoints, attacks, weakness, resistance) {
        this.name = name;
        this.pokemonName = pokemonName;
        this.energyType = energyType;
        this.hitpoints = hitpoints;
        this.health = this.hitpoints; // at construction healt is at maximum
        this.attacks = attacks;
        this.weakness = weakness;
        this.resistance = resistance;
    }

    attack(attack, target) {
        if (!(target instanceof Pokemon)) {
            console.log('Target is not a pokemon');
            return false;
        }
        if (this.isSelf(target)) {
            console.log("You can't attack yourself");
        }
    }

    attacked(attack, attacker) { }

    isSelf(pokemon) {
        if (pokemon === this) {
            return true;
        }
        return false;
    }

}

class Pokemon {

    static population = [];

    constructor(name, pokemonName, energyType, hitpoints, attacks, weakness, resistance) {
        this.name = name;
        this.pokemonName = pokemonName;
        this.energyType = energyType;
        this.hitpoints = hitpoints;
        this.health = this.hitpoints; // at construction healt is at maximum
        this.attacks = attacks;
        this.weakness = weakness;
        this.resistance = resistance;

        Pokemon.pushPopulation(this);
    }

    /**
     * Attack a pokemon
     * @param {Attack} attack
     * @param {Pokemon} target
     * @returns
     */
    attack(attack, target) {
        if (!(target instanceof Pokemon)) {
            console.log('Target is not a pokemon');
            return false;
        }
        if (this.isSelf(target)) {
            console.log("You can't attack yourself");
            return false;
        }
        if (!(attack instanceof Attack)) {
            console.log("That's not an attack");
            return false;
        }
        if (!this.hasAttack(attack)) {
            console.log("Pokemon does not know this attack");
            return false;
        }

        console.log(this.name + " uses " + "'" + attack.name + "'");
    }

    attacked(attack, attacker) { }

    /**
     * check if targeted pokemon is it self
     * @param {Pokemon} pokemon
     * @returns boolean
     */
    isSelf(pokemon) {
        if (pokemon === this) {
            return true;
        }
        return false;
    }

    /**
     * check if pokemon has certain attack
     * @param {Attack} attack 
     * @returns boolean
     */
    hasAttack(attack) {
        if (this.attacks.find(a => a.name === attack.name)) {
            return true;
        }
        return false;
    }

    /**
     * Get all the living pokemon
     */
    static getPopulation(alive = true) {
        if (!alive) {
            return Pokemon.population;
        }
        return Pokemon.population.filter(p => p.health > 0);
    }

    /**
     * Push a Pokemon object to population array
     * @param {Pokemon} pokemon 
     */
    static pushPopulation(pokemon) {
        this.population.push(pokemon);
    }
}
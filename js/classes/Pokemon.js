
class Pokemon {

    static population = [];

    name;
    pokemonName;
    energyType;
    hitpoints;
    health;
    attacks = [];
    weakness = {};
    resistance = {};

    constructor(name, pokemonName, energyType, hitpoints, attacks, weakness, resistance) {
        this.name = name;
        this.pokemonName = pokemonName;
        this.energyType = energyType;
        this.hitpoints = hitpoints;
        this.health = this.hitpoints; // at construction healt is at maximum
        this.attacks = attacks;

        this.weakness.type = weakness[0];
        this.weakness.multiplier = weakness[1];

        this.resistance.type = resistance[0];
        this.resistance.amount = resistance[1];

        Pokemon.pushPopulation(this);
    }

    /**
     * Attack a pokemon
     * @param {Attack} attack
     * @param {Pokemon} target
     * @returns
     */
    attack(attack, target) {
        let attacker = this;
        if (!(target instanceof Pokemon)) {
            console.log('Target is not a pokemon');
            return false;
        }
        if (attacker.isSelf(target)) {
            console.log("You can't attack yourself");
            return false;
        }
        if (!(attack instanceof Attack)) {
            console.log("That's not an attack");
            return false;
        }
        if (!attacker.hasAttack(attack)) {
            console.log("Pokemon does not know this attack");
            return false;
        }

        console.log(attacker.name + " uses " + "'" + attack.name + "'");

        target.receiveAttack(attack, this);
    }

    /**
     * Calculate the damage from an attack
     * and receive the damage
     * @param {Attack} attack 
     * @param {Pokemon} attacker 
     */
    receiveAttack(attack, attacker) {
        // calculate damage amount

        // get the multiplier amount if attacker's 
        // energyType is same as receiver's weakness energyType
        let multiplier = 1;
        if (attacker.energyType === this.weakness.type) {
            multiplier = this.weakness.multiplier;
        }
        let damage = attack.damage * multiplier;

        // lessen the damage if receiver's resistance 
        // energyType is same as attacker's energyType
        let resistance = 0;
        if (this.resistance.type === attacker.energyType) {
            resistance = this.resistance.amount;
        }
        damage -= resistance;

        this.receiveDamage(damage);
    }

    /**
     * receive amount of damage
     * @param {Int} damage 
     */
    receiveDamage(damage) {
        this.health -= damage;
        console.log(this.name + ' received ' + damage + ' damage');

        if (this.health <= 0) {
            this.dead = true;
            console.log(this.name + ' died');
            // pokemon dead
        }
    }

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
     * set name method
     * @param {string} name 
     */
    setName(name) {
        this.name = name;
    }

    /**
     * get name method
     * @returns string
     */
    getName() {
        return this.name;
    }

    /**
     * get health method
     * @returns int
     */
    getHealth() {
        return this.health;
    }

    /**
     * toString method
     * @returns String
     */
    toString() {
        return JSON.stringify(this);
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
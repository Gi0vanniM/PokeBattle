
let pikaJeff = new Pikachu('Jeff');
let charHank = new Charmeleon('Hank');


pikaJeff.attack(attacks.ELECTRIC_RING, charHank);
charHank.attack(charHank.attacks[1], pikaJeff);

console.log(pikaJeff.getHealth(), charHank.getHealth());

console.log(Pokemon.getPopulation());


// how to make own pokemon
// or make a new class
let harryzard = new Pokemon(
    'Harryzard',
    'Charizard',
    // energyType
    energyTypes.FIRE,
    // max health
    200,
    // attacks
    [
        attacks.FLARE,
        attacks.HEAD_BUTT
    ],
    // weakness
    [
        // weakness type
        energyTypes.WATER,
        // weakness multiplier
        1.5
    ],
    // resitance
    [
        // resistance type
        energyTypes.FIRE,
        // resitance amount
        40]
);
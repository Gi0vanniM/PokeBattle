
let pikaJeff = new Pikachu('Jeff');
let charHank = new Charmeleon('Hank');


pikaJeff.attack(attacks.ELECTRIC_RING, charHank);
charHank.attack(charHank.attacks[1], pikaJeff);

console.log(pikaJeff.getHealth(), charHank.getHealth());

console.log(Pokemon.getPopulation());


baggo = new PokeBag('Me');

baggo.add(pikaJeff);
baggo.add(charHank);

baggo.add(new Pikachu('Geoff'));
baggo.add(new Pikachu('Pika'));
baggo.add(new Pikachu('Bri ish'));
baggo.add(new Pikachu('B'));

baggo.showAll();


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
        40
    ]
);
class Pikachu extends Pokemon {
    constructor(name) {
        super(
            name,
            'Pikachu',
            energyTypes.LIGHTNING,
            60,
            [attacks.ELECTRIC_RING, attacks.PIKA_PUNCH],
            [energyTypes.FIRE, 1.5],
            [energyTypes.FIGHTING, 20]
        );
    }
}

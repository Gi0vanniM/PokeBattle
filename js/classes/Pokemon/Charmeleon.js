class Charmeleon extends Pokemon {
    constructor(name) {
        super(
            name,
            'Charmeleon',
            energyTypes.FIRE,
            60,
            [attacks.HEAD_BUTT, attacks.FLARE],
            [energyTypes.WATER, 2],
            [energyTypes.LIGHTNING, 10]
        );
    }
}
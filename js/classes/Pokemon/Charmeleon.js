class Charmeleon extends Pokemon {
    constructor(name) {
        super('Charmeleon', energyType.FIRE, 60, [], [energyType.WATER, 2], [energyType.LIGHTNING, 10]);
        this.name = name;
    }
}
class Pikachu extends Pokemon {
    constructor(name) {
        super('Pikachu', energyType.LIGHTNING, 60, [], [energyType.FIRE, 1.5], [energyType.FIGHTING, 20]);
        this.name = name;
    }
}

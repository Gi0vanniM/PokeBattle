class Attack {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }

    /**
     * get name method
     * @returns string
     */
    getName() {
        return this.name;
    }

    /**
     * get damage method
     * @returns Int
     */
    getDamage() {
        return this.damage;
    }
}
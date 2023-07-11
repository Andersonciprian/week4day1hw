class Hamster {
    constructor(owner, name, price, size) {
        this.owner = owner;
        this.name = name;
        this.price = price;
        this.size = size;
    }
}

const myHamster = new Hamster('Andy', 'Patches', 15, '5cm');
console.log(myHamster);
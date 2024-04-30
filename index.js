class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let weapon;
    switch (this.type) {
      case "Magician":
        weapon = "Magic";
        break;
      case "Warrior":
        weapon = "Sword";
        break;
      case "Monk":
        weapon = "Martial Arts";
        break;
      case "Ninja":
        weapon = "Shuriken";
        break;
      default:
        weapon = "Nothing";
        break;
    }

    console.log(`${this.type} attacks with ${weapon}!`);
  }

  info() {
    console.log(`NAME: ${this.name} | AGE: ${this.age} | TYPE: ${this.type}`);
  }
}

const heroes = [
  new Hero("Nightshade", 34, "Magician"),
  new Hero("Stryke", 34, "Warrior"),
  new Hero("Nova", 34, "Monk"),
  new Hero("Trickster", 34, "Ninja"),
  new Hero("Bolt", 34, "Robot")
];

for (const hero of heroes) {
  console.log(hero);
  hero.info();
  hero.attack();
  console.log();
}

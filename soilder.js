const soldier = {
  name: "Рядовой Шутник",
  hp: 10,
  weapon: {
    gun: "desert eagle",
    ammunition: 1,
  },
  supplies: 3,

  fire: function () {
    --this.weapon.ammunition;
    if (this.weapon.ammunition < 0) {
      console.log("обойма пуста! перезарядитесь");
    } else {
      console.log("Выстрел!");
    }
  },
  reload: function () {
    if (this.fire === 0) {
      return "Перезаряяяка!!!!";
    }
  },

  damage: function () {
    if (this.hp === 0) {
      return "wasted";
    }
    --this.hp;
    return "Я ранен, нужна аптечка";
  },
};

console.log(soldier.fire());
console.log(soldier.reload());
console.log(soldier.damage());

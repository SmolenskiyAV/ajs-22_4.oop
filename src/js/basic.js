export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

export let errMessage1 = ''; // экспорт значения ошибки (проверка длины имени и типа персонажа), для тестировки в jest
export let errMessage2 = '';  // экспорт значения ошибки (проверка LevelUp персонажа), для тестировки в jest

// ---------------------------------------------------------------------------------------------------------------------

class Character { // БАЗОВЫЙ КЛАСС

  constructor(name_, attack, defence, health = 100, level = 1, type) {
    
    this.name = name_;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
    
    try {
    
     if (                               // проверка требований на тип персонажа
          (this.type !== "Bowman") && 
          (this.type !== "Swordsman") && 
          (this.type !== "Magician") && 
          (this.type !== "Daemon") && 
          (this.type !== "Undead") && 
          (this.type !== "Zombie")
        ) {
          console.log('НЕТ СОВПАДЕНИЯ!');
          throw new Error("Данные типа персонажа некорректны");
        };
    
      if ((this.name.length < 2) || (this.name.length > 10)) { // проверка требований на длину строки имени
        throw new Error("Данные имени некорректны");
      };

    } catch(err) {
      errMessage1 = err.message;
      console.log('ошибка: ', errMessage1);
    };

      if (this.attack === undefined)  // автоматическое выставление поля attack
        switch (this.type) {
        
          case "Undead":
          case "Bowman":
            this.attack = 25;
            break;
    
          case "Zombie":
          case "Swordsman":
            this.attack = 40;
            break;

          case "Daemon":
          case "Magician":
            this.attack = 10;
            break;
        };

      if (this.defence === undefined) // автоматическое выставление поля defence
        switch (this.type) {
        
          case "Undead":
          case "Bowman":
            this.defence = 25;
            break;
    
          case "Zombie":
          case "Swordsman":
            this.defence = 10;
            break;

          case "Daemon":
          case "Magician":
            this.defence = 40;
            break;
        };

    
  };

  
  levelUp() { // метод levelUp

    try { 

      if (this.health <= 0) {
        throw new Error("Нельзя повысить левел умершего");
      };

      this.level++;
      this.attack++;
      this.defence++;
      this.health = 100;

    } catch(err) {
      errMessage2 = err.message;
      console.log('ошибка: ', errMessage2);
    };

  };

  damage(points) { // метод повреждений
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    };
  };
  
};

//----------------------------------------------------------------------------------------------------


export class Bowman extends Character {   // ДОЧЕРНИЙ КЛАСС
  
  constructor(name_, attack, defence, health, level, type) {
    super(name_, attack, defence, health, level, type= 'Bowman');
    
  };
};

export class Swordsman extends Character {  // ДОЧЕРНИЙ КЛАСС
  
  constructor(name_, attack, defence, health, level, type) {
    super(name_, attack, defence, health, level, type= "Swordsman");
  
  };
};

export class Magician extends Character {   // ДОЧЕРНИЙ КЛАСС
  
  constructor(name_, attack, defence, health, level, type) {
    super(name_, attack, defence, health, level, type= "Magician");
  };
};

export class Undead extends Character {   // ДОЧЕРНИЙ КЛАСС
  
  constructor(name_, attack, defence, health, level, type) {
    super(name_, attack, defence, health, level, type= "Undead");
  };
};

export class Zombie extends Character {   // ДОЧЕРНИЙ КЛАСС
  
  constructor(name_, attack, defence, health, level, type) {
    super(name_, attack, defence, health, level, type= "Zombie");
  };
};

export class Daemon extends Character {   // ДОЧЕРНИЙ КЛАСС
  
  constructor(name_, attack, defence, health, level, type) {
    super(name_, attack, defence, health, level, type= "Daemon");
  };
};

export class RandomType extends Character { // рандомный класс для осуществления проверки условия в jest 
  
  constructor(name_, attack, defence, health, level, type) {
    super(name_, attack, defence, health, level, type= "RandomType");
  };
};
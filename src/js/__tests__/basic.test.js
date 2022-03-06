import sum, {Bowman, Swordsman, Magician, Undead, Zombie, Daemon, errMessage1, errMessage2, RandomType} from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

// проверка работы метода повышения уровня персонажа
test('shoud check livelUp of pers', () => {
  let  Pers = new Swordsman('Timur', 200, 500, 89);
  Pers.levelUp();
  const result = [Pers.level, Pers.attack, Pers.defence, Pers.health];
  expect(result).toEqual(
    [
      2,
      201,
      501,
      100
    ]
  )
});

// проверка работы метода урона здоровью персонажа
test('shoud check damaging health of pers', () => {
  let  Pers = new Swordsman('Ivan');
  Pers.damage(12);
  const result = String(Pers.health);
  expect(result).toBe("89.2");
});

// проверка длины имени персонажа
test('shoud check name.lengh  of pers', () => {
  let  Pers = new Bowman('B');
  const result = errMessage1;
  expect(result).toBe('Данные имени некорректны')
});


// проверка типа персонажа
test('shoud check name.lengh  of pers', () => {
  let  Pers = new RandomType('Bill');
  const result = errMessage1;
  expect(result).toBe('Данные типа персонажа некорректны')
});

// проверка levelUp персонажа
test('shoud check levelUp of pers', () => {
  let  Pers = new Swordsman('Ivan');
  Pers.health = -1;
  Pers.levelUp();
  const result = errMessage2;
  expect(result).toBe('Нельзя повысить левел умершего')
});
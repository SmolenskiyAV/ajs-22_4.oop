// TODO: write your code here
import sum, {Bowman, Swordsman, Magician, Undead, Zombie, Daemon, Arado, RandomType} from './basic';

console.log('worked');

console.log(sum([1, 2]));

const Pers1 = new Zombie('Boris');  // генерация перса со значениями по умолчанию
console.log(Pers1);

const Pers2 = new Swordsman('Ivan');    // генерация перса со значениями по умолчанию
console.log(Pers2);

const Pers3 = new Swordsman('Timur', 200, 500, 89);  // генерация перса с предустановленными параметрами
console.log(Pers3);

const Pers14 = new RandomType('Timur2', 200, 500, 80); // генерация перса "запрещённого" типа
console.log(Pers14.type);

console.log('====ПОВЫШЕНИЕ УРОВНЯ=====');
Pers3.levelUp();
console.log("new Pers3:  ", Pers3);
console.log(Pers3.level, Pers3.attack, Pers3.defence, Pers3.health)

console.log('======ПОЛУЧЕНИЕ ПОВРЕЖДЕНИЙ=====');
Pers2.damage(1000);
console.log("new Pers2:  ", Pers2);
console.log('current_helth = ', Pers2.health);

console.log('=====ПОВЫШЕНИЕ УРОВНЯ УБИТОГО======');
Pers2.levelUp();

console.log();
console.log('end of execution!')
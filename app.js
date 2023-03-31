import Attaque from './modules/attaque.js'
import Pokemon from './modules/pokemon.js'

let statik = new Attaque('statik', 10);
let paratonnerre = new Attaque('paratonnerre',25);
let adaptabilite = new Attaque('adaptabilite',9);
let anticipation = new Attaque('anticipation',15);
let pikachu = new Pokemon('Pikachu',25,'40 cm','6 kg','electrique', 82 ,statik,paratonnerre)
let evoli = new Pokemon('Evoli',133,'30 cm','6,5 kg','normal', 70 ,adaptabilite,anticipation)

let ran = Math.random();
let pok1;
let pok2;
console.log(ran);
if(ran > 0.5){
    pok1 = pikachu;
    pok2 = evoli;
}
else if(ran < 0.5){
    pok2 = pikachu;
    pok1 = evoli;
}
console.log('Pikachu VS Evoli');
console.log(`le tirage au sort a decide que  ${pok1.nom} attaquait en premier`);
console.log(`${pok1.nom} a ${pok1.hp} point de vie.`);
console.log(`${pok2.nom} a ${pok2.hp} point de vie.`);

while (pok1.hp > 0 && pok2.hp > 0) {
  pok1.attaque(pok2);

  if (pok2.hp > 0) {
    pok2.attaque(pok1);
  }
}
let gagne;
if(pok1.hp > 0){
    gagne = pok1;
}
else {
   gagne = pok2;
}

console.log(
  `${gagne.nom} a gagne le combat. Il lui restait ${gagne.hp} pv.  `
);

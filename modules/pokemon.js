
export default class Pokemon {
    constructor(nom, numero, taille, poids, type, hp, attaque1, attaque2) {
      this.nom = nom;
      this.numero = numero;
      this.taille = taille;
      this.poids = poids;
      this.type = type;
      this.hp = hp;
      this.attaque1 = attaque1;
      this.attaque2 = attaque2;
    }
  
    attaque(def) {
      let att;
  
      if (this.hp <= this.hp * 0.2) {
        att = this.attaque2;
      } else {
        att = this.attaque1;
      }
      console.log(`${this.nom} a attaque. Il a ${att.degats} fait de degats.`);
      let ran = Math.random();
      if (ran < 0.1) {
        def.hp -= att.degats * 2;
      } else {
        def.hp -= att.degats;
      }
  
      
    }
  }
  

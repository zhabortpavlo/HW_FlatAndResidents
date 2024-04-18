function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Flat() {
  this.residents = [];
}

Flat.prototype.addResident = function(person) {
  this.residents.push(person)
}

function House (maxFlats) {
  this.flats = [];
  this.maxFlats = maxFlats;
}

House.prototype.addFlat = function(flat) {
  if(this.flats.length < this.maxFlats) {
    this.flats.push(flat);
    console.log('Ще є місце для нових квартир')
  } else {
    console.log('Вибачте не залишилось вільних квартир')
  }
}

const person1 = new Person("Іван", "чоловіча");
const person2 = new Person("Марія", "жіноча");
const person3 = new Person("Петро", "чоловіча");

const flat1 = new Flat();
const flat2 = new Flat();


flat1.addResident(person1);
flat1.addResident(person2);
flat2.addResident(person3);



const house = new House(3);

house.addFlat(flat1);
house.addFlat(flat2);



console.log(house);
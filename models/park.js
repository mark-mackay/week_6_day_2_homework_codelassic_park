const Park = function (name, price) {
  this.name = name;
  this.ticketPrice = price;
  this.dinosaurs = [];
}
Park.prototype.addDino = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}
Park.prototype.delDino = function(dinosaur){
  let candidate = this.findDinoIndex(dinosaur);
  if (candidate !== -1){
    this.dinosaurs.splice(candidate, 1);
  }
}

Park.prototype.findDino = function(species){
  let i = 0;
  let found = -1;
  while (i < this.dinosaurs.length){
    if (this.dinosaurs[i].species === species) {
      found = i;
    };
    i++;
  };
  return found;
};
Park.prototype.findDinoIndex = function(dino){
  let i = 0;
  let found = -1;
  while (i < this.dinosaurs.length){
    if (this.dinosaurs[i] === dino) {
      found = i;
    };
    i++;
  };
  return found;
};
Park.prototype.delDinoSpecies = function(species){
  let found = this.findDino(species);
  while (found !== -1) {
    this.delDinoByIndex(found);
    found = this.findDino(species);
  };
};
Park.prototype.findDinoBySpecies = function(species){
  let i = 0;
  let found = [];
  while (i < this.dinosaurs.length){
    if (this.dinosaurs[i].species === species) {
      found.push(this.dinosaurs[i]);
    };
    i++;
  };
  return found;
};
Park.prototype.findDinoIndexBySpecies = function(species){
  let i = 0;
  let found = [];
  while (i < this.dinosaurs.length){
    if (this.dinosaurs[i].species === species) {
      found.push(i);
    };
    i++;
  };
  return found;
};
Park.prototype.returnAllDinosBySpecies = function(species) {
  let dinoIndexArray = this.findDinoBySpecies(species);
  let speciesArray = [];
  if (dinoIndexArray) {
    for (index of dinoIndexArray) {
      speciesArray.push(this.dinosaurs[index]);
    };
  };
  return speciesArray;
};

Park.prototype.findDinoByMostVisitors = function(){
  let i = 0;
  let mostIndex = -1;
  let mostVisitors = 0;
  while (i < this.dinosaurs.length){
    if (this.dinosaurs[i].guestsAttractedPerDay > mostVisitors) {
      mostVisitors = this.dinosaurs[i].guestsAttractedPerDay;
      mostIndex = i;
    };
    i++;
  };
  return mostIndex;
};
Park.prototype.delDinoByIndex = function(index){
  if (index !== -1) {
    this.dinosaurs.splice(index,1);
  };
};
Park.prototype.visitorsPerDay = function() {
  let total = 0;
  for (dino of this.dinosaurs) {
    total += dino.guestsAttractedPerDay;
  }
  return total;
}
Park.prototype.visitorsPerYear = function() {
    return this.visitorsPerDay()*365;
}
Park.prototype.revenuePerYear = function() {
    return this.visitorsPerYear()*this.ticketPrice;
}

Park.prototype.getEatingHabits = function() {
    let eatingHabits = {};
    for (dino of this.dinosaurs){
      if (eatingHabits[dino.diet]){
        eatingHabits[dino.diet] += 1;
      }
      else {
        eatingHabits[dino.diet] = 1;
      }
    }
    return eatingHabits;
}

module.exports = Park;

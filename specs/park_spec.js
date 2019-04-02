const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park, dino1, dino2, dino3, dino4;
  beforeEach(function () {
      park = new Park("Codelassic Park", 10.50);
      dino1 = new Dinosaur('t-rex', 'carnivore', 50);
      dino2 = new Dinosaur('diplodocus', 'herbivore', 20);
      dino3 = new Dinosaur('brontosaurus', 'herbivore', 30);
      dino4 = new Dinosaur('velociraptor', 'omnivore', 150);
      dino5 = new Dinosaur('yangchuanosaurus', 'omnivore', 25);
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      park.addDino(dino4);

  })

  it('should have a name', function(){
    let actual = park.name;
    assert.strictEqual(actual, "Codelassic Park");
  });

  it('should have a ticket price', function(){
    let actual = park.ticketPrice;
    assert.strictEqual(actual, 10.50);
  });

  it('should have a collection of dinosaurs', function(){
    let actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino5);
    let actual = park.dinosaurs.length;
    assert.strictEqual(actual, 5);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dino5);
    let actual = park.dinosaurs.length;
    assert.strictEqual(actual, 5);
    let index = park.findDinoIndex(dino4);
    park.delDinoByIndex(index);
    park.delDino(dino5);
    actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
    // console.log(park.dinosaurs);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dino5);
    let actual = park.findDinoByMostVisitors();
    assert.strictEqual(actual, 3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dino1);
    park.addDino(dino1);
    park.addDino(dino1);
    park.addDino(dino1);
    park.addDino(dino1);
    let actual = park.dinosaurs.length
    assert.strictEqual(actual, 9);
    let allTrex = park.findDinoBySpecies('t-rex');
    actual = allTrex.length
    assert.strictEqual(actual, 6);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDino(dino2);
    park.addDino(dino2);
    park.addDino(dino2);
    park.addDino(dino2);
    park.addDino(dino2);
    let actual = park.dinosaurs.length
    assert.strictEqual(actual, 9);
    park.delDinoSpecies('diplodocus');
    actual = park.dinosaurs.length
    assert.strictEqual(actual, 3);
    });
    it('should be able to give total visitors per day', function(){
      park.addDino(dino5);
      let actual = park.visitorsPerDay();
      assert.strictEqual(actual, 275);
    });
    it('should be able to give total visitors per year', function(){
      park.addDino(dino5);
      let actual = park.visitorsPerYear();
      assert.strictEqual(actual, 275*365);
    });
    it('should be able to give total revenue per year', function(){
      park.addDino(dino5);
      let actual = park.revenuePerYear();
      assert.strictEqual(actual, 275*365*10.5);
    });
    it('should be able to get an object detailing eating habits', function(){
      park.addDino(dino5);
      let actual = park.getEatingHabits();
      assert.deepStrictEqual(actual, { carnivore: 1, herbivore: 2, omnivore: 2 });
    });
});

//importer les core modules eventEmitter et util
var EventEmitter = require('events').EventEmitter;
var util = require('util');
//créer un constructeur d’objets Person
var Person = function(name) {
this.name = name;
};
//Hériter les propriétés et méthodes de EventEmitter dans Person
util.inherits(Person, EventEmitter);
//Créer une instance d’objet Person
var ben = new Person("Ben Franklin");
//Préparer un écouteur et une callback function pour l’événement speak avec on.
ben.on('speak', function(said) {
console.log(`${this.name}: ${said}`);
});
//Emettre l’événement speak avec emit.
ben.emit('speak', "You may delay, but time will not.");
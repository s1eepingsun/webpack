//'use strict';
var $ = require('jquery');
require('./file1');
var justVar = require('./file2');
//var debug = require('debug');
//var debug = require('strip-loader?strip[]=debug');

//console.log(debug);
//debug('asdf');

function file3(justVar) {
    var file1Text = $('.file1-span').text();
    console.log('file3 - file1Text: ', file1Text);
    console.log('justVar', justVar);

    const PI = 3.14159;
    console.log('pi', PI);

    //debug('debug called');
}

file3(justVar);

let foo = 23;
console.log('foo', foo);

class c {}
console.log('type of c', typeof c);

// Superclass
class Person {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return "Person called "+this.name;
    }
}

// Subclass
/*class Employee extends Person {
    constructor(name, title) {
        super.constructor(name);
        this.title = title;
    }
    describe() {
        return super.describe() + " (" + this.title + ")";
    }
}*/

//var jane = new Employee("Jane", "CTO");
var alex = new Person("Alex", "just a person");
//console.log('jane instanceof Person', jane instanceof Person);
console.log('alex instanceof Person', alex instanceof Person);
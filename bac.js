// number 
var num = 4;

// String
var str = 'it is string';

// boolean
var bol = 1 < 5;

// Null
var n = null;

//undefined
var an;

//object
//-array

var names = ['Ab', '15', 'hgj'];
names.push('new1', 'new2');

//names.unshift('n','new');

names.splice(2, 0, 'ddddd');

names.shift();
names.pop();

var newNames = names.slice(1, 2);
//console.log(typeof num);
//console.log(typeof str);
//console.log(typeof bol);
//console.log(n);
//console.log(typeof an);
//console.log(names);
//console.log(newNames);

//object
// - object

var user = { name: 'Vass', age: 25 };

user.email = 'vas@gmail.com'

delete user.age;




console.log(user.name);

var num1 = +prompt('Enter num 1')
var op = prompt('Enter operation: ')
var num2 = +prompt('Enter num 2')

console.log(typeof num1);


var res;

if (op === '+') {
    res = num1 + num2;
} else if (op === '-') {
    res = num1 - num2;
} else {
    alert('undefind operation')
}

switch (a) {
    case 'v1':
        alert('v1');
        break;
    case 'v2':
        alert('v2');
        break;
    case 'v3':
        alert('v3');
        break;
    case 'v4':
        alert('v4');
        break;
}

alert('Sum: ' + res)


function sum(a, c) {

    var res = a + c;

    console.log(a, c);
    console.log(res);

    return res;
}

var result1 = sum(5, 6);
var result2 = sum(22, 1);
var result3 = sum(0, 1);
///////////////////////////////////////////////////////////////
var names = ['Vas', 'Pet', 'Alex', 'Anna', 'Nadg'];

var cities = ['Dnepr', 'Torrr', 'Lviv', 'Zhmeri', 'Odes'];


function renderList(list, block_id) {

    var block = document.querySelector(block_id);

    var rand1 = '';
    for (var item of list) {
        rand1 += `<li>${item}</li>`;

    }
    block.innerHTML = rand1;
}

renderList(names, '#block-users');
renderList(cities, '#block-cities');


////////////////////////////


function sum(a, b) {
    console.log(arguments);
    var result = 0;
    for (num of arguments) {
        result += num;
    }

    return result;
}

var res = sum(1, 3, 100, 0, 1.5);
console.log(res);


//////////////////////////////////////


var user = {
    name: 'user',
    age: 88,
    email: 'user@.com',

    show: function() {
        console.log(this);
    }
}

var car = { name: 'car' };

car.display = user.show;

car.display();

console.log(car);

user.show();
/////////////////////////////////

function User(n) {
    this.name = n;
    this.age = 25;
}

var user = new User('Leha');
var user2 = new User('petttt');

console.log(user);

///////////////////
var User = {
    pay: function() {
        alert('payed');
    }

};

function Admin() {
    this.role = 'ADMIN';
    this.edit = function() {
        alert('edit');
    }
}
Manager.prototype = User;

function Manager() {
    this.role = 'MANAGER';
    this.resd = function() {
        alert('resd');
    }
}

//////////////////////////////////////
function Slider(images, id) {

    this.slideRight = function() {
        console.log('slide Right');
    }
    this.slideLeft = function() {
        console.log('slide Left');
    }


    this.init = function() {
        this.container = document.querySelector(id);
        this.wrap = document.createElement('div');
        this.img = document.createElement('img');
        this.btnRight = document.createElement('i');
        this.btnLeft = document.createElement('i');
        this.btnRight.onclick = this.slideRight;
        this.btnLeft.onclick = this.slideLeft;
    }
    this.render = function() {
        this.wrap.className = 'slider';
        this.btnLeft.innerHTML = '<';
        this.btnRight.innerHTML = '>';

        this.wrap.appendChild(this.btnLeft);
        this.wrap.appendChild(this.img);
        this.wrap.appendChild(this.btnRight);
        this.container.appendChild(this.wrap);
    }
    this.init();
    this.render();

}

var slider = new Slider(data, '#slider');
console.log(slider);

var m1 = new Manager();
var m2 = new Manager();

console.log(m1);

/////////////////////
const users = [
    'Vasya',
    'Piter',
    'Anu',
    'Kostya',
];

const user = {
    age: 25,
    name: 'vasis77',
    email: 'www@fff',
}

const { name, age, ...rest } = user;

console.log(rest);





/////
var a = 5;

function render(val) {
    alert('Hi' + val);
    return 5555;
}

function show(callback) {
    setTimeout(function() {
        a = 10;
        callback(a);
    }, 5000)
}

show(render);

console.log(a);
///
function Constructor() {
    this.name = 'Vassss';
    this.view = function() {
        alert(this.name)
    }

}

var res = new Constructor();

console.log(res);
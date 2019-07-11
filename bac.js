// number 
var num = 4;

// String
var str = 'it is string';

// boolean
var bol = 1<5;

// Null
var n = null;

//undefined
var an;

//object
//-array

var names = ['Ab','15','hgj'];
names.push('new1','new2');

//names.unshift('n','new');

names.splice(2,0,'ddddd');

names.shift();
names.pop();

var newNames = names.slice(1,2);
//console.log(typeof num);
//console.log(typeof str);
//console.log(typeof bol);
//console.log(n);
//console.log(typeof an);
//console.log(names);
//console.log(newNames);

//object
// - object

var user = {name: 'Vass', age: 25 };

user.email = 'vas@gmail.com'

delete user.age;




console.log(user.name); 

var num1 = +prompt('Enter num 1')
var op = prompt('Enter operation: ')
var num2 = +prompt('Enter num 2')

console.log(typeof num1);


var res;

if(op === '+'){
    res = num1+num2;
}
else if(op === '-') {
    res = num1-num2;
}
else{
    alert('undefind operation')
}

switch (a) {
    case 'v1': alert('v1'); break;
    case 'v2': alert('v2'); break;
    case 'v3': alert('v3'); break;
    case 'v4': alert('v4'); break;
}

alert('Sum: ' + res)


function sum(a, c) {

    var res = a + c;

    console.log(a, c);
    console.log(res);

    return res;
}

var result1 = sum(5,6);
var result2 = sum(22,1);
var result3 = sum(0,1);
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
    for(num of arguments){
        result += num;
    }
    
    return result;
}

var res = sum(1,3,100,0, 1.5);
console.log(res);


//////////////////////////////////////


var user = {
    name: 'user',
    age: 88,
    email: 'user@.com',
   
    show: function(){
        console.log(this);
    }
}

var car = {name: 'car'};

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
    pay: function () {
        alert('payed');
    }

};

function Admin (){
    this.role = 'ADMIN';
    this.edit = function (){
        alert('edit');
    }
}
Manager.prototype = User;
function Manager (){
    this.role = 'MANAGER';
    this.resd = function (){
        alert('resd');
    }
}

var m1 = new Manager();
var m2 = new Manager();

console.log(m1);
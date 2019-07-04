var addBtn = document.querySelector('#add');
var list = document.querySelector('#list');

var createCounter = function () {
    var value = 0;
    return function () {
        return ++value;
    }
}

var counter = createCounter();


addBtn.onclick = function () {
  
    if (this.className === 'red') {
        this.className = 'orange'
    } else {
        this.className = 'red'
    }
    
    
    var index = counter();

    list.innerHTML += `<li> ${index} </li>`;

    

}

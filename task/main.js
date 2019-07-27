var items = [
    { name: 'item-1', children: [{ name: 'child-1' }, { name: 'child-6' }] },
    { name: 'item-2', children: [{ name: 'child-3' }, { name: 'child-7' }] },
    { name: 'item-3', children: [{ name: 'child-4' }, { name: 'child-8' }] },
    { name: 'item-4', children: [{ name: 'child-5' }, { name: 'child-9' }] }
]

function inputFunction() {
    const container = document.querySelector('#container');
    console.log(container);

    for (let name of items.name) {
        console.log(name);
        var newLi = document.createElement('li');
        newLi.innerHTML = name;
        container.appendChild(newLi);
    }

}
inputFunction();
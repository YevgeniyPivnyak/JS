var items = [
    { name: 'item-1', children: [{ name: 'child-1' }, { name: 'child-6' }] },
    { name: 'item-2', children: [{ name: 'child-3' }, { name: 'child-7' }] },
    { name: 'item-3', children: [{ name: 'child-4' }, { name: 'child-8' }] },
    { name: 'item-4', children: [{ name: 'child-5' }, { name: 'child-9' }] }
]

  
    items.forEach((CeateFunction) =>  {
        const container = document.querySelector('#container');
        let newLi = document.createElement('li'); 
        container.appendChild(newLi);
        newLi.innerHTML = CeateFunction.name;
        
        let newUl = document.createElement('ul'); 
        newLi.appendChild(newUl);
        
        CeateFunction.children.forEach((AddChFunction) => {
        let chLi = document.createElement('li');
        newUl.appendChild(chLi);
        chLi.innerHTML = AddChFunction.name;
        });
    });

    

    

   

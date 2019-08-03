var items = [
    { name: 'item-1', children: [{ name: 'child-1' }, { name: 'child-6' }] },
    { name: 'item-2', children: [{ name: 'child-3' }, { name: 'child-7' }] },
    { name: 'item-3', children: [{ name: 'child-4' }, { name: 'child-8' }] },
    { name: 'item-4', children: [{ name: 'child-5' }, { name: 'child-9' }] }
]

function fffr(item, container_id) {
    const cont = document.querySelector(container_id);
    for (let item of items) {
        const { name, children } = item;
        const li = appendItems(cont, name);
    };

    if (children || children.length) {
        const ul = document.createElement('ul');
        li.appendChild(ul);

        for (let child of children) {
            appendItems(ul, child.name);
        }
    }

}

function appendItems(container, name) {
    const li = document.createElement('li');
    li.innerHTML = name;
    cont.appendChild(li);
    return li;
}

fffr(items, '#container');
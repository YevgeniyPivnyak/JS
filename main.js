var arrNames = [];

function inputFunction(){
    let name = document.getElementById('inputForm').value;
    arrNames.push(name);

    var newDiv = document.createElement('div');
    newDiv.innerHTML = name;
    listOfNames.appendChild(newDiv);
}

function clearFunction(){
    var delNames = document.getElementById('listOfNames');
   while (delNames.firstChild){
    delNames.removeChild(delNames.firstChild);
   }
}


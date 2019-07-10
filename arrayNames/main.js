var boxNames = document.getElementById('namesBox');

var Names = ['Igor','Anna','Vanna','Tolik','Other'];


for(n in Names){
       boxNames.innerHTML += `<Li> ${Names[n]}</li>`;

}






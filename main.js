var myBtn = document.getElementById('myBtn');
var myText = document.getElementById('text');


// function str_rand() {
//     var result = '';
//     var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
//     var max_position = words.length - 1;
//     for (i = 0; i < 5; ++i) {
//         position = Math.floor(Math.random() * max_position);
//         result = result + words.substring(position, position + 1);
//     }
//     return result;
// }


myBtn.onclick = function () {
    // alert('HI!');
    var colorCode = '';
    var symbolsForCode = '0123456789ffddccaaeebb0123456789ffddccaaeebb0123456789ffddccaaeebb';
    var max_position = symbolsForCode.length - 1;
    for (i = 0; i < 6; ++i) {
        position = Math.floor(Math.random() * max_position);
        colorCode = colorCode + symbolsForCode.substring(position, position + 1);
    }
    
    myText.innerHTML = '#' + colorCode;
    myBtn.style.color = '#' + colorCode;
    myText.style.color = '#' + colorCode;

}


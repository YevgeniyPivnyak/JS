var myBtn = document.getElementById('myBtn');
var myText = document.getElementById('text');


myBtn.onclick = function () {

    var colorCode = '';
    var symbolsForCode = '0123456789ffddccaabb0123456789ffddccaaebb0123456789ffddccaaeebb';
    var max_position = symbolsForCode.length - 1;
    for (i = 0; i < 6; ++i) {
        position = Math.floor(Math.random() * max_position);
        colorCode = colorCode + symbolsForCode.substring(position, position + 1);
    }


    var colorCode2 = '';
    var symbolsForCode2 = 'ffddccaaaaeebb012345678901234567890123456789ffddccaaeebb000ffddccaaeebb';
    var max_position = symbolsForCode2.length - 1;
    for (i = 0; i < 6; ++i) {
        position = Math.floor(Math.random() * max_position);
        colorCode2 = colorCode2 + symbolsForCode2.substring(position, position + 1);
    }

    myText.innerHTML = '#' + colorCode;
    myBtn.style.color = '#' + colorCode;
    myBtn.style.background = '#' + colorCode2;
    myText.style.color = '#' + colorCode;

}


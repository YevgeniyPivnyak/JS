var data = ['slide-1.png',
    'slide-2.png',
    'slide-3.png',
    'slide-4.png',
    'slide-5.png']

function Slider(images, id) {

    this.slideRight = function () {
        console.log('slide Right');
    }
    this.slideLeft = function () {
        console.log('slide Left');
    }


    this.init = function () {
        this.container = document.querySelector(id);
        this.wrap = document.createElement('div');
        this.img = document.createElement('img');
        this.btnRight = document.createElement('i');
        this.btnLeft = document.createElement('i');
        this.btnRight.onclick = this.slideRight;
        this.btnLeft.onclick = this.slideLeft;
    }
    this.render = function () {
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
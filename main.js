const BASE_URL = "https://api.unsplash.com/photos/";
const CLIENT_ID = "ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c";

function Gallery({
    limit,
    page,
    gallery_id,
    nav_id,
}) {

    this.url = `${BASE_URL}?client_id=${CLIENT_ID}&per_page=${limit}&page=${page}`;
    this.container = document.querySelector(gallery_id);
    this.btnLeft = document.querySelector(`${nav_id} #prev`);
    this.btnRight = document.querySelector(`${nav_id} #next`);
    this.input = document.querySelector(`${nav_id} input`);
    this.select = document.querySelector(`${nav_id} select`);

    this.photos = [];

    this.changePage = (e) => {
        console.log(e.target)
    }

    this.btnLeft.onclick = this.changePage;
    this.btnRight.onclick = this.changePage;
    this.input.oninput = this.changePage;
    this.select.onchange = this.changePage;

    this.fetchPhotos = () => {
        fetch(this.url)
            .then(response => {
                return response.json();
            })
            .then(photos => {
                this.photos = photos;
                this.render();
            })
    }

    this.render = () => {


        for (let photo of this.photos) {
            const img = document.createElement('img');
            img.src = photo.urls.thumb;

            this.container.append(img);
        }
    }

}

const gallery = new Gallery({
    limit: 10,
    page: 1,
    gallery_id: '#gallery',
    nav_id: '#navigation',
});

gallery.fetchPhotos();
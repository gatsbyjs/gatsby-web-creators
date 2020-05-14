export class APIImage {
    constructor(url, idRef) {
        this.figure = document.createElement('figure');
        this.figcaption = document.createElement('figcaption');
        this.img = document.createElement('img');

        this.figure.appendChild(this.figcaption);
        this.figure.appendChild(this.img);

        document.querySelector(`#${idRef}`).appendChild(this.figure);

        this.fetchNewImage(url);
    }
    fetchNewImage(url) {
        return fetch(url)
        .then(response => response.json())
        .then((data) => {
            const imageURL = data.url || data.message[0].url;
            const imageText = data.title || data.message[0].altText;
            console.log(data);
                      
            this.img.setAttribute('src', imageURL);
            this.img.setAttribute('alt', '');
            this.figcaption.textContent = imageText;
        })
    }
}
function randomDateAfter1995() {
    var start = new Date(1995, 6, 16);
    var today = new Date();
    var date = new Date(start.getTime() + Math.random() * (today.getTime() - start.getTime()));
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function dogAPIImage(idRef) {
    const dogUrl = `https://dog.ceo/api/breeds/image/random/1/alt`;
    return new APIImage(dogUrl, idRef);
}
export function nasaAPIImage(idRef) {
    const apiKey = 'U4kg6NszjYp6yyFyMbPIcscNSvyPg5RtiicQhCXM';
    var imageDate = randomDateAfter1995();
    console.log(imageDate);
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${imageDate}`;
    return new APIImage(url, idRef);
}

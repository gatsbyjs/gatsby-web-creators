export class APIImage {
    constructor(url, idRef) {
        return fetch(url)
            .then(response => response.json())
            .then((data) => {
                const imageURL = data.url || data.message[0].url;
                const imageText = data.title || data.message[0].altText;
                console.log(data);

                const figure = document.createElement('figure');
                const figcaption = document.createElement('figcaption');
                const img = document.createElement('img');
                img.setAttribute('src', imageURL);
                img.setAttribute('alt', '');
                figcaption.textContent = imageText;

                figure.appendChild(img);
                figure.appendChild(figcaption);

                document.querySelector(`#${idRef}`).appendChild(figure);
            })
    }
}
function randomDateAfter1995() {
    var start = new Date(1995, 6, 16);
    var today = new Date();
    var date = new Date(start.getTime() + Math.random() * (today.getTime() - start.getTime()));
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function dogAPIImage() {
    console.log('dogs');
    const dogUrl = `https://dog.ceo/api/breeds/image/random/1/alt`;
    return new APIImage(dogUrl, 'dogs');
}
export function nasaAPIImage() {
    const apiKey = 'U4kg6NszjYp6yyFyMbPIcscNSvyPg5RtiicQhCXM';
    var imageDate = randomDateAfter1995();
    console.log(imageDate);
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${imageDate}`;
    return new APIImage(url, 'space');
}

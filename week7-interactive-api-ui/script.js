import {nasaAPIImage, dogAPIImage} from './modules/api-image.js';

// load a space image
const spaceId = 'space-image';
nasaAPIImage(spaceId);

// load a dog image
const dogId = 'dog-image';
dogAPIImage(dogId);

// store some DOM selector variables
const form = document.forms[0];
const fieldsets = Array.from(document.querySelectorAll('fieldset'));
const radios = document.querySelectorAll('input[type="radio"]');

// bind a change listener to both radio buttons
for (let index = 0; index < radios.length; index++) {
    // listen to the radio button change event
    radios[index].addEventListener('change', (event) => {
        // set class to fieldset for checked radio button
        setCurrentFieldset(index)
    })
}
function setCurrentFieldset (checkedIndex) {
    // clear off any CSS classes to reset
    fieldsets.forEach((fieldset, index) => {
        if (index !== checkedIndex) {
            fieldset.removeAttribute('class')
        }
    })
    // set current one
    fieldsets[checkedIndex].setAttribute('class','checked');
}
document.addEventListener('keyup', (event) => {
    // left arrow key
    if (event.which === 37) {
        radios[0].checked = true
        radios[0].focus()
        setCurrentFieldset(0)
    }
    // right arrow key
    if (event.which === 39) {
        radios[1].checked = true
        radios[1].focus()
        setCurrentFieldset(1)
    }
})

form.addEventListener('submit', (event) => {
    // prevent the form from refreshing before an alert
    event.preventDefault()

    // get the checked item text to display in the alert
    const spotItem = document.querySelector('.checked figcaption').textContent

    // fire an browser alert with the text
    window.alert(`The winner is: ${spotItem}!`)

    // let the form refresh the page to fetch new images!
    form.submit()
})

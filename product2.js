const url = 'product.json';
let cards = document.querySelectorAll('.output');

let list = [];

fetch(url).then(res => res.json().then(data => {
    list = data;
    cards.forEach((el, index) => {
        addInfo(index);
        el.addEventListener('click', function() {
            console.log(this);
            console.log(this.id);
        })
    });
}));

function addInfo(index) {
    let title = document.querySelectorAll('.output');
    title[index].textContent = list[index].name;
    cards[index].setAttribute('id', index);
}

function addImage(index) {
    let image = document.querySelectorAll('.output');
    image[index].textContent = list[index].name;

}
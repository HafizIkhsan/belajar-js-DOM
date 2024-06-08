// Event Handler
// Inline & Method
const p3 = document.querySelector('.p3');

ubahWarnaP3 = () => p3.style.backgroundColor = 'lightblue';

ubahWarnaP2 = () => p2.style.backgroundColor = 'lightblue';

const p2 = document.querySelector('section#a .p2');
p2.onclick = ubahWarnaP2;


//addEventListener
const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function() {
    const listBaru = document.createElement('li');
    const textList = document.createTextNode('List baru');
    const sectionBli = document.getElementsByTagName('ul')[0];
    listBaru.appendChild(textList);
    sectionBli.appendChild(listBaru);
});

/** CONTOH PERBEDAAN */
// EVENT HANDLER METHOD
// const p3 = document.querySelector('.p3');
// ubahWarnaP3 = () => p3.style.backgroundColor = 'lightblue';
// p3.onclick = function(){
//     p3.style.color = 'red';
// }
//maka dia outputnya hanya akan menggunakan yang p3.style.color = 'red'

// addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function (){
//     p4.style.backgroundColor = 'lightblue';
// })

// p4.addEventListener('click', function (){
//     p4.style.color = 'red';
// })

//maka outputnya berupa gabungan dari .backgroundColor = 'lightblue' dan .color = 'red';
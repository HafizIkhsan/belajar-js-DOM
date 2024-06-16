// Cara normal tapi bukan traversal
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');
// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });


// DOM Traversal
// const close = document.querySelectorAll('.close');
// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(e){
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// };

// close.forEach(function(el) {
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         // prevent Default
//         e.preventDefault();
//         // event bubbling
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(){
//         alert('ok');
//     });
// });

// Menggunakan Event Bubble
const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    }
})
/** element.innerHTML */
// .innerHTML kita bisa mengganti isi element menjadi apapun
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Muhammad Hafiz Ikhsan</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';

/** element.style.<properti> */
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

/** element.setAttribute() */
// const judul = document.getElementsByTagName('h1')[0];
// //Menambahkan attribue
// judul.setAttribute('name', 'hafiz');
// judul.setAttribute('kelas', 'r4x');
// /** element.getAttribute() */
// const paragraf = document.querySelectorAll('section#a p')[1];
// //Mengetahui isi dari sebuah attribute
// paragraf.getAttribute('class');
// /** element.removeAttribute() */
// const href = document.querySelector('section#a a');
// //Menghapus sebuah atribute
// href.removeAttribute('href');

/** element.classList */
const p2 = document.querySelector('.p2');
// element.classList.add()
p2.classList.add('label'); //menambahkan kelas label

// element.classList.remove()
p2.classList.remove('label'); //menghapus kelas label

// element.classList.toggle()
document.body.classList.toggle('biru-muda') //menambahkan kelas biru muda ke body
document.body.classList.toggle('biru-muda'); //menghapus kelas biru muda ke body
//cara kerja toggle itu kaya ceklekan aja dia on off gitu klo blm ada di toggle nnti nambah, klo udah ada di toggle dia nanti ngurang

//element.classList.item
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');
p2.classList.item(2); // maka yang akan keluar adalah dua
//dia tuh menanyakan ada kelas apa di indeks ke 2

//element.classList.contains
p2.classList.contains('tiga'); // maka akan mengembalikan true
//dia tuh ngecek apakah kelas yang ditanyakan ada atau engga mangkanya yang keluar itu boolean

//element.classList.replace
p2.classList.replace('tiga', 'empat'); // maka akan menggantikan kelas tiga menjadi kelas empat
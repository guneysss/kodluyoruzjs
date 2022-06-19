let myName = prompt("İsminizi giriniz");

let Text1= document.querySelector('#myName');


Text1.innerHTML = `${myName}`

let creteDate = new Date()

let myClock= document.querySelector('#myClock')
myClock.innerHTML = `${creteDate}`
console.log("date"+creteDate);
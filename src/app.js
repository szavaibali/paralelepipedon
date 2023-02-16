/*
* File: app.js
* Author: Szávai Balázs
* Copyright: 2023, Szávai Balázs
* Group: Szoft I-1 E
* Date: 2023-02-15
* Github: https://github.com/szavaibali/
* Licenc: GNU GPL
*/
const oldala = document.querySelector('#oldala');
const oldalb = document.querySelector('#oldalb');
const oldalc = document.querySelector('#oldalc');
const calcButton = document.querySelector('#calcButton');

calcButton.addEventListener('click', () => {
    
    let oldala = Number(oldalaElem.value);
    let oldalb = Number(oldalbElem.value);
    let oldalc = Number(oldalcElem.value);
    let area = calcArea(oldala, oldalb, oldalc);
    console.log(area);
    areaElem.value = area;
    //function calcArea(radius, height) {
    // let area = (1.0/3.0)*Math.pow(radius, 2) * 
    // Math.PI * height;
    // return area;
// }

});
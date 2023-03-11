const r = document.querySelector(':root');
const button = document.getElementById('printer');
const systemName = document.getElementById('systemName');

const printerFriendly = function(){
    r.style.setProperty('--backgroundColor', 'white');
    r.style.setProperty('--genTextColor', 'black');
    r.style.setProperty('--elementColor', 'white');
    r.style.setProperty('--sectorColor', 'white');
    r.style.setProperty('--sectorBorderColor', 'white');
    r.style.setProperty('--messageColor', 'Black');
    systemName.style.setProperty('text-shadow', 'none');
}

button.addEventListener('click', ()=> printerFriendly());


// --backgroundColor: rgb(26, 25, 25);
//     --genTextColor:  rgb(233, 233, 233);
//     --elementColor: rgb(32, 32, 32);
//     --sectorColor:  rgb(41, 41, 41);
//     --sectorBorderColor: rgba(255, 204, 0, 0.514);
//     --messageColor: hsla(114, 100%, 50%, 0.68);
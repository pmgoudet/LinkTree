const bgContainer = document.querySelector('.bg-home');
const btnPrincipal = document.querySelector('.btn-theme-principal');
const btnCyberpunk = document.querySelector('.btn-theme-cyberpunk');
const btnJapan = document.querySelector('.btn-theme-japan');
const btnPixar = document.querySelector('.btn-theme-pixar');
const photo = document.querySelector('.principal__photo');


btnPrincipal.addEventListener('click', () => {
    changeContext('principal');
})

btnCyberpunk.addEventListener('click', () => {
    changeContext('cyberpunk');
})

btnJapan.addEventListener('click', () => {
    changeContext('japan');
})

btnPixar.addEventListener('click', () => {
    changeContext('pixar');
})


function changeContext(context) {
    bgContainer.setAttribute('data-context', context);
    photo.setAttribute('src', `assets/img/photo-${context}.png`);
    let title = document.querySelector('.principal__title');
    if (context == "pixar") {
        title.style.fontSize = "32px";
    } else if (context == "japan") {
        title.style.fontSize = "26px";
    } else if (context == "principal") {
        title.style.fontSize = "23px";
    } else {
        title.style.fontSize = "28px";
    }
}

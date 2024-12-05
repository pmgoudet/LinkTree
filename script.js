let btn = document.querySelector('.menu-btn');
btn.addEventListener('click', button)

function changeImg() {
    let img = document.querySelector('.img');
    let page = (img.classList[1]);
    const width = window.innerWidth;

    if (width < 480) {
        img.src = `../assets/img/minutos/maquettes/mobile-${page}.jpg`;
    } else if (width >= 480 && width < 1024) {
        img.src = `../assets/img/minutos/maquettes/tablet-${page}.jpg`;
    } else {
        img.src = `../assets/img/minutos/maquettes/desk-${page}.jpg`;
    }
}

function button() {
    let menu = document.querySelector('.menu');
    let container = document.querySelector('.menu-container');
    const width = window.innerWidth;
    if (width < 1024) {
        if (container.style.display == 'none') {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
}

changeImg();

window.addEventListener('resize', changeImg);
z
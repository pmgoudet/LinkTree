//////////////////////////////////////////////////////////
///////                                         //////////
///////           MAQUETTES - MINUTOS           //////////
///////                                         //////////
//////////////////////////////////////////////////////////



let btn = document.querySelector('.menu-btn');
btn.addEventListener('click', button);

function changeImg() {
    let img = document.querySelector('.img');
    let page = (img.classList[1]);
    const width = window.innerWidth;
    
    if (width < 480) {
        img.src = `../img/minutos/maquettes/mobile-${page}.jpg`;
    } else if (width >= 480 && width < 1024) {
        img.src = `../img/minutos/maquettes/tablet-${page}.jpg`;
    } else {
        img.src = `../img/minutos/maquettes/desk-${page}.jpg`;
    }
}

function button() {
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

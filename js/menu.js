// menu
const hambuerguerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay');
let currentDropdown = navOverlay;

AOS.init();

hambuerguerIcon.addEventListener('click', ()=>{
    hambuerguerIcon.classList.toggle('nav__hamburguer--open');

    navOverlay.classList.toggle('nav__overlay--show');
});

navOverlay.addEventListener('click', (e)=>{
    e.preventDefault();
    const currentElement = e.target;
    
    if(isActive(currentElement, 'nav__parent')){

        // Rotacionde las arrow 180 deg
        currentElement.children[0].classList.toggle('nav__parent--open');
        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu);

        if(window.innerWidth < 768){

            let height = (subMenu.clientHeight ==0)
                        ? subMenu.scrollHeight : 0;

            subMenu.style.height = `${height}px`;
        }else{

            if(!isActive(subMenu, 'nav__inner--show') ){
                closeDropdown(currentDropdown);
            }
            subMenu.classList.toggle('nav__inner--show');
            currentDropdown = subMenu;
        }
    }
});

function isActive(element, string){
    return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown){
    if(isActive(currentDropdown, 'nav__inner--show')){
        currentDropdown.classList.remove('nav__inner--show');
    }
}

window.addEventListener('resize', ()=>{
    closeDropdown(currentDropdown);

    if(window.innerWidth > 768){
        const navInners = document.querySelector('.nav__inner');

        navInners.forEach(navInners =>{
            navInners.style.height = '';
        });
    }
});

// Portafolio

const grid = new Muuri('.grid',{
    layout: {
        rounding: false,
    }
});

window.addEventListener('load', ()=>{
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes--cargadas');

    const enlaces = document.querySelectorAll('#nav__pictures a');
    enlaces.forEach( (elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlaces) => enlaces.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categorias]') : grid.filter(`[data-categorias="${categoria}"]`);
        });
    });
});

// Overlay Modificador

// const modal = document.getElementById('overlay');
// document.querySelectorAll('.grid .item img').forEach((elemento) =>{

//     const ruta = elemento.getAttribute('src');
//     const descripcion = elemento.parentNode.parentNode.dataSet.descripcion;
//     console.log(descripcion);
    
//     // elementos.addEventListener('click', () =>{
//     //     modal.classList.add('activo')
//     // });

//     // // Button they close
//     // document.querySelector('#btns-cerrar-popop').addEventListener('click', () => {
//     //     modal.classList.remove('activo');
//     // });

//     // // 
//     // modal.addEventListener('click', (evento) => {
//     //     evento.target.id === 'overlay' ? modal.classList.remove('activo') : '';
//     // });
// });


// Play video

// const playVideo = document.getElementById('play__video');
// document.querySelectorAll('.play__content .play__icon i').forEach((elementos) =>{
//     const ruta = elementos.getAttribute('class');
    
//     elementos.addEventListener('click', () =>{
//         playVideo.classList.add('activo')
//     });

//     // Button they close
//     document.querySelector('#btn-cerrar-popop').addEventListener('click', () => {
//         playVideo.classList.remove('activo');
//     });

//     // 
//     playVideo.addEventListener('click', (evento) => {
//         evento.target.id === 'playVideo' ? playVideo.classList.remove('activo') : '';
//     });
// });

// const ctaPrimero = document.querySelector('.cta__pictures--a2');
// const imgFigure = document.querySelector('.img__figure');

// ctaPrimero.addEventListener('click', ()=>{
//     ctaPrimero.classList.toggle('cta__pictures--img');

//     imgFigure.classList.toggle('img__figure--js');
// });


// (function(){
//     const openButton = document.querySelector('.nav__menu'); // declaracion de variables
//     const menu = document.querySelector('.nav__link');
//     const closeMenu = document.querySelector('.nav__close');

//     openButton.addEventListener('click', ()=>{ // Variable Declarada
//         menu.classList.add('nav__link--show'); //
//     })

//     closeMenu.addEventListener('click', ()=>{
//         menu.classList.remove('nav__link--show');
//     });

// })();

// (function(){
//     const darClickButton = document.querySelector('.icono de muenu ');
//     const menuNavegacion = document.querySelector('.selecione la clase de el contenedor de los link de navegacion')
//     const serrarMenu = document.querySelector('. seleciona la clade de la x para salir');

//     darClickButton.addEventListener('al darle click o precionar se vera el menu desplegable', ()=>{
//         menu.classList.add('se manda a llamar la clase que a creado');
//     });

//     serrarMenu.addEventListener('click', ()=>{
//         menu.classList.remove('nav__link--show esta clase se removera y saldra de su propio flujo');
//     });

// })();


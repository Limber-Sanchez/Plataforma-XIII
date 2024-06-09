let ubicacionPrincipal = window.pageYOffset;

window.addEventListener('scroll', function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;
})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semafaro = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
    if(semafaro){
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semafaro = false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semafaro = true;
    }


    enlacesHeader.classList.toggle("menudos")
})
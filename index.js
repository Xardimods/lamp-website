let light = document.getElementById("light");
let intervalID = null;
let parpadeo = false;
let luz = false;
let contador = 0;


// PARA QUE EL EFECTO SE APLIQUE Y SE MANTENGA ENCENDIDO

function toggleBtnEncendido() {
    iniciarParpadeoEncendido();
    luz = true;
    light.classList.add("on");
    setTimeout(detenerParpadeoEncendido, 2000);
}

function efectoParpadeoEncendido() {
    parpadeo = !parpadeo;
    if (parpadeo && luz) {
        light.classList.add("on");
    } else {
        light.classList.remove("on");
    }
}

function iniciarParpadeoEncendido() {
    if (!intervalID) {
        parpadeo = true;
        intervalID = setInterval(efectoParpadeoEncendido, 40);
        setTimeout(detenerParpadeoEncendido, 1500);
    }
}

function detenerParpadeoEncendido() {
    clearTimeout(intervalID);
    intervalID = null;
    light.classList.add("on");
    luz = false;
    setTimeout(toggleBtnApagado, 3000);
}


// PARA APLICAR EFECTO, PERO PARA APAGADO 

function toggleBtnApagado() {
    iniciarParpadeoApagado();
    luz = true;
    light.classList.remove("on");
}

function efectoParpadeoApagado() {
    parpadeo = !parpadeo;
    if (parpadeo && luz) {
        light.classList.add("on");
    } else {
        light.classList.remove("on");
    }
}

function iniciarParpadeoApagado() {
    if (!intervalID) {
        parpadeo = true;
        intervalID = setInterval(efectoParpadeoApagado, 30);
        setTimeout(detenerParpadeoApagado, 1500);
    }
}

function detenerParpadeoApagado() {
    clearTimeout(intervalID);
    intervalID = null;
    light.classList.remove("on");
    luz = false;
    setTimeout(toggleBtnEncendido, 3000);
}


// Cambiar entre uno y otro 

function toggleLightLoop() {
    contador++;
    if (contador % 2 === 1) {
        toggleBtnEncendido();
    } else {
        toggleBtnApagado();
    }
}

window.onload = function () {
    toggleLightLoop();
};
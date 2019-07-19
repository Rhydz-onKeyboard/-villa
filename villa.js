document.addEventListener("keydown", movimientoTecladoDown);
document.addEventListener("keyup", movimientoTecladoUp);
var vp = document.getElementById("villap");
var papel = vp.getContext("2d");


//se define objeto teclas con los valores numericos de js para las flechas del teclado.
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}



// definir fondo como objeto, darle una fuente de la imagen y un estado para saber si está cargada.
var fondo = {
    url: "tile.png",
    cargaOk: false
}

// en js al definir objeto no se puede agregar un atributo como imagen directamente
// entonces le damos ese atributo aqui, ademas se le pasa el directorio o nombre de la imagen
// se espera hasta el evento carga para cargar la imagen y despues utilizar la función.
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

// se define la funcion, se cambia el estado y se utiliza la funcion dibujar.
function cargarFondo()
{
    fondo.cargaOk = true;
    dibujarR1();
}

var gnio = {
    urlR1: "gnioR1.png",
    urlR2: "gnioR2.png",
    urlL1: "gnioL1.png",
    urlL2: "gnioL2.png",
    urlU1: "gnioU1.png",
    urlU2: "gnioU2.png",
    urlD1: "gnioD1.png",
    urlD2: "gnioD2.png",
    cargaOk: false,
    x: (randomi (0,7)*60),
    y: (randomi (0,7)*60),
    movimiento: 5
}

gnio.imagenR1 = new Image();
gnio.imagenR1.src = gnio.urlR1;
gnio.imagenR2 = new Image();
gnio.imagenR2.src = gnio.urlR2;
gnio.imagenL1 = new Image();
gnio.imagenL1.src = gnio.urlL1;
gnio.imagenL2 = new Image();
gnio.imagenL2.src = gnio.urlL2;
gnio.imagenU1 = new Image();
gnio.imagenU1.src = gnio.urlU1;
gnio.imagenU2 = new Image();
gnio.imagenU2.src = gnio.urlU2;
gnio.imagenD1 = new Image();
gnio.imagenD1.src = gnio.urlD1;
gnio.imagenD2 = new Image();
gnio.imagenD2.src = gnio.urlD2;
gnio.imagenR1.addEventListener("load", cargarGnio);
gnio.imagenR2.addEventListener("load", cargarGnio);
gnio.imagenL1.addEventListener("load", cargarGnio);
gnio.imagenL2.addEventListener("load", cargarGnio);
gnio.imagenU1.addEventListener("load", cargarGnio);
gnio.imagenU2.addEventListener("load", cargarGnio);
gnio.imagenD1.addEventListener("load", cargarGnio);
gnio.imagenD2.addEventListener("load", cargarGnio);



function cargarGnio()
{
    gnio.cargaOk = true;
    dibujarR1();
}


// se define una variable para que tenga un numero random uilizando la funcion randomi


// la funcion dibuja la imagen en el linezo (canvas), en las coordenadas correspondientes.
//dentro del if se revisa el estado antes de dibujar
function dibujarR1()
{
    if (fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (gnio.cargaOk)
    {
        papel.drawImage(gnio.imagenR1, gnio.x, gnio.y);
    }

}

function dibujarR2()
{
    if (fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (gnio.cargaOk)
    {
        papel.drawImage(gnio.imagenR2, gnio.x, gnio.y);
    }

}

function dibujarL1()
{
    if (fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (gnio.cargaOk)
    {
        papel.drawImage(gnio.imagenL1, gnio.x, gnio.y);
    }

}

function dibujarL2()
{
    if (fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (gnio.cargaOk)
    {
        papel.drawImage(gnio.imagenL2, gnio.x, gnio.y);
    }

}

function dibujarU1()
{
    if (fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (gnio.cargaOk)
    {
        papel.drawImage(gnio.imagenU1, gnio.x, gnio.y);
    }

}

function dibujarU2()
{
    if (fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (gnio.cargaOk)
    {
        papel.drawImage(gnio.imagenU2, gnio.x, gnio.y);
    }

}

function dibujarD1()
{
    if (fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (gnio.cargaOk)
    {
        papel.drawImage(gnio.imagenD1, gnio.x, gnio.y);
    }

}

function dibujarD2()
{
    if (fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (gnio.cargaOk)
    {
        papel.drawImage(gnio.imagenD2, gnio.x, gnio.y);
    }

}

function movimientoTecladoDown(evento)
{
    switch(evento.keyCode){
        case teclas.LEFT:
            gnio.x -= gnio.movimiento;
            window.requestAnimationFrame(dibujarL1);
        break;
        case teclas.UP:
            gnio.y -= gnio.movimiento;
            window.requestAnimationFrame(dibujarU1);
        break;
        case teclas.RIGHT:
            gnio.x += gnio.movimiento;
            window.requestAnimationFrame(dibujarR1);
        break;
        case teclas.DOWN:
            gnio.y += gnio.movimiento;
            window.requestAnimationFrame(dibujarD1);
        break;
        default:
            console.log("e' otra tecla");
        break
    }
}

function movimientoTecladoUp(evento)
{
    switch(evento.keyCode){
        case teclas.LEFT:
            gnio.x -= gnio.movimiento;
            window.requestAnimationFrame(dibujarL2);
        break;
        case teclas.UP:
            gnio.y -= gnio.movimiento;
            window.requestAnimationFrame(dibujarU2);
        break;
        case teclas.RIGHT:
            gnio.x += gnio.movimiento;
            window.requestAnimationFrame(dibujarR2);
        break;
        case teclas.DOWN:
            gnio.y += gnio.movimiento;
            window.requestAnimationFrame(dibujarD2);
        break;
        default:
            console.log("e' otra tecla");
        break
    }
}

// función random, math.floor redondea al entero inferior, math.random genera un numero al azar
//en % decimal entre 0 y 1 sin ser 0 y 1, min y maxi es el rango donde se generará el numero aleatorio
function randomi(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
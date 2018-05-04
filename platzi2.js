var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39
};

var x1 = 250;
var y1 = 420;
var lpm = 0;

document.addEventListener("keydown", dibujarTeclado);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};


var cantidad = aleatorio(0, 20); // cantidad de vacas

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK == true)
  {
    console.log(cantidad);
    for(var v=0; v<cantidad; v++)
    {
      var x = aleatorio(0, 5); // Para que no queden apiñadas, se divide 500 entre 80 que es lo que miden las imagenes, da 6, pero queda saliendose del recuadro así que se usa 5, el cual se vuelve a multiplicar por 80 en la siguiente línea
      var y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }
    if(cerdo.cargaOK == true)
    {
      papel.drawImage(cerdo.imagen, x1, y1);
      lpm = 1;

    }
  }
}


function dibujarTeclado(evento)
{

  var movimiento = 5;


  switch(evento.keyCode)
  {
    case teclas.UP:
      y1 = y1 - movimiento;
      dibujar();
    break;
    case teclas.DOWN:
      y1 = y1 + movimiento;
      dibujar();
    break;
    case teclas.RIGHT:
      x1 = x1 + movimiento;
      dibujar();
    break;
    case teclas.LEFT:
      x1 = x1 - movimiento;
      dibujar();
    break;
  }
}



function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

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
var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var cantidadv = aleatorio(0, 10); // cantidad de vacas
var cantidadc = aleatorio(0, 10);
var cantidadp = aleatorio(0, 10);


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

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
function cargarPollos()
{
  pollo.cargaOK = true;
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
    console.log(cantidadv);
    for(var v=0; v<cantidadv; v++)
    {
      var x = aleatorio(0, 5); // Para que no queden apiñadas, se divide 500 entre 80 que es lo que miden las imagenes, da 6, pero queda saliendose del recuadro así que se usa 5, el cual se vuelve a multiplicar por 80 en la siguiente línea
      var y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK == true)
  {
    console.log(cantidadc);
    for(var c=0; c<cantidadc; c++)
    {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      x = x * 65;
      y = y * 65;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if(pollo.cargaOK == true)
  {
    console.log(cantidadp);
    for(var p=0; p<cantidadp; p++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      x = x * 45;
      y = y * 45;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

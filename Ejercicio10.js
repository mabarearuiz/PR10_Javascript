
function saludo() 
{
  var n = document.getElementById("nombre").value;

  fecha = new Date();

  hora = fecha.getHours();
  //alert(hora);
  mensaje = "";

  if (hora >= 7 && hora <= 12) {
    mensaje = " Buenas días";
  } else if (hora >= 12 && hora <= 20) {
    mensaje = " Buenas tardes";
  } else {
    mensaje = " Buenas noches";
  }

  var texto = "Hola " + n + mensaje;

  document.write("<!DOCTYPE html> <html lang='es'>");
  document.write("<head> <meta charset='UTF-8' />");
  document.write("<meta http-equiv='X-UA-Compatible' content='IE=edge' />");
  document.write(" <meta name='viewport' content='width=device-width, initial-scale=1.0' />" );
  document.write("<title>Ejercicio 10</title>");
  document.write(" <link rel='stylesheet' type='text/css' href='./css/estilo.css'>" );
  document.write("</head>");
  document.write("<body>");
  document.write("<p class='saludo'>" + texto + " </p>");
  document.write("</body>");
  document.write("</html>");
}

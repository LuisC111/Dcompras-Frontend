function validar() { 

  let nombreNegocio = document.formulario.NombreNegocio;
  let nombrePropietario = document.formulario.NombrePropietario;
  let nit = document.formulario.Nit;
  let razonSocial = document.formulario.RazonSocial;
  let telefono = document.formulario.Telefono;
  let fechaFundacion = document.formulario.FechaFundacion;
  let tipoNegocio = document.formulario.TipoNegocio;
  


  
  let aviso = document.getElementById("error");
  let aviso1 = document.getElementById("error1");
  let aviso2 = document.getElementById("error2");
  let aviso3 = document.getElementById("error3");
  let aviso4 = document.getElementById("error4");
  let aviso5 = document.getElementById("error5");
  let aviso6 = document.getElementById("error6");


  aviso.innerHTML = ""
  aviso1.innerHTML = ""
  aviso2.innerHTML = ""
  aviso3.innerHTML = ""
  aviso4.innerHTML = ""
  aviso5.innerHTML = ""
  aviso6.innerHTML = ""
  
  let enviar = "si"
  
  if (nombreNegocio.value == "" || nombreNegocio.value.indexOf(" ") == 0) {
    
     let texto = "Es obligatorio introducir el nombre del negocio."  
     aviso.innerHTML += texto
     enviar = "no"
     }


     if (nombrePropietario.value == "" || nombrePropietario.value.indexOf(" ") == 0 ) {
      let texto = "Es obligatorio introducir el nombre del propietario."  
      aviso1.innerHTML += texto
      enviar = "no"
      }


     if (nit.value == "" || nit.value.indexOf(" ") == 0 ) {
     let texto = "Es obligatorio introducir el Nit del Negocio."  
     aviso2.innerHTML += texto
     enviar = "no"
     }

     if (razonSocial.value == "" || razonSocial.value.indexOf(" ") == 0 ) {
      let texto = "Es obligatorio introducir la razon social del Negocio."  
      aviso3.innerHTML += texto
      enviar = "no"
      }
      
      if (telefono.value == "" || telefono.value.indexOf(" ") == 0 ) {
        let texto = "Es obligatorio introducir el numero de telefono del Negocio."  
        aviso4.innerHTML += texto
        enviar = "no"
        }

        if (fechaFundacion.value == "" || fechaFundacion.value.indexOf(" ") == 0 ) {
          let texto = "Es obligatorio introducir la fecha de fundación del Negocio."  
          aviso5.innerHTML += texto
          enviar = "no"
          }

          if (tipoNegocio.value == "" || tipoNegocio.value.indexOf(" ") == 0 ) {
            let texto = "Es obligatorio introducir el tipo de Negocio."  
            aviso6.innerHTML += texto
            enviar = "no"
            }


  if (enviar == "no") {
    swal('Error!', 'Ha ocurrido un error, revisa todos los campos!', 'error'); 
    return false
  }(enviar == "si"){
  swal("Buen trabajo!", "Se ha enviado correctamente la petición de negocio!", "success");
  nombreNegocio.value = "";
  nombrePropietario.value = "";
  nit.value = "";
  razonSocial.value = "";
  telefono.value = "";
  fechaFundacion.value = "";
  tipoNegocio.value = "";

  }

  
  }

  function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }


function restaurar() {
  let aviso = document.getElementById("error");
  aviso.innerHTML = ""

  }






/*NombreNegocio
NombrePropietario
Nit
RazonSocial
Telefono
FechaFundacion
TipoNegocio

error
*/
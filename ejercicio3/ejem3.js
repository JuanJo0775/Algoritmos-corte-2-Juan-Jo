//muestra la lista de asientos de la sala 1
const sala1 = Array(10).fill(false);
//muestra la lista de asientos de la sala 2
const sala2 = Array(10).fill(false);

// esta funcion muestra la diponiblilidad de sillas en ambas salas 
function verDisponibilidad() {
  alert("Sala 1:");
  //muestra los asientos disponibles o reservados de la sala 1
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  //muestra los asientos disponibles o reservados de la sala 2
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

// esta fucnion reserva los asientos en alguna de las dos salas 
function reservarAsiento() {
  // se elije que sala para reservar el asiento
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  // este if verifica si el asiento esta reservado o esta disponible para ser reservado 
  if (sala === "1" && !sala1[asiento]) {
    // marca el asiento reservado 
    sala1[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}

// esta funcion muestra los asientos reservados de la sala y mostra como si empezara la peli 
function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  // este if muestra si hay asientos libres para ver la peli o todos ya estan reservados 
  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}

// este es como el menu de la sala de cine, para ver la peli
while (true) {
  console.log("hola")
  const opcion = prompt("Bienvenido a la sala de cine. Ingresa tu opción:"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" + " 4. Salir" );

  switch (opcion) {
    case "1":
      // se ve la disponibilidad de los asientos 
      verDisponibilidad();
      break;
    case "2":
      // se hace las reservas de los asientos 
      reservarAsiento();
      break;
    case "3":
      // se ve si aun quedan asientos disponibles y empieza la peli
      verPelicula();
      break;
    case "4":
      //sale de la pagina 
      alert("¡Hasta luego!");
        break;
    default:
      // muestra si la opcion no es validad 
      alert("Opción no válida. Intenta de nuevo.");
  }
}
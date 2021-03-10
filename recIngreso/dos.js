function mostrar()
{
    let tipo; 
    let cantidad; 
    let nombre; 
    let sexo; 
    let nota;
    let edad;
    let promedioMas; 
    let nMasJoven; 
    let porcF = 0; 
    let porcS = 0;
    let edadR; 
    let nombreR;
    let contF = 0; 
    let contQ = 0; 
    let contS = 0;
    let acumF = 0; 
    let acumQ = 0; 
    let acumS = 0;
    let maxProm; 
    let flagProm = 0;
    let minEdad; 
    let flagMinEdad = 0;
    let maxMaterias; 
    let flagMaterias = 0;
    let contTotal = 0;
    let nombMaxMat = ""; 
    let edadMaxMat;

    for (let i = 0; i < 500; i++) {

      nombre = prompt("Ingrese su nombre: ");
      while (!isNaN(nombre)) {

      tipo = prompt("Ingrese tipo carrera (quimica, fisica, sistemas)").toLowerCase();
      while (!(tipo == "quimica" || tipo == "fisica" || tipo == "sistemas")) {
        tipo = prompt("Ingrese tipo carrera (quimica, fisica, sistemas)").toLowerCase();
      }

      sexo = prompt("Ingrese sexo (femenino, masculino, no binario)");
      while (!(sexo == "femenino" || sexo == "masculino" || sexo == "no binario")) {
        sexo = prompt("Reingrese sexo (femenino, masculino, no binario)");
      }

      cantidad = parseInt(prompt("Ingrese cantidad de materias (1 a 5)"));
      while (isNaN(cantidad) && cantidad < 0 || cantidad > 5) {
        cantidad = parseInt(prompt("Reingrese cantidad de materias (1 a 5)"));
      }

      nota = prompt("Ingrese nota promedio (entre 0 y 10)");
      while (isNaN(nota) && nota < 0 || nota > 10) {
        nota = prompt("Reigrese nota promedio (entre 0 y 10)");
      }

      edad = parseInt(prompt("Ingrese su edad"));
      while (isNaN(edad) && edad < 18 || edad > 100) {
        edad = parseInt(prompt("Reingrese su edad"));
      }

      switch (tipo) 
      { 
          case "fisica":
          contF++;
          acumF += nota;
          break;
        
          case "quimica":
          contQ++;
          acumQ += nota;
          break;
        
          case "sistemas":
          contS++;
          acumS += nota;
          break;
      }
      if (tipo == "fisica") { 
        if (flagProm == 0) { 
          flagProm = 1;
          maxProm = nota;
          promedioMas = nombre; 
        } else if (maxProm < nota) {
          maxProm = nota;
          promedioMas = nombre; 
        }
      }

      if (sexo == "femenino") {
        if (flagMinEdad == 0) { 
          flagMinEdad = 1;
          minEdad = edad; 
          nombreR = nombre;
        } else if (minEdad > edad) {
          minEdad = edad; 
          nombreR = nombre; 
        }
      }

      if (tipo != "quimica") 
      {
        if (flagMaterias == 0) 
        {
          flagMaterias = 1;
          maxMaterias = cantidad;
          edadMaxMat = edad;
          nombMaxMat = nombre;
        } 
        else if (maxMaterias < cantidad) 
        {
          maxMaterias = cantidad;
          edadMaxMat = edad;
          nombMaxMat = nombre;
        }
      }

      contTotal++;
    }

    porcF = contF * 100 / contTotal;
    porcQ = contQ * 100 / contTotal;
    porcS = contS * 100 / contTotal;
    
    //a
    console.log("El nombre del mejor promedio de los alumnos que estudian fisica (Sin importar el sexo): " + promedioMas);
    
    //b
    console.log("El nombre de la alumna mas joven: " + nombreR);
    
    //c
    if (porcF == 0) { 
      console.log("el porcentaje de las materias: " + "\nQuimica: "+ porcQ +
        "\nFisica: no existe" + "\nNo Binario: " + porcS);
    } else if (porcQ == 0) { 
      console.log("el porcentaje de las materias: " + "\nQuimica: no existe" +
        "\nFisica: " + porcF + "\nNo Binario: " + porcS);
    } else if (porcS == 0) { 
      console.log("el porcentaje de las materias: " + "\nQuimica: " + porcF +
        "\nFisica: " + porcF + "\nNo Binario: no existe");
    } else { 
      console.log("el porcentaje de las materias: " + "\nQuimica: " + porcQ +
        "\nFisica: " + porcF + "\nNo Binario: " + porcS);
    }
    
    //d
    console.log("La edad y nombre del que cursa mas materias exceptuando quimica: " +
      "\nNombre: " + nombMaxMat + "\nEdad: " + edadMaxMat);
  }
}


function mostrar()
{
	let nombre;
	let sexo;
	let puesto;
	let sueldo;
	let repeat = false;
	//
	let acumPuestoP = 0;
	let acumPuestoA = 0;
	let acumPuestoQ = 0;
	let contPuestoP = 0;
	let contPuestoA = 0;
	let contPuestoQ = 0;
	let promPuestoP;
	let promPuestoA;
	let promPuestoQ;
	let flagP = 1;
	let flagA = 1;
	let flagQ = 1;
	//
	let flagMayorSueldo= 1;
	let sexoMayorSueldo;
	let mayorSueldo = 0;
	//
	let FlagMayorSueldoF = 1;
	let nombreMayorSueldoF;
	let mayorSueldoF = 0;
	//
	let flagNobin = 1;
	let contNoBin = 0;

	do{

		nombre = prompt("Ingrese el nombre del empleado: ");
	
		sexo = prompt("Ingrese sexo (femenino, masculino, no binario): ")
		while(!(sexo === "femenino" || sexo === "masculino" || sexo === "no binario"))
		{
		  sexo = prompt("Error. Reingrese sexo (femenino, masculino, no binario): ");
		}
				
		puesto = prompt("Ingrese puesto (programador, analista, Qa): ").toLowerCase()
		while(!(puesto === "programador" || puesto === "analista" || puesto === "Qa"))
		{
		  puesto = prompt("Error. Reingrese puesto (programador, analista, Qa): ").toLowerCase();
		}

		sueldo = parseInt(prompt("Ingrese el sueldo (entre 15000 y 70000): "));
		while(sueldo < 15000 || sueldo > 70000 || isNaN(sueldo))
		{
		  sueldo = parseInt(prompt("Error. Reingrese el sueldo (entre 15000 y 70000): "));
		}

		//a)
		if(flagP || puesto == "programador")
		{
			acumPuestoP += sueldo;
			contPuestoP ++;
			flagP = 0;
		}
		else if(flagA || puesto == "analista")
		{
			acumPuestoA += sueldo;
			contPuestoA ++;
			flagA = 0;
		}
		else
		{
			acumPuestoQ += sueldo;
			contPuestoQ ++;
			flagQ = 0;
		}
		//b)
		if( flagMayorSueldo || (sueldo > mayorSueldo))
		{
			mayorSueldo += sueldo;
			sexoMayorSueldo = sexo;	
			flagMayorSueldo = 0;	
		}
		
		//c)
		if(FlagMayorSueldoF || (sueldo > mayorSueldoF && sexo != "femenino"))
		{
			mayorSueldoF += sueldo;
			nombreMayorSueldoF = nombre;
			FlagMayorSueldoF = 0;
		}

		//d)
		if(flagNobin || (sexo == "no binario" && sueldo >= 20000 && sueldo <= 55000 && puesto == "programador"))
		{
			contNoBin ++;
		}

		repeat = confirm("Quiere ingresar los datos de otro empleado?");

	}while(repeat)  

	//punto a
	if(contPuestoP != 0)
	{
	promPuestoP = acumPuestoP / contPuestoP; 
	}
	if(contPuestoA != 0)
	{
	promPuestoA = acumPuestoA/ contPuestoA; 
	}
	if(contPuestoQ != 0)
	{
	promPuestoQ = acumPuestoQ / contPuestoQ; 
	}

	if(flagP)
	{
		console.log("No hay promedio para el puesto de programador.");
	}
	else
	{
		console.log("Promedio de sueldo de Programador: " + promPuestoP);
	}
	if(flagA)
	{
		console.log("No hay promedio para el puesto de analista.");
	}
	else
	{
		console.log("Promedio de sueldo de analista: " + promPuestoA);
	}
	if(flagQ)
	{
		console.log("No hay promedio para el puesto de Qa.");
	}
	else
	{
		console.log("Promedio de sueldo de Qa: " + promPuestoQ);
	}
	//b)
	
	if(flagMayorSueldo)
	{
		console.log("Ninguno de los sexo percibe un sueldo mayor");
	}
	else
	{
	console.log("El sexo del que percibe el mayor sueldo es: " + sexoMayorSueldo);
	}

	//c)
	if(FlagMayorSueldoF)
	{
		console.log("No se ingresaron femeninos.");
	}
	else
	{
		console.log("El nombre del femenino con mayor sueldo es: " + nombreMayorSueldoF);
	}

	//d)
	if(flagNobin)
	{
		console.log("No se ingresaron programadores no binarios.");
	}
	else
	{
		console.log("La cantidad de programadores no binarios que cobran sueldo entre 20000 y 55000 es: " + contNoBin);
	}


}

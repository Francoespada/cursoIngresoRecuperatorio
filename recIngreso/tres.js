function mostrar()
{
	/* 
	nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento
	*/
	let nombre; 
    let cantidad; 
    let marca; 
    let precio; 
    let precioTotal = 0;
    let descFelipe = 0; 
    let cantFelipe = 0; 
    let precioFelipe = 0;
    let descArg = 0; 
    let cantArg = 0; 
    let precioArg = 0;
    let contF = 0; 
    let contA = 0; 
    let contI = 0; 
    let contTotal = 0;
    let promF = 0; 
    let promA = 0; 
    let promI = 0;
    let perdida = 0;
    let flag = 0; 
    let maxVenta = 0; 
    let nombreMax = "";
	let repeat = false;

	do
	{
		nombre= prompt("Ingrese el nombre del cliente: ");

		cantidad = parseInt(prompt("Ingrese la cantidad de lamparas: "));
		while(isNaN(cantidad))
		{
			cantidad = parseInt(prompt("Error. Reingrese la cantidad de lamparas: "));
		}

		marca = prompt("Ingrese marca de la lampara:").toLowerCase();

        while (!(marca == "felipelamparas" || marca == "argentinaluz" || marca == "illuminatis"))
		{
            marca = prompt("Error. ingrese marca de la lampara:").toLowerCase();
        }

        precio = parseInt(prompt("Ingrese el precio de la lamapra:"));
        while (isNaN(precio) && precio <= 0)
		{
            precio = parseInt(prompt("Error. ingrese el precio de la lamapra:"));
		}

		switch (marca) 
		{
			case "felipelamaparas":
				contF++;
				cantFelipe += cantidad;
				precioFelipe += precio * cantidad;
				break;
			
			case "argentinaluz":
				contF++;
				cantArg += cantidad;
				precioArg += precio * cantidad;
				break;
	
			case "illuminatis":
				contI++;
				break;
		}
	
		precioTotal += precio * cantidad;
	
		if (flag == 0) 
		{
			maxVenta = precioTotal;
			nombreMax = marca;
			flag = 1;
		} 
		else if (maxVenta < precioTotal) 
		{
			maxVenta = precioTotal;
			nombreMax = marca;
		}
	
		contTotal++;		

		repeat = prompt("Quiere continuar ingresando datos?");
	}while(repeat)


	//descuentos
	if (cantFelipe >= 5) 
	{
		descFelipe = precioFelipe - (precioFelipe * 0.10);
	}

	if (cantArg >= 3)
	{
		descArg = precioArg - (precioArg * 0.05);
	}

	perdida = Math.round(precioTotal * 100 / (descArg + descFelipe)); //la perdida en porcentaje
	
	//promedios
	promF = contF / contTotal;
	promA = contA / contTotal;
	promI = contI / contTotal;
	//promedios

	console.log("a) Cuanto recauda la empresa en concepto de todas las ventas realizadas: " + precioTotal + "\n" + "-b  Perdió " + perdida + "%" + "\n" + "-c El promedio: " + "\nPromFelipe: " + promF + "\nPromArg: " + promA + "\nPromIllu: " + promI + "\n" + "-d La marca que mas ventas realizó: " + nombreMax + " con un total de " + maxVenta);
	


}

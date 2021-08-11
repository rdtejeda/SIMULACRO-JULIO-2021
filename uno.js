/*Alumno Tejeda Roberto
  DNI 18223125
Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.


*/
function mostrar()
{
	var i;
	i=0;
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var capacidad;
	var banderamasbaratossd;
	banderamasbaratossd=true;
	var	unidadesssd;
	var marcassd;
	var	prciomasbarto;
	var banderamayorhdd;
	banderamayorhdd=true;
	var	mayorpreciohdd;
	var	capacidahdd;
	var	cantidadhdd;
	var acumulohdd;
	acumulohdd=0;
	for (i = 0; i < 5 ; i++)
	{
		//Tipo: (validar "HDD", "SSD" o "SSDM2")
		tipo= prompt("Ingrese 'HDD', 'SSD' ó 'SSDM2'");
		while (tipo != "HDD" && tipo != "SSD" && tipo != "SSDM") 
		{
			tipo= prompt("ERROR - Ingrese 'HDD', 'SSD' ó 'SSDM2'");
		}
		//Precio: (validar entre 5000 y 18000),.
		precio = prompt("Ingrese Precio: ( entre 5000 y 18000)");
		precio = parseInt(precio);
		while( precio<5000 || precio>18000)
		  {
			precio = prompt("Ingrese Precio: ( entre 5000 y 18000)");
			precio = parseInt(precio);   
		  }
		//Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
		cantidad = prompt("Ingrese Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades)");
		cantidad = parseInt(cantidad);
		while( cantidad<=0 || cantidad>50)
		  {
			cantidad = prompt("ERROR - Ingrese Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades)");
			cantidad = parseInt(cantidad);     
		  }
		//Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
		marca= prompt("Ingrese Marca: (“Seagate”, “Western Digital”, “Kingston”)");
		while (marca != "Seagate" && marca != "Western Digital" && marca != "Kingston") 
		{
			marca= prompt("ERROR - Ingrese Marca: (“Seagate”, “Western Digital”, “Kingston”)");
		}
		//Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
		capacidad= prompt("Ingrese Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)");
		while (capacidad != "250Gb" && capacidad != "500Gb" && capacidad != "1Tb" && capacidad!= "2Tb") 
		{
			capacidad= prompt("ERROR - Ingrese Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)");
		}
		switch (tipo) {
			case "HDD"://b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades  disponibles. 
			if (banderamayorhdd) 
            {
                banderamayorhdd=false;
					mayorpreciohdd=precio;
					capacidahdd=capacidad;
					cantidadhdd=cantidad;
            } 
             else 
               {
                   if (precio>mayorpreciohdd) 
                   {
					capacidahdd=capacidad;
					cantidadhdd=cantidad;
					mayorpreciohdd=precio;
                   }
               }
			   acumulohdd=acumulohdd+cantidad;  //c) Cuántas unidades de HDD hay en total.

				break;
				case "SSD":
					if (banderamasbaratossd) // a) Del más barato de los SSD, la cantidad de unidades y marca.
		
					{
						banderamasbaratossd=false;
						unidadesssd=cantidad;
						marcassd=marca;
					    prciomasbarto=precio;
					} 
					 else 
					   {
						   if (precio<prciomasbarto) 
						   {
							unidadesssd=cantidad;
							marcassd=marca;
					    	prciomasbarto=precio;
						   }
					   }

					break;
					case "SSDM":
				
						break;
		
			default:
				break;
		}
	}

	alert("a) Del más barato de los SSD, la cantidad de unidades es "+unidadesssd+" y la  marca es "+marcassd);
	alert("b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento es "+capacidahdd+" y la cantidad de unidades disponibles es "+cantidadhdd);
	alert("c) La unidades de HDD en total son "+acumulohdd);
  	document.write("");

  /*
  if (var !=0)
  {
    alert("");
  }
  */

  /*	
	if ((isNaN(x)))
	{
	alert("No hay Datos");
	}
	else
	{
		alert("");
	}
	*/
  
	/*
	if (!(isNaN(var)))
	{
	alert("");
	}
	*/		
}
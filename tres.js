/*Alumno Tejeda Roberto
  DNI 18223125

EJERCICIO 1
Un restaurante necesita un programa que permita 
ingresar datos de los platos con su precio a pagar
y cantidad hasta que el cliente quiera. Por cada cliente, se ingresa:
plato: (validar "ravioles", "milanesa", "pizza").
precio del plato (desde 100 hasta 500)
cantidad (mas que 0)
medio de pago (validar "efectivo", "debito", "credito")
a)	El importe total de todos los clientes.
		Si el medio de pago es efectivo, se debe aplicar un 10% de descuento.
		Si el medio de pago es debito, se debe aplicar un 10% de recargo.
		Si el medio de pago es credito, se debe aplicar un 15% de recargo.
b)	El importe total de todos los clientes que pagaron con débito. (aplicando el recargo del 10%)
c)	Promedio de ventas con Crédito.
d)	Promedio por plato y el plato más caro.
*/

function mostrar()
{
	var seguir;
	seguir="si";
	var plato;
	var precio;
	var cantidad;
	var pago;
	var importetotal;
	importetotal=0;
	var compraindividual;
	var descuento;
	descuento=1;
	var totalcondesc;
	totalcondesc=0;
	var totaldebito;
	totaldebito=0;
	var totaldebitoconrecargo;
	var totalcredito;
	totalcredito=0;
	var	concredito;
	concredito=0;
	var promcredito;
	var cantidaddeplatos;
	cantidaddeplatos=0;
	var promedioporplato;
	var bandraplatomascaro;
	bandraplatomascaro=true;
	var platomascaro;
	var valorplatomascaro;

	while (seguir == "si")
	{
		//plato: (validar "ravioles", "milanesa", "pizza").
		plato= prompt("Ingrese plato: 'ravioles', 'milanesa', 'pizza'");
		while (plato != "ravioles" && plato != "milanesa" && plato != "pizza") 
		{
			plato= prompt("Ingrese plato: 'ravioles', 'milanesa', 'pizza'");
		}
		//	precio del plato (desde 100 hasta 500)
		precio = prompt("Ingrese precio del plato (desde 100 hasta 500)");
    	precio = parseInt(precio);
    	while( precio<100 || precio>500)
     	 {
        precio = prompt("Ingrese precio del plato (desde 100 hasta 500)");
    	precio = parseInt(precio);    
     	}
		//	cantidad (mas que 0)
		cantidad = prompt("Ingrese 	cantidad (mas que 0)");
    	cantidad = parseInt(cantidad);
   		 while( cantidad<=0)
     	 {
			cantidad = prompt("Ingrese 	cantidad (mas que 0)");
			cantidad = parseInt(cantidad);   
     	 }
		//	medio de pago (validar "efectivo", "debito", "credito")
		pago= prompt("Ingrese medio de pago (validar 'efectivo', 'debito', 'credito'");
   		 while (pago != "efectivo" && pago != "debito" && pago != "credito") 
  		  {
			pago= prompt("Ingrese medio de pago (validar 'efectivo', 'debito', 'credito'");
 	 	  }
   			//a)	El importe total de todos los clientes.
			compraindividual=precio*cantidad;   
			importetotal=importetotal+compraindividual;
		switch (pago) {
			case "debito":   // b)	El importe total de todos los clientes que pagaron con débito. (aplicando el recargo del 10%)
				totaldebito=totaldebito+compraindividual;
			case "credito":  //c)	Promedio de ventas con Crédito.
			totalcredito=totalcredito+compraindividual;
			concredito++
				break;
				default:
				break;
		}
		cantidaddeplatos=cantidaddeplatos+cantidad;
		//Si el medio de pago es efectivo, se debe aplicar un 10% de descuento.
		//Si el medio de pago es debito, se debe aplicar un 10% de recargo.
		//Si el medio de pago es credito, se debe aplicar un 15% de recargo.
			if(pago == "efectivo")
	     {
	     descuento=0.9;

	     } else {
		if (pago == "debito") {
			descuento=1.1;
		}else{
			descuento=1.15;
		}
		totalcondesc=totalcondesc+(compraindividual*descuento)
		if (bandraplatomascaro) //el plato más caro.
		{
			bandraplatomascaro=false;
			platomascaro=plato;
		   valorplatomascaro=precio;
		} 
		 else 
		   {
			   if (precio>valorplatomascaro) 
			   {
				platomascaro=plato;
		        valorplatomascaro=precio;
			   }
		   }
	 seguir=prompt("Para seguir ingrese 'si' y para terminar 'no'");
	 while (seguir!="si" && seguir!="no") 
	 {
	   seguir=prompt("ERROR - Para seguir ingrese 'si' y para terminar 'no'");
	 }
	}
 			
	}

	totaldebitoconrecargo=totaldebito*1.1;
	promcredito=totalcredito/concredito;
	promedioporplato=importetotal/cantidaddeplatos; //d)	Promedio por plato y 

	alert("a)	El importe total de todos los clientes es "+importetotal);
	alert("a)	El importe total de todos los clientes con descuento es "+totalcondesc);
	alert(" b)	El importe total de todos los clientes que pagaron con débito. (aplicando el recargo del 10%) es "+totaldebitoconrecargo);
	alert(" c)	Promedio de ventas con Crédito es "+promcredito);
	alert(" d)	Promedio por plato es "+promedioporplato+" y el plato más caro es "+platomascaro);
 }

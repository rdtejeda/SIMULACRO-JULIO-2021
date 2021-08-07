/*
FINAL de Agosto 
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
		Si el medio de pago es credito, se debe aplicar un 15% de recargo.
b)	El importe total de todos los clientes que pagaron en efectivo. (aplicando el descuento del 10%)
c)	Promedio de ventas con Debito.
d)	Promedio por plato y el más barato.

function mostrar()                          
{
 
  var seguir;
  seguir="si";
  var cantidad;
  var banderamasalto;
  banderamasalto=true;
  var masalto;

  while (seguir == "si")
  {

    cantidad = parseInt(prompt("Ingrese cantidad Mayor a 0 y menor a 5"));
    while( cantidad<=0 || cantidad>=5)
      {
         cantidad = parseInt(prompt("INGRESO ERRONEO Debe ser Mayor a 0 y menor a 5"));
      
      }


      if (banderamasalto) 
            {
                banderamasalto=false;
                masalto=cantidad;
                banderamasalto=false;
              
            } 
             else 
               {
                   if (cantidad>masalto) 
                   {
                    masalto=cantidad;
                   }
               }

   seguir=prompt("Para seguir ingrese 'si' y para terminar 'no'");
   while (seguir!="si" && seguir!="no") 
   {
     seguir=prompt("ERROR - Para seguir ingrese 'si' y para terminar 'no'");
   }
  }
}
*/
/*
Autor Tejeda Roberto
Simulacro Julio 2021 Ej 1
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


function mostrar()
{
 var tipo;
 var precio;
 var cantidad;
 var marca;
 var capacidad;
 var banderamasbarato=true;
 var banderamascaro=true;
 var ssdmasbarato;
 var ssdcantidad;
 var ssdmarca;
 var hddmascaro;
 var hddcantidad;
 var hddmarca;
 var hddcapacidad;
 var hddcantidadtotal;
 hddcantidadtotal=0;
 unidades=0;
    for (var i=0; i < 5; i=i+1) 
	{
		tipo = prompt("Ingrese Producto 'HDD', 'SSD' ó 'SSDM2'"); //Tipo: (validar "HDD", "SSD" o "SSDM2")
      while (tipo != "HDD" && tipo != "SSD" && tipo != "SSDM2" ) 
      {
        tipo = prompt("INGRESO ERRONEO Ingrese 'HDD', 'SSD' ó 'SSDM2'");
      }
      precio = parseInt(prompt("Ingrese cantidad Mayor a 5000 y 18000")); //Precio: (validar entre 5000 y 18000)
      while( precio<5000 || precio>18000)
      {
         precio = parseInt(prompt("INGRESO ERRONEO Debe ser Mayor a 5000 y menor a 18000"));
      }
      cantidad = parseInt(prompt("Ingrese cantidad Mayor a 0 y menor a 50")); //Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades)
      while( cantidad<=0 || cantidad>50)
      {
         cantidad = parseInt(prompt("INGRESO ERRONEO Debe ser Mayor a 0 y menor a 50"));
      }
      marca = prompt("Ingrese Marca “Seagate”, “Western Digital”, “Kingston”"); //Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
      while (marca != "Seagate" && marca != "Western Digital" && marca != "Kingston" ) 
      {
        marca = prompt("INGRESO ERRONEO Ingrese “Seagate”, “Western Digital”, “Kingston”");
      }
      capacidad = prompt("Ingrese Capacidad 250Gb, 500Gb, 1Tb, 2Tb"); //Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
      while (capacidad != "250Gb" && capacidad != "500Gb" && capacidad != "1Tb" && capacidad!= "2Tb") 
      {
        capacidad = prompt("INGRESO ERRONEO Ingrese Capacidad 250Gb, 500Gb, 1Tb, 2Tb");
      }
      switch (tipo) 
        {
          case "SSD": //a) Del más barato de los SSD, la cantidad de unidades y marca.
             if (banderamasbarato) 
            {
                banderamasbarato=false;
                ssdmasbarato=precio;
                ssdcantidad = cantidad;
                ssdmarca = marca;
            } 
             else 
               {
                   if (precio<ssdmasbarato) 
                   {
                     ssdmasbarato=precio;
                     ssdcantidad = cantidad;
                     ssdmarca = marca;
                   }
               }
             break;
         case "HDD": //b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades disponibles.
               hddcantidadtotal= hddcantidadtotal+cantidad;
            if (banderamascaro) 
            {
             banderamascaro=false;
             hddmascaro=precio;
             hddcantidad= cantidad;
             hddmarca = marca;
             hddcapacidad=capacidad;
            } 
               else 
               {
                if (precio>hddmascaro) 
                {
                  hddmascaro=precio;
                  hddcantidad= cantidad;
                  hddmarca = marca;
                  hddcapacidad=capacidad;
                }
               }
            break;      
         case "SSDM2":
            break;            
          default:
             break;
         }	      
   }         
    alert("Punt a) -El más barato de los SSD es la marca "+ssdmarca+" y las unidades son "+ssdcantidad+
    " Punto b) -Del tipo HDD, el de mayor precio es "+hddmascaro+" la capacidad de almacenamiento es "+hddcapacidad+" y la cantidad de unidades es "+hddcantidad+
    " Punto c) - Las unidades de HDD en total son "+hddcantidadtotal);
}*/
/*
FINAL 4 ago
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
		Si el medio de pago es credito, se debe aplicar un 15% de recargo.
b)	El importe total de todos los clientes que pagaron en efectivo. (aplicando el descuento del 10%)
c)	Promedio de ventas con Debito.
d)	Promedio por plato y el más barato.

function mostrar()
{
  var seguir;
  seguir="si";
  var plato;
  var precio;
  var cantidad;
  var pago;
  var importetotalsindescuento;
  importetotalsindescuento=0;
  var importecondescuento;
  var efete;
  efete=0;
  var pagodebito;
  pagodebito=0;
  var debito;
  debito=0;
  var promdebito;
  var banderaplatomasbarato;
  banderaplatomasbarato=true;
  var platobarato;
  var totalplato;
  totalplato=0;
  var promedioporplato;

  while (seguir == "si")
  {
    // plato: (validar "ravioles", "milanesa", "pizza").
    plato =prompt("Ingrese plato: 'ravioles' , 'milanesa' , 'pizza");
    while (plato!="ravioles" && plato!="milanesa" && plato!="pizza")
    {
    plato=prompt("ERROR Ingrese plato: 'ravioles' , 'milanesa' , 'pizza");
    }
    totalplato++
   // precio del plato (desde 100 hasta 500)
   precio=parseInt(prompt("precio del plato (desde 100 hasta 500)"));
   while (precio<=100 || precio>500)
   {
     precio=parseInt(prompt("ERROR precio del plato (desde 100 hasta 500)"));
    }
   // cantidad (mas que 0)
    cantidad=parseInt(prompt(" cantidad platos (mas que 0)"));
    while (cantidad<=0)
    {
    cantidad=parseInt(prompt("ERROR, cantidad de platos  mas de 0"));
    }
    // medio de pago (validar "efectivo", "debito", "credito")
    pago=prompt("Ingrese medio de pago 'efectivo', 'debito', 'credito'");
   while (pago!="efectivo" && pago!="debito" && pago!="credito")
   {
    pago=prompt("ERROR Ingrese medio de pago 'efectivo', 'debito', 'credito'");
   }
   // a)	El importe total de todos los clientes.
   importetotalsindescuento=importetotalsindescuento+(precio*cantidad);// Si el medio de pago es efectivo, se debe aplicar un 10% de descuento.
   if (pago == "efectivo")   
   {
     importecondescuento=importetotalsindescuento*0.9;
   } 
   else
   {
     if (pago == "credito")// Si el medio de pago es credito, se debe aplicar un 15% de recargo.
     {
       importecondescuento=importetotalsindescuento*1.15;
     }
   }   
   // b)	El importe total de todos los clientes que pagaron en efectivo. (aplicando el descuento del 10%)
   if(pago == "efectivo")
   {
     efete=(efete+importetotalsindescuento)*0.9;
   }
     // c)	Promedio de ventas con Debito.
   if (pago == "debito")
   {
    pagodebito=pagodebito+importetotalsindescuento;
    debito++
   }
   promdebito=pagodebito/debito;
   // d)	Promedio por plato y el más barato.
   if (banderaplatomasbarato)
   {
     platobarato=precio;
     banderaplatomasbarato=false;
   } 
   else
   {
   if (platobarato>precio)
      {
      platobarato=precio 
      }
   }
    seguir=prompt("SI DESEA CONTINUAR INGRES 'si'")
  }
  promedioporplato=importetotalsindescuento/totalplato;
  alert("a)	El importe total de todos los clientes es "+importetotalsindescuento+
        " ; b)	El importe total de todos los clientes que pagaron en efectivo es "+efete+
        " ; c)	Promedio de ventas con Debito es "+promdebito+
        " ; d)	Promedio por plato es "+promedioporplato+" y el más barato es "+platobarato);

}
*/
/*

AUTOR TEJEDA ROBERTO
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
		Si el medio de pago es credito, se debe aplicar un 15% de recargo.
b)	El importe total de todos los clientes que pagaron en efectivo. (aplicando el descuento del 10%)
c)	Promedio de ventas con Debito.
d)	Promedio por plato y el más barato.

function mostrar()                          
{

  //lei

  var seguir;
  seguir = "si";
  var plato;
  var precio;
  var platos;
  var total;
  total=0;
  var compra;
  var pago;
  var montoapagar;
  var pagaroenefectivo;
  pagaroenefectivo=0;
  var pagaronendebito;
  pagaronendebito=0;
  var promediodebito;
  var platoscondebito;
  platoscondebito=0;
  var banderaplatomasbarato;
  banderaplatomasbarato=true;
  var platomasbarato;
  platomasbarato=0;
  var promedioplatomasbarato;
  var platosbaratos;
  platosbaratos=0;
  var totalplatos;
  totalplatos=0;
  var promedioporplato;

  while (seguir == "si")
  {
    
    plato= prompt (" Ingrese el tipo de plato 'ravioles' , 'milanesa' , 'pizza'");
    while (plato!="ravioles" && plato!= "milanesa" && plato!= "pizza")
	  {
		plato = prompt("Lo siento pero Ud. debe Ingresar  'ravioles' , 'milanesa' , 'pizza'");
	  }
          
    precio = prompt("INGRESE valor entre 100 y 500 ");
		precio= parseInt(precio);	
    while (precio<100 || precio>500)
	  {
		precio = prompt("INGRESE valor entre 100 y 500");
		precio = parseInt(precio);		
	  } 
	       
    platos=parseInt(prompt("Ingreso precio del plato (mas de 0)"));
    while (plato<0)
    {
    platos = prompt("INGRESE valor mas de 0 ");
    platos= parseInt(plato);		
    }
        
    pago= prompt (" Ingrese el tipo de plato 'efectivo' , 'credito");
    while (pago!="efectivo" && pago!= "credito")
    {
    pago = prompt("Lo siento pero Ud. debe Ingresar 'efectivo' , 'credito");
    }

    
    // a)	El importe total de todos los clientes.
		// Si el medio de pago es efectivo, se debe aplicar un 10% de descuento.
		// Si el medio de pago es credito, se debe aplicar un 15% de recargo.
    
    compra=platos*precio;
    total=total+compra;
    if (pago == "efectivo") 
      {
      montoapagar=total*0.9;
      } 
      else 
      { 
      montoapagar=total*0.85
      }
    // b)	El importe total de todos los clientes que pagaron en efectivo. (aplicando el descuento del 10%)
      if(pago == "efectivo")
      {
      pagaroenefectivo=pagaroenefectivo+(total*.9);
      }
      else //c)	Promedio de ventas con Debito.
      {
      pagaronendebito=pagaronendebito+(total*0.85);
      platoscondebito++
      promediodebito=pagaronendebito/platoscondebito;
      }
      //d)	Promedio por plato y el más barato.

      if (banderaplatomasbarato) 
      {
        platomasbarato=platomasbarato+compra;
        platosbaratos++
        banderaplatomasbarato=false;
      } 
      else
      {
        if(platomasbarato>compra)
        {
          platomasbarato=platomasbarato+compra;
          platosbaratos++
        }
      }
      totalplatos++
      promedioporplato=total/totalplatos;
      promedioplatomasbarato=platomasbarato/platosbaratos;

    seguir=prompt("para seguir cargando ingrese 'si'")
  }

  alert("a) El importe total de todos los clientes es "+montoapagar+
         " ; b) El importe total de todos los clientes que pagaron en efectivo es "+pagaroenefectivo+
         " ; c) el Promedio de ventas con Debito es "+promediodebito+
         " ; d) El promedio por plato es "+promedioporplato+"y el promdio por mas barato es "+promedioplatomasbarato);
}
*/
/*
Autor Tejeda Roberto
Simulacro Ej 1
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
    for (var i=0; i < 2; i=i+1) 
	{
		tipo = prompt("Ingrese Producto 'HDD', 'SSD' ó 'SSDM2'"); //Tipo: (validar "HDD", "SSD" o "SSDM2")
      while (tipo != "HDD" && tipo != "SSD" && tipo != "SSDM2" ) 
      {
        tipo = prompt("INGRESO ERRONEO Ingrese 'HDD', 'SSD' ó 'SSDM2'");
      }
      precio = parseInt(prompt("Ingrese cantidad Mayor a 5000 y 18000")); //Precio: (validar entre 5000 y 18000)
      while( cantidad>=5000 && cantidad<18000)
      {
         precio = prompt("INGRESO ERRONEO Debe ser Mayor a 5000 y menor a 18000");
      }
      cantidad = parseInt(prompt("Ingrese cantidad Mayor a 0 y menor a 50")); //Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades)
      while( cantidad<=0 && cantidad>50)
      {
         cantidad = prompt("INGRESO ERRONEO Debe ser Mayor a 0 y menor a 50");
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
}


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
 var unidades;
 var banderamasbarato=true;
 unidades=0;
 var masbarato;
   for (var i=0; i < 5; i=i+1) 
	{
		tipo = prompt("Ingrese Producto 'HDD', 'SDD' ó 'SSDM2'");
      while (tipo != "HDD" && tipo != "SDD" && tipo != "SSDM2" ) 
      {
        tipo = prompt("INGRESO ERRONEO Ingrese 'HDD', 'SDD' ó 'SSDM2'");
      }
      precio = parseInt(prompt("Ingrese cantidad Mayor a 5000 y 18000"));
      while( cantidad<=5000 && cantidad>18000)
      {
         cantidad = prompt("INGRESO ERRONEO Debe ser Mayor a 5000 y menor a 18000");
      }
      cantidad = parseInt(prompt("Ingrese cantidad Mayor a 0 y menor a 50"));
      while( cantidad<=0 && cantidad>50)
      {
         cantidad = prompt("INGRESO ERRONEO Debe ser Mayor a 0 y menor a 50");
      }
      marca = prompt("Ingrese Marca “Seagate”, “Western Digital”, “Kingston”");
      while (marca != "Seagate" && marca != "Western Digital" && marca != "SKingston" ) 
      {
        marca = prompt("INGRESO ERRONEO Ingrese “Seagate”, “Western Digital”, “Kingston”");
      }
      capacidad = parseInt(prompt("Ingrese Capacidad 250Gb, 500Gb, 1Tb, 2Tb"));
      while (capacidad != "250Gb" && capacidad != "500Gb" && capacidad != "1Tb" && capacidad!= "2Tb") 
      {
        capacidad = prompt("INGRESO ERRONEO Ingrese Capacidad 250Gb, 500Gb, 1Tb, 2Tb");
      }
      if (tipo == "SDD") 
      {
         if ( banderamasbarato) 
         {
            masbarato=precio;
         }
       }
      

      
      
      
   }         
      //a) Del más barato de los SSD, la cantidad de unidades y marca.
}

      /*
      var canthdd;
 var cantssd;
 var cantssdm;
 var marhdd;
 var marssd;
 var marssdm;
 var caphdd;
 var capsdd;
 var capssdm;
      switch (tipo)
      {
         case "HDD":
            canthdd= canthdd+cantidad;
            marhdd= marca;
            caphdd= capacidad;
            break;
         case "SDD":
            cantssd=cantssd+cantidad;
            marssd=marca;
            capsdd=capacidad;
            break;
         case "SSDM2":
            cantssdm=cantssdm+cantidad;
            marssdm=marca;
            capssdm=capacidad;            
            break;
               default:
            break;
      }        
   
   alert("uno");
}
*/
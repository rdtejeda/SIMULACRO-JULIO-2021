/*Alumno Tejeda Roberto
  DNI 18223125
Se requiere ingresar el nombre, edad, la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" ) y si contrajo covid de los ciudadanos 
que se vacunan en un centro de salud. Una vez que el usuario no tiene más ciudadanos que ingresar 
se debe reportar
a)	El nombre de la persona más joven que se dio astrazeneca
b)	El porcentaje de mayores a 18 que tuvieron la enfermedad
c)  El rango etario (por década) que más vacunas se aplicó 


*/

function mostrar()
{
var nombre;
var edad;
var vacuna;
var contagio;
var banderamasjoven;
banderamasjoven=true;
var nombremasjoven;
var edadmasjoven;
var contaradulto;
contaradulto=0;
var contarcontagios;
contarcontagios=0;
var poradulcont;
var contarveinte;
contarveinte=0;
var contartreinta;
contartreinta=0;
var contarcuarenta;
contarcuarenta=0;
var contarcincuenta;
contarcincuenta=0;
var contarsesenta;
contarsesenta=0;
var contarsetenta;
contarsetenta=0;
var mayorrango;

 var seguir;
 seguir="si";
 while (seguir == "si")
 {
	//el nombre, 
	nombre= prompt("Ingrese Nombre (Entre 3 y 10 caracteres");
    while (nombre.length<3 || nombre.length>10) 
      {
        nombre= prompt("ERROR - Ingrese Nombre (Entre 3 y 10 caracteres");
      } 	
	//edad, 
	edad = prompt("Ingrese edad cantidad Mayor a 18 y menor a 80");
    edad = parseInt(edad);
    while( edad<=18 || edad>80)
      {
		edad = prompt("ERROR - Ingrese edad cantidad Mayor a 18 y menor a 80");
		edad = parseInt(edad);
      }	
	//la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" )
	vacuna= prompt("Ingrese 'astrazeneca', 'sinopharm' ó 'sputnik'");
    while (vacuna != "astrazeneca" && vacuna != "sinopharm" && vacuna != "sputnik") 
    {
		vacuna= prompt("ERROR - Ingrese 'astrazeneca', 'sinopharm' ó 'sputnik'");
    }	
	// si contrajo covid de los ciudadanos 	que se vacunan en un centro de salud.
	contagio= prompt("Ingrese si contrajo covid de los ciudadanos 	que se vacunan en un centro de salud'si' ó 'no'");
    while (contagio != "si" && contagio != "no") 
    {
		contagio= prompt("ERROR - Ingrese si contrajo covid de los ciudadanos 	que se vacunan en un centro de salud'si' ó 'no'");
    }
	//a)	El nombre de la persona más joven que se dio astrazeneca

	if (vacuna == "astrazeneca")
	 {
		if (banderamasjoven) 
		{
			banderamasjoven=false;
			nombremasjoven=nombre;
			edadmasjoven=edad;
		} 
		 else 
		   {
			   if (edad>edadmasjoven) 
			   {
				nombremasjoven=nombre;
				edadmasjoven=edad;
			   }
		   }
	}

	 if (edad>18)	//b)	El porcentaje de mayores a 18 que tuvieron la enfermedad
	 {
		 contaradulto++
		 if (contagio == "si")
		  {
			 contarcontagios++
		 }
	 }	
	//c)  El rango etario (por década) que más vacunas se aplicó 
	 if (edad>18 && edad<30)
	 {
		 contarveinte++
	 } else {
			if (edad>30 && edad<40)
			{
				contartreinta++
			} else{
				if (edad>40 && edad<50)
				{
					contarcuarenta++
				}else{
					if (edad>50 && edad<60)
					{
						contarcincuenta++
					}else{
						if (edad>60 && edad<70)
						{
							contarsesenta++
						}else{
							if (edad>70 && edad<80)
							{
								contarsetenta++
							}
						}
					}
				}

			}

	 	}
  seguir=prompt("Para seguir ingrese 'si' y para terminar 'no'");
  while (seguir!="si" && seguir!="no") 
  {
    seguir=prompt("ERROR - Para seguir ingrese 'si' y para terminar 'no'");
  }
 }
 poradulcont=contarcontagios/contaradulto*100;

 if( contarveinte>contartreinta && contarveinte>contarcuarenta && contarveinte>contarcincuenta && contarveinte>contarsesenta && contarveinte>contarsetenta)
{
	mayorrango="veinte";
} else{
	if (contartreinta>contarcuarenta && contartreinta>contarcincuenta && contartreinta>contarsesenta && contartreinta>contarsetenta)
	{
		mayorrango="treinta";
	} else{
		if (contarcuarenta>contarcincuenta && contarcuarenta>contarsesenta && contarcuarenta>contarsetenta)
		{
			mayorrango="cuarenta";
		} else{
			if (contarcincuenta>contarsesenta & contarcincuenta>contarsetenta)
			{
				mayorrango="cincuenta";
			}else{
				if (contarsesenta>contarsetenta)
				{
					mayorrango="sesenta";
				}else{
					mayorrango="setenta";
				}
			}
		}
	}
}
	alert("/a)	El nombre de la persona más joven que se dio astrazeneca es"+nombremasjoven);
	alert("b)	El porcentaje de mayores a 18 que tuvieron la enfermedad es "+poradulcont);
	alert("c)  El rango etario (por década) que más vacunas se aplicó es "+mayorrango);
}

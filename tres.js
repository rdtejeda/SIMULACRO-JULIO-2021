
/*
final 4 ago
EJERCICIO 3
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar
 marca del producto
 Tipo de galletita : "con sal", "sin sal", "dulces".
 cantidad de cajas: mas de 0
 cantidad de kilos por caja:mas de 0
 nombre proveedor
 origen: "nacional", "mercosur", "resto del mundo"
	a) informar el ingreso con la menor cantidad de cajas
	b) de las galletitas dulces , la marca que mas kilos tiene por caja
	c)que porcentaje de cajas hay sobre el total de cada tipo
	ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)

function mostrar()
{
  var i;
  i=0;
  var tipo;
  var cantidad;
  cantidad=0;
  var kgporcaja;
  var proveedor;
  var origen;
  var banderamenorcantidaddecajas;
  banderamenorcantidaddecajas=true;
  var menorcantidaddecajas;
  var cantsinsal;
  cantsinsal=0;
  var cantdulces;
  cantdulces=0;
  var cantconsal;
  cantconsal=0;
  var banderamaskilos;
  banderamaskilos=true;
  var maskilosdulce;
  var maskilomarca;
  var cajastotales;
  cajastotales=0;
  var porsinsal;
  var porconsal;
  var pordulce;

   for (i = 0; i < 3 ; i++)
  {
    // Tipo de galletita : "con sal", "sin sal", "dulces".
    tipo=prompt("Ingrese  Tipo de galletita : 'con sal', 'sin sal', 'dulces'");
    while (tipo!="con sal" && tipo!="sin sal" && tipo!="dulces")
    {
    tipo=prompt("ERROR Ingrese  Tipo de galletita : 'con sal', 'sin sal', 'dulces'");
    }
    //cantidad de cajas: mas de 0
    cantidad=parseInt(prompt("cantidad de cajas: mas de 0"));
    while (cantidad<=0)
    {
    cantidad=parseInt(prompt("ERROR, cantidad de cajas: mas de 0"));
    }
    // cantidad de kilos por caja:mas de 0
    kgporcaja=parseInt(prompt("Kg x caja: mas de 0"));
    while (kgporcaja<=0)
    {
    kgporcaja=parseInt(prompt("ERROR, cantidad de cajas: mas de 0"));
    }
    // nombre proveedor
    proveedor=prompt("iNGRESE EL PROVEEDOR");
    // origen: "nacional", "mercosur", "resto del mundo"
    origen=prompt("Ingrese origen: 'nacional', 'mercosur', 'resto del mundo'");
    while (origen!="nacional" && origen!="mercosur" && origen!="resto del mundo")
    {
      origen=prompt("ERROR Ingrese origen: 'nacional', 'mercosur', 'resto del mundo'");
    }
    //a) informar el ingreso con la menor cantidad de cajas
    if (banderamenorcantidaddecajas)
    {
      menorcantidaddecajas=cantidad;
    } 
    else
    {
      if (menorcantidaddecajas>cantidad)
      {
        menorcantidaddecajas=cantidad;
      }
    }
    // b) de las galletitas dulces , la marca que mas kilos tiene por caja
    switch (tipo) 
    {
      case "con sal":
        cantconsal++
            break;
    case "dulces":
      cantdulces++
      if (banderamaskilos)
      {
        maskilosdulce=kgporcaja;
        maskilomarca=proveedor;
        banderamaskilos=false
      } else
      {
        if (maskilosdulce<kgporcaja)
        {
          maskilosdulce=kgporcaja;
          maskilomarca=proveedor;
        }
      }
      break;
    case"sin sal":
    cantsinsal++
      break;
    default:
        break;
    }
    // c)que porcentaje de cajas hay sobre el total de cada tipo
    cajastotales++
        //ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)
  }  
  porsinsal=cantsinsal/cajastotales*100;
  porconsal=cantconsal/cajastotales*100;
  pordulce=cantdulces/cajastotales*100
  alert ("a) el ingreso con la menor cantidad de cajas es "+menorcantidaddecajas+
      " ;  b) de las galletitas dulces , la marca que mas kilos tiene por caja es "+maskilomarca+
      "c) Porcentaje de cajas sobre el total de sin sal es "+porsinsal+" , con sal es "+porconsal+" y dulces es "+pordulce);  
}
*/




/*
simulacro 3
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:

a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*
function mostrar()
{
	var seguir;
	seguir="si";
	var cantidad;
	var banderamasalto;
	banderamasalto=true;
	var banderamasbajo;
	banderamasbajo=true;
	var masbajo;
	var masalto;
	while (seguir == "si")
	{
	
	    cantidad = parseInt(prompt("Ingrese cantidad Mayor a 0 y menor a 10"));
   		 while( cantidad<=0 || cantidad>=10)
      {
         cantidad = parseInt(prompt("INGRESO ERRONEO Debe ser Mayor a 0 y menor a 10"));
      
      }
	
	  //MasBajoBandera

      if (banderamasbajo) 
            {
                banderamasbajo=false;
                masbajo=cantidad;
                banderamasbajo=false;
              
            } 
             else 
               {
                   if (cantidad<masbajo) 
                   {
                    masbajo=cantidad;
                   }
               }

      //MasAltoBandera

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


alert(masbajo+"y"+masalto);
}
*/


/* 
OJO - INTEGRADOR 30 de julio - UINO
Autor Tejeda Roberto
Integrador 1
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario

function mostrar()
{
var seguir;
var nombre;
var edad;
var genero;
var vacuna;
var temperatura;
var banderamayortemp;
banderamayortemp=true;
var nombrea;
var temperaturaa;
var vacunaa;
var contadorb;
contadorb=0;
var contadorc;
contadorc=0;
var contadord;
contadord=0;
var contador;
contador=0;
var promedioe;
var contadore;
contadore=0;
var contadorf;
contadorf=0;
var porcentajef;
var contadoraAz;
contadoraAz=0;
var contadorSp;
contadorSp=0;
var contadorOt;
contadorOt=0;
var mayor;
var edadtSp;
edadtSp=0;
var edadpSp;
var edadtAz;
edadtAz=0;
var edadpAz;
var edadtOt;
edadtOt=0;
var edadpOt;
var numf;
numf=0;
var numm;
numm=0;
var numNB;
numNB=0;
var porcenfem;
var	porcenmas;
var porceNB;

seguir = "si";

while (seguir == "si") //Se ingresará hasta que usuario decida:
{
	nombre = prompt("INGRESE NOMBRE'"); //Nombre
	edad = prompt("INGRESE EDAD'");
	edad = parseInt(edad);	//edad menor100
	while (edad <=0 || edad>100)
	{
		edad = prompt("INGRESE EDAD Debe ser mayor a 0 y menor a 100");
		edad = parseInt(edad);		
	}
	isNaN(edad<0);
	genero = prompt("Ingrese su persepción de Género: “F”, “M”, “NB”.");//	Género: “F”, “M”, “NB”.
	while (genero!= "F" && genero!= "M" && genero != "NB")
	{
		genero = prompt("Lo siento pero Ud. debe Ingresar “F”, “M”, “NB”.");
	}
	vacuna = prompt("Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. "); // Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
	while (vacuna!= "SputnikV" && vacuna!= "AstraZeneca" && vacuna!= "Otra") 
	{
		vacuna = prompt("DEBE Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. ");
	}
	temperatura = prompt("INGRESE TEMPERATURA CORPORAL'");// Temperatura corporal (durante la primera noche).
	temperatura = parseInt(temperatura);	//edad
	while (temperatura<35 || temperatura>42)
	{
		temperatura = prompt("INGRESE valor entre 35 y42");
		temperatura= parseInt(temperatura);		
	}
	contador=contador+1;
	//a) El nombre y vacuna de la persona con mayor temperatura.
	if (banderamayortemp || temperatura>temperaturaa) 
		{
			temperaturaa = temperatura;
			nombrea=nombre;  //nombre mas despriptivo
			vacunaa=vacuna;
			banderamayortemp=false;
		}
	//b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
	if (genero == "F" && vacuna == "SputnikV")
	{
	 contadorb = contadorb+1;	
	}
	// c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
	if (genero == "NB" && (vacuna == "AstraZeneca"|| vacuna == "Otra")) 
	{
	 contadorc = contadorc+1;	
	}
	//d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
    if (temperatura>38 && vacuna == "AstraZeneca")
	{
	 contadord = contadord+1;	
	}
	//e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
	if (temperatura<=37 && vacuna == "SputnikV" && genero == "M")
	{
		contadore = contadore+1;	
	}
	promedioe=contador/contadore;
	////f) Porcentaje de personas que se aplicaron Aztrazeneca
	if (vacuna == "AstraZeneca") 
	{
		contadorf = contadorf+1;	
	}
	porcentajef=contadorf*100/contador;
	// g) Cual fue la vacuna mas aplicada y h) Promedio de edad de las personas que se dieron cada vacuna
	switch (vacuna)
	{
		case "AstraZeneca":
				contadoraAz=contadoraAz+1;
				contadoraAz=contadoraAz+1;
				edadtAz=edadtAz+edad;
		break;
		case "SputnikV":
				contadorSp=contadorSp+1;
				contadorSp=contadorSp+1;
				edadtSp=edadtSp+edad;
		break;
		case "Otra":
				contadorOt=contadorOt+1;
				contadorOt=contadorOt+1;
				edadtOt=edadtOt+edad;
		break;
		default:
		break;
	}
	//g) Cual fue la vacuna mas aplicada
	if (contadoraAz>contadorSp && contadoraAz>contadorOt) 
		{
		mayor= "AstraZeneca";	
		}
	else
	{
		if (contadorSp>contadoraAz && contadorSp>contadorOt)
		{
		mayor= "SputnikV";
		}
		else
			{
			mayor="Otra";
			}
	}
	//h) Promedio de edad de las personas que se dieron cada vacuna
	edadpAz=edadtAz/contadoraAz;
	edadpSp=edadtSp/contadorSp;
	edadpOt=edadtOt/contadorOt;
	//i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario
	switch (genero)
	{
		case "F":
			numf++
		break;
		case "M":
			numm++
		break;
		case "NB":
			numNB++
		break;
		default:
			break;
	}
	porcenfem=numf*100/contador;
	porcenmas=numm*100/contador;
	porceNB=numNB*100/contador;
	
	seguir = prompt("Para continuar cargando ingrese 'si'");
}
	alert("a) "+nombrea+" ES LA PERSONA CON MAYOR TEMPERATURA Y recibio la vacuna "+vacunaa+
		  "; b) "+contadorb+" Personas que se autoperciben como femeninas recibieron SputnikV"+
		  "; c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra es "+contadorc+
		  "; d) La cantidad de  personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38° es  "+contadord+
		  "; e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos) es "+promedioe+
		  "; f) El Porcentaje de personas que se aplicaron Aztrazeneca es "+porcentajef+" %"+
		  "; g) La vacuna mas aplicada es "+mayor+
		  "; h) El promedio de edad de AstraZeneca es "+edadpAz+"El promedio de edad de SputnikV es "+edadpSp+"El promedio de edad de Otra es "+edadpOt+
		  "; i) El porcentaje No Binario es "+porceNB+", el Femenino es "+porcenfem+" y el Masculino es"+porcenmas);
}

//isNaN(edadpAz>9)
//contadores distinto de 0 if

/*
OJO - INTEGRADOR 30 de julio - DOS
Autor Tejeda Roberto
Integrador B
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario

function mostrar()
{
var seguir;
var nombre;
var edad;
var genero;
var vacuna;
var temperatura;
var contadorb;
contadorb=0;
seguir = "si";

while (seguir == "si") //Se ingresará hasta que usuario decida:
{
	nombre = prompt("INGRESE NOMBRE'"); //Nombre
	edad = prompt("INGRESE EDAD'");
	edad = parseInt(edad);	//edad
	while (edad <=0)
	{
		edad = prompt("INGRESE EDAD Debe ser mayor a 0");
		edad = parseInt(edad);		
	}
	genero = prompt("Ingrese su persepción de Género: “F”, “M”, “NB”.");//	Género: “F”, “M”, “NB”.
	while (genero!= "F" && genero!= "M" && genero != "NB")
	{
		genero = prompt("Lo siento pero Ud. debe Ingresar “F”, “M”, “NB”.");
	}
	vacuna = prompt("Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. "); // Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
	while (vacuna!= "SputnikV" && vacuna!= "AstraZeneca" && vacuna!= "Otra") 
	{
		vacuna = prompt("DEBE Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. ");
	}
	temperatura = prompt("INGRESE TEMPERATURA CORPORAL'");// Temperatura corporal (durante la primera noche).
	temperatura = parseInt(temperatura);	//edad
	while (temperatura<35 || temperatura>42)
	{
		temperatura = prompt("INGRESE valor entre 35 y42");
		temperatura= parseInt(temperatura);		
	}
	if (genero == "F" && vacuna == "SputnikV") //b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
	{
	 contadorb = contadorb+1;	
	}
	seguir = prompt("Para continuar cargando ingrese 'si'");
}
	alert(contadorb+" Personas que se autoperciben como femeninas recibieron SputnikV");
}*/

/*
OJO - INTEGRADOR 30 de julio - TRES
Autor Tejeda Roberto
Integrador C
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario

function mostrar()
{
var seguir;
var nombre;
var edad;
var genero;
var vacuna;
var temperatura;
var contadorc;
contadorc=0;
seguir = "si";

while (seguir == "si") //Se ingresará hasta que usuario decida:
{
	nombre = prompt("INGRESE NOMBRE'"); //Nombre
	edad = prompt("INGRESE EDAD'");
	edad = parseInt(edad);	//edad
	while (edad <=0)
	{
		edad = prompt("INGRESE EDAD Debe ser mayor a 0");
		edad = parseInt(edad);		
	}
	genero = prompt("Ingrese su persepción de Género: “F”, “M”, “NB”.");//	Género: “F”, “M”, “NB”.
	while (genero!= "F" && genero!= "M" && genero != "NB")
	{
		genero = prompt("Lo siento pero Ud. debe Ingresar “F”, “M”, “NB”.");
	}
	vacuna = prompt("Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. "); // Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
	while (vacuna!= "SputnikV" && vacuna!= "AstraZeneca" && vacuna!= "Otra") 
	{
		vacuna = prompt("DEBE Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. ");
	}
	temperatura = prompt("INGRESE TEMPERATURA CORPORAL'");// Temperatura corporal (durante la primera noche).
	temperatura = parseInt(temperatura);	//edad
	while (temperatura<35 || temperatura>42)
	{
		temperatura = prompt("INGRESE valor entre 35 y42");
		temperatura= parseInt(temperatura);		
	}
	
	if (genero == "NB" && (vacuna == "AstraZeneca"|| vacuna == "Otra")) // c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
	{
	 contadorc = contadorc+1;	
	}
	seguir = prompt("Para continuar cargando ingrese 'si'");
}
	alert("La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra es "+contadorc);
}*/

/*
OJO - INTEGRADOR 30 de julio - CUATRO
Autor Tejeda Roberto
Integrador D
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario

function mostrar()
{
var seguir;
var nombre;
var edad;
var genero;
var vacuna;
var temperatura;
var contadord;
contadord=0;
seguir = "si";

while (seguir == "si") //Se ingresará hasta que usuario decida:
{
	nombre = prompt("INGRESE NOMBRE'"); //Nombre
	edad = prompt("INGRESE EDAD'");
	edad = parseInt(edad);	//edad
	while (edad <=0)
	{
		edad = prompt("INGRESE EDAD Debe ser mayor a 0");
		edad = parseInt(edad);		
	}
	genero = prompt("Ingrese su persepción de Género: “F”, “M”, “NB”.");//	Género: “F”, “M”, “NB”.
	while (genero!= "F" && genero!= "M" && genero != "NB")
	{
		genero = prompt("Lo siento pero Ud. debe Ingresar “F”, “M”, “NB”.");
	}
	vacuna = prompt("Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. "); // Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
	while (vacuna!= "SputnikV" && vacuna!= "AstraZeneca" && vacuna!= "Otra") 
	{
		vacuna = prompt("DEBE Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. ");
	}
	temperatura = prompt("INGRESE TEMPERATURA CORPORAL'");// Temperatura corporal (durante la primera noche).
	temperatura = parseInt(temperatura);	//edad
	while (temperatura<35 || temperatura>42)
	{
		temperatura = prompt("INGRESE valor entre 35 y42");
		temperatura= parseInt(temperatura);		
	}
	
	if (temperatura>38 && vacuna == "AstraZeneca") // d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
	{
	 contadord = contadord+1;	
	}
	seguir = prompt("Para continuar cargando ingrese 'si'");
}
	alert("La cantidad de  personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38° es  "+contadord);
}*/

/*
OJO - INTEGRADOR 30 de julio - cinco

Autor Tejeda Roberto
Integrador E
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario

function mostrar()
{
var seguir;
var nombre;
var edad;
var genero;
var vacuna;
var temperatura;
var contadore;
contadore=0;
var contador;
contador=0;
var promedioe;
seguir = "si";

while (seguir == "si") //Se ingresará hasta que usuario decida:
{
	nombre = prompt("INGRESE NOMBRE'"); //Nombre
	edad = prompt("INGRESE EDAD'");
	edad = parseInt(edad);	//edad
	while (edad <=0)
	{
		edad = prompt("INGRESE EDAD Debe ser mayor a 0");
		edad = parseInt(edad);		
	}
	genero = prompt("Ingrese su persepción de Género: “F”, “M”, “NB”.");//	Género: “F”, “M”, “NB”.
	while (genero!= "F" && genero!= "M" && genero != "NB")
	{
		genero = prompt("Lo siento pero Ud. debe Ingresar “F”, “M”, “NB”.");
	}
	vacuna = prompt("Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. "); // Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
	while (vacuna!= "SputnikV" && vacuna!= "AstraZeneca" && vacuna!= "Otra") 
	{
		vacuna = prompt("DEBE Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. ");
	}
	temperatura = prompt("INGRESE TEMPERATURA CORPORAL'");// Temperatura corporal (durante la primera noche).
	temperatura = parseInt(temperatura);	//edad
	while (temperatura<35 || temperatura>42)
	{
		temperatura = prompt("INGRESE valor entre 35 y42");
		temperatura= parseInt(temperatura);		
	}
	contador=contador+1;
	
	if (temperatura<=37 && vacuna == "SputnikV" && genero == "M") //e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
	{
		contadore = contadore+1;	
	}
	promedioe=contador/contadore
	seguir = prompt("Para continuar cargando ingrese 'si'");
}
	alert(" El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos) es "+promedioe);
}*/


/*
OJO - INTEGRADOR 30 de julio - seis
Autor Tejeda Roberto
Integrador F
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario

function mostrar()
{
var seguir;
var nombre;
var edad;
var genero;
var vacuna;
var temperatura;
var contadorf;
contadorf=0;
var contador;
contador=0;
var promedioe;
var porcentaje;
seguir = "si";

while (seguir == "si") //Se ingresará hasta que usuario decida:
{
	nombre = prompt("INGRESE NOMBRE'"); //Nombre
	edad = prompt("INGRESE EDAD'");
	edad = parseInt(edad);	//edad
	while (edad <=0)
	{
		edad = prompt("INGRESE EDAD Debe ser mayor a 0");
		edad = parseInt(edad);		
	}
	genero = prompt("Ingrese su persepción de Género: “F”, “M”, “NB”.");//	Género: “F”, “M”, “NB”.
	while (genero!= "F" && genero!= "M" && genero != "NB")
	{
		genero = prompt("Lo siento pero Ud. debe Ingresar “F”, “M”, “NB”.");
	}
	vacuna = prompt("Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. "); // Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
	while (vacuna!= "SputnikV" && vacuna!= "AstraZeneca" && vacuna!= "Otra") 
	{
		vacuna = prompt("DEBE Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. ");
	}
	temperatura = prompt("INGRESE TEMPERATURA CORPORAL'");// Temperatura corporal (durante la primera noche).
	temperatura = parseInt(temperatura);	//edad
	while (temperatura<35 || temperatura>42)
	{
		temperatura = prompt("INGRESE valor entre 35 y42");
		temperatura= parseInt(temperatura);		
	}
	contador=contador+1;
	
	if (vacuna == "AstraZeneca") //f) Porcentaje de personas que se aplicaron Aztrazeneca
	{
		contadorf = contadorf+1;	
	}
	porcentaje=contadorf*100/contador;
	seguir = prompt("Para continuar cargando ingrese 'si'");
}
	alert("El Porcentaje de personas que se aplicaron Aztrazeneca es "+porcentaje+" %");
}*/

/*
OJO - INTEGRADOR 30 de julio - siete
Autor Tejeda Roberto
Integrador G
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario

function mostrar()
{
var seguir;
var nombre;
var edad;
var genero;
var vacuna;
var temperatura;
var contador;
contador=0;
var contadoraAz;
contadoraAz=0;
var contadorSp;
contadorSp=0;
var contadorOt;
contadorOt=0;
seguir = "si";
var mayor;

while (seguir == "si") //Se ingresará hasta que usuario decida:
{
	nombre = prompt("INGRESE NOMBRE'"); //Nombre
	edad = prompt("INGRESE EDAD'");
	edad = parseInt(edad);	//edad
	while (edad <=0)
	{
		edad = prompt("INGRESE EDAD Debe ser mayor a 0");
		edad = parseInt(edad);		
	}
	genero = prompt("Ingrese su persepción de Género: “F”, “M”, “NB”.");//	Género: “F”, “M”, “NB”.
	while (genero!= "F" && genero!= "M" && genero != "NB")
	{
		genero = prompt("Lo siento pero Ud. debe Ingresar “F”, “M”, “NB”.");
	}
	vacuna = prompt("Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. "); // Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
	while (vacuna!= "SputnikV" && vacuna!= "AstraZeneca" && vacuna!= "Otra") 
	{
		vacuna = prompt("DEBE Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. ");
	}
	temperatura = prompt("INGRESE TEMPERATURA CORPORAL'");// Temperatura corporal (durante la primera noche).
	temperatura = parseInt(temperatura);	//edad
	while (temperatura<35 || temperatura>42)
	{
		temperatura = prompt("INGRESE valor entre 35 y42");
		temperatura= parseInt(temperatura);		
	}
	contador=contador+1;
	// g) Cual fue la vacuna mas aplicada
	switch (vacuna) {
		case "AstraZeneca":
			contadoraAz=contadoraAz+1;
		break;
		case "SputnikV":
			contadorSp=contadorSp+1;
		break;
		case "Otra":
			contadorOt=contadorOt+1;
		break;
		default:
		break;
	}
	if (contadoraAz>contadorSp && contadoraAz>contadorOt)
	{
		mayor= "AstraZeneca";	
	}
	else
	{
		if (contadorSp>contadoraAz && contadorSp>contadorOt)
			{
			mayor= "SputnikV";
			}
			else
				{
				mayor="Otra";
				}
	}
	seguir = prompt("Para continuar cargando ingrese 'si'");
}
	alert("la vacuna mas aplicada es "+mayor);
}*/


/*
OJO - INTEGRADOR 30 de julio - ocho
Autor Tejeda Roberto
Integrador H
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario

function mostrar()
{
var seguir;
var nombre;
var edad;
var genero;
var vacuna;
var temperatura;
var contador;
contador=0;
var contadoraAz;
contadoraAz=0;
var contadorSp;
contadorSp=0;
var contadorOt;
contadorOt=0;
seguir = "si";
var edadtSp;
edadtSp=0;
var edadpSp;
var edadtAz;
edadtAz=0;
var edadpAz;
var edadtOt;
edadtOt=0;
var edadpOt;
while (seguir == "si") //Se ingresará hasta que usuario decida:
{
	nombre = prompt("INGRESE NOMBRE'"); //Nombre
	edad = prompt("INGRESE EDAD'");
	edad = parseInt(edad);	//edad
	while (edad <=0)
	{
		edad = prompt("INGRESE EDAD Debe ser mayor a 0");
		edad = parseInt(edad);		
	}
	genero = prompt("Ingrese su persepción de Género: “F”, “M”, “NB”.");//	Género: “F”, “M”, “NB”.
	while (genero!= "F" && genero!= "M" && genero != "NB")
	{
		genero = prompt("Lo siento pero Ud. debe Ingresar “F”, “M”, “NB”.");
	}
	vacuna = prompt("Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. "); // Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
	while (vacuna!= "SputnikV" && vacuna!= "AstraZeneca" && vacuna!= "Otra") 
	{
		vacuna = prompt("DEBE Ingrese Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. ");
	}
	temperatura = prompt("INGRESE TEMPERATURA CORPORAL'");// Temperatura corporal (durante la primera noche).
	temperatura = parseInt(temperatura);	//edad
	while (temperatura<35 || temperatura>42)
	{
		temperatura = prompt("INGRESE valor entre 35 y42");
		temperatura= parseInt(temperatura);		
	}
	contador=contador+1;
	//h) Promedio de edad de las personas que se dieron cada vacuna
	switch (vacuna) {
		case "AstraZeneca":
			contadoraAz=contadoraAz+1;
			edadtAz=edadtAz+edad;
		break;
		case "SputnikV":
			contadorSp=contadorSp+1;
			edadtSp=edadtSp+edad;
		break;
		case "Otra":
			contadorOt=contadorOt+1;
			edadtOt=edadtOt+edad;
		break;
		default:
		break;
	}
		seguir = prompt("Para continuar cargando ingrese 'si'");
}
	//contadores distinto de 0 if
	edadpAz=edadtAz/contadoraAz;
	edadpSp=edadtSp/contadorSp;
	edadpOt=edadtOt/contadorOt;
	alert("El promedio de edad de AstraZeneca es "+edadpAz+"El promedio de edad de SputnikV es "+edadpSp+"El promedio de edad de Otra es "+edadpOt);
}*/
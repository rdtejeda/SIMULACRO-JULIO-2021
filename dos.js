/*
EJERCICIO 2
Se requiere ingresar el nombre, edad, la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" ) y si contrajo covid de los ciudadanos 
que se vacunan en un centro de salud. Una vez que el usuario no tiene más ciudadanos que ingresar 
se debe reportar
a)	El nombre de la persona más joven que se dio sputnik
b)	El porcentaje de jóvenes que tuvieron la enfermedad
c)	El promedio de edad 
d)  La vacuna más veces aplicada
*/
function mostrar()
{
  var seguir;
  seguir = "si";
  var nombre;
  var edad;
  var vacuna;
  var contagio;
  var banderamasjovensputnik;
  banderamasjovensputnik=true;
  var jovensputnik;
  var edadjovensputnik;
  var menoresvacunados;
  menoresvacunados=0;
  var menoresenfermos;
  menoresenfermos=0;
  var porcentajejovenesenfermos;
  var casos;
  casos=0;
  var sumaedad;
  sumaedad=0;
  var promedioedad;
  var contadorsp;
  contadorsp=0;
  var contadoraz;
  contadoraz=0;
  var contadorsin;
  contadorsin=0;
  var masaplicada;

  while (seguir == "si") // Una vez que el usuario no tiene más ciudadanos que ingresar 
  {
  casos++
  //ingresar el nombre
  nombre=prompt("Ingrese nombre");
  // Se requiere , edad,
  edad=parseInt(prompt("Ingrese edad mayor a 0 y menor a 100"));
  while (edad<=0 || edad>100)
  {
     edad=parseInt(prompt("ERRORIngrese edad mayor a 0 y menor a 100"));
  }
  sumaedad=sumaedad+edad;
  //la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" ) 
  vacuna=prompt("Ingresela vacuna valida 'astrazeneca', 'sinopharm' o 'sputnik'");
  while (vacuna!="astrazeneca" && vacuna !="sinopharm" && vacuna!="sputnik")
  {
    vacuna=prompt("ERROR Ingresela vacuna valida 'astrazeneca', 'sinopharm' o 'sputnik'");
  }
  // y si contrajo covid de los ciudadanos  que se vacunan en un centro de salud
  contagio=prompt("Ingrese 'si' si contrajo covid en un centro de salud, sino ingrese 'no'");
  while (contagio!="si" && contagio!="no")
  {
    contagio=prompt("Ingrese 'si' si contrajo covid en un centro de salud, sino ingrese 'no'");
  }
  switch (vacuna)
  {
    case "sputnik":
    contadorsp++
    if (banderamasjovensputnik) //  a)	El nombre de la persona más joven que se dio sputnik
    {
      edadjovensputnik=edad;
      jovensputnik=nombre;
      banderamasjovensputnik=false;
    } 
    else
    {
      if(edadjovensputnik>edad)
      {
        edadjovensputnik=edad;
        jovensputnik=nombre;
      }
    }    
    
    break;

    case "sinopharm":
      contadorsin++

    break;
    case "astrazeneca":
      contadoraz++
      break;
  
    default:
      break;
  }
  if (edad<18)  //b)	El porcentaje de jóvenes que tuvieron la enfermedad
  {
  menoresvacunados++  
  }
  if (contagio == "si")
  {
    menoresenfermos++
  }
  porcentajejovenesenfermos=menoresenfermos/menoresvacunados*100;
  // c)	El promedio de edad 
  promedioedad=sumaedad/casos;
  //d)  La vacuna más veces aplicada
  if (contadoraz>contadorsin && contadoraz>contadorsp)
  {
    masaplicada="aztrazeneca";
  }
  else
  {
    if (contadorsin>contadorsp && contadorsin>contadoraz) 
    {
     masaplicada="sinopharm";
    } 
    else 
    {
      masaplicada="sputnik";
    }
  }
  seguir=prompt("Para continuar ingrese 'si'");
}
//se debe reportar
alert("a)	El nombre de la persona más joven que se dio sputnik es "+jovensputnik+
" ; b)	El porcentaje de jóvenes que tuvieron la enfermedad es "+porcentajejovenesenfermos+
" ; c)	El promedio de edad es "+promedioedad+
" ; d)  La vacuna más veces aplicada es "+masaplicada);  
}

/*
FINAL 4ago
EJERCICIO 2
Se requiere ingresar el nombre, edad, la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" ) y si contrajo covid de los ciudadanos 
que se vacunan en un centro de salud. Una vez que el usuario no tiene más ciudadanos que ingresar 
se debe reportar
a)	El nombre de la persona más joven que se dio sputnik
b)	El porcentaje de jóvenes que tuvieron la enfermedad
c)	El promedio de edad 
d)  La vacuna más veces aplicada


{
var seguir="si";
var cantidadsuma;
cantidadsuma=0;
var nombre;
var edad;
var vacuna;
var contrajo;
var banderamasjovensputnik;
banderamasjovensputnik=true;
var nombremasjovensputnik;
var edadmasjovensputnik;
var numerodemenoresvacunados;
numerodemenoresvacunados=0;
var numerodemenorecontajiados;
numerodemenorecontajiados=0;
var porcentajejovenescontajiados;
var edadsuma;
edadsuma=0;
var cantidaddevacunados;
cantidaddevacunados=0;
var promedioedad;
var sumaastarzeneca;
sumaastarzeneca=0;
var sumasinopharma;
sumasinopharma=0;
var sumasputnik;
sumasputnik=0;
var masvacuna;
  while (seguir == "si")
    {
    cantidadsuma++
    //Se requiere ingresar el nombre
    nombre=prompt("Ingrese el Nombre");
    //Edad
    edad=parseInt(prompt("Ingrese edad"));
    while (edad<=0 || edad>100) 
    {
    edad=parseInt(prompt("ERROR, Ingrese edad entre 1 y 100"));
    }
    edadsuma=edadsuma+edad;
      // la vacuna(validad "astrazeneca", "sinopharm" o "sputnik"
    vacuna=prompt("La vacuna valida es 'astrazeneca', 'sinopharm' o 'sputnik'");
    while (vacuna!="astrazeneca" && vacuna!="sinopharm" && vacuna!="sputnik") 
    {
    vacuna=prompt("ERROR La vacuna valida es 'astrazeneca', 'sinopharm' o 'sputnik'");
    }
    //y si contrajo covid de los ciudadanos que se vacunan en un centro de salud.
    contrajo=prompt("Contrajo covid de los ciudadanos que se vacunan en un centro de salud 'si' o 'no'");
    while (contrajo!="si" && contrajo!="no") 
    {
    contrajo=prompt("ERROR solo contestar 'si' o 'no' Contrajo covid de los ciudadanos que se vacunan en un centro de salud ");
    }
    switch (vacuna)
     {
      case "sputnik":
        if(banderamasjovensputnik) //a)	El nombre de la persona más joven que se dio sputnik
        {
        nombremasjovensputnik=nombre;
        edadmasjovensputnik=edad;
        banderamasjovensputnik=false;
        }
        else
        {  
         if (edadmasjovensputnik>edad)
          {
            nombremasjovensputnik=nombre;
            edadmasjovensputnik=edad;       
          }
          
        }
        sumasputnik++
        break;
      case "astrazeneca":
        sumaastarzeneca++
        break;
      case "sinopharm":
        sumasinopharma++
        break;
      default:
        break;
    }
    if (edad<18) //b)	El porcentaje de jóvenes que tuvieron la enfermedad
    {
      numerodemenoresvacunados++  
    } 
      if (contrajo == "si")
      {
        numerodemenorecontajiados++
      }
    porcentajejovenescontajiados=numerodemenorecontajiados/numerodemenoresvacunados*100;
    
    promedioedad=edadsuma/cantidadsuma ; // c)	El promedio de edad
  
    if ( sumasputnik>sumasinopharma && sumasputnik>sumaastarzeneca)
    {
    masvacuna="sputnik";  
    }
     else
      {
       if (sumasinopharma>sumasputnik && sumasinopharma>sumaastarzeneca)
       {
         masvacuna="sinopharm";
       } 
       else 
       {
       masvacuna="astarzeneca"; 
       }  
      }
    seguir=prompt("Para seguir la carga ingrese 'si'");
    }
    alert("a)	El nombre de la persona más joven que se dio sputnik es "+nombremasjovensputnik+
    " ; b)	El porcentaje de jóvenes que tuvieron la enfermedad es "+porcentajejovenescontajiados+
    " ; c) El promedio de edad es "+promedioedad+
    " , d)  La vacuna más veces aplicada es "+masvacuna);
}

Autor Tejeda Roberto
Simulacro Julio 2021 Ej 2
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)


function mostrar()
{
  var seguir; 
  seguir = "si";
  var tipo;
  var bolsas;
  bolsas=0;
  var precio;
  var totalbruto;
  totalbruto=0;
  var totalbolsas;
  totalbolsas=0;
  var descuento;
  descuento=1;
  var totalcondescuento;
  var bolsasAzucar;
  bolsasAzucar=0;
  var bolsasYerba;
  bolsasYerba=0;
  var bolsasCafe;
  bolsasCafe=0; 
  var mayorbolsas;
  mayorbolsas=0;
  var banderacompramasbarata;
  banderacompramasbarata=true;
  var compramasbarata;
  var compra;
 

  while (seguir == "si") //ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera
  {
    tipo = prompt("Ingrese el Tipo de producto 'Yerba', 'Azúcar' ó 'Café')");//Tipo: (validar "Yerba", "Azúcar", "Café").
    while (tipo != "Yerba" && tipo != "Azúcar" &&tipo != "Café")
     {
      tipo = prompt("Ingreso ERRONEO ingrese producto 'Yerba', 'Azúcar' ó 'Café'")   
     }
    bolsas = parseInt(prompt("Ingrese Cantidad de bolsas (Debe ser más de cero).")); //Cantidad de bolsas. (más de cero).
    while (bolsas<=0)  
    {
      bolsas = parseInt(prompt("Ingreso ERRONEO Cantidad de bolsas 'Debe' ser más de cero)."));
    }
    precio = parseInt(prompt("Precio por bolsa (más de cero).")); //Precio por bolsa (más de cero).
    while (precio<=0)  
    {
      precio = parseInt(prompt("Ingreso ERRONEO Precio por bolsa 'DEBE' ser más de cero."));
    }    
  compra=precio*bolsas;
  totalbruto=totalbruto+compra;  //a)	El importe total a pagar bruto, sin descuento.
  totalbolsas=totalbolsas+bolsas;
  if (totalbolsas>=5 && totalbolsas<10) //b)	El importe total a pagar con descuento (solo si corresponde)
    {
      descuento=0.9;
      totalcondescuento=totalbruto*descuento;
    }
    else 
    {
      if (totalbolsas>010)
      {
      descuento=0.85;
      totalcondescuento=totalbruto*descuento;
      }
    }
    totalcondescuento=totalcondescuento;
    switch (tipo)//c)	Informar el tipo con más cantidad de bolsas.
    {
      case "Azúcar":
        bolsasAzucar=bolsasAzucar+bolsas;
        
        break;
      case "Café":
        bolsasCafe=bolsasCafe+bolsas;
      break;
      
      case "Yerba":
        bolsasYerba=bolsasYerba+bolsas;
      break;



    
      default:
        break;
    }
    if (bolsasAzucar>bolsasCafe && bolsasAzucar>bolsasYerba) 
      {
        mayorbolsas=bolsasAzucar;
      } 
      else 
      {
          if (bolsasCafe>bolsasAzucar && bolsasCafe>bolsasYerba)
           {
            mayorbolsas=bolsasCafe;
           } 
           else 
          {
            mayorbolsas=bolsasYerba
          }
      }
    if (banderacompramasbarata || compra<compramasbarata)//d)	El tipo de la compra más barata. (sobre el Bruto sin descuento) 
    {
      compramasbarata=compra;
      banderacompramasbarata=false;
    } 
    seguir = prompt("Para seguir cargando indrese 'si'"); 
  }
    if (descuento == 1) //b)	El importe total a pagar con descuento (solo si corresponde)
   {
    alert("a) El importe total a pagar bruto, sin descuento es "+totalbruto+"; "+
    "c)	El tipo con más cantidad de bolsas es "+mayorbolsas+"; "+
    "d)	El tipo de la compra más barata. (sobre el Bruto sin descuento) es "+compramasbarata);
    } 
    else 
    {
      alert("a) El importe total a pagar bruto, sin descuento es "+totalbruto+"; "+
      "b) El importe total a pagar con descuento es "+totalcondescuento+"; "+
      "c)	El tipo con más cantidad de bolsas es "+mayorbolsas+"; "+
      "d)	El tipo de la compra más barata. (sobre el Bruto sin descuento) es "+compramasbarata);
    }
  }*/
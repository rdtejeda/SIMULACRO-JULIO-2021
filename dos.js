/*
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
*/

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
  totalbolsas=totalbolsas+bolsas
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
 }

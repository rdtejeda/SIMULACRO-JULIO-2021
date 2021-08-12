/*Alumno Tejeda Roberto
  DNI 18223125

EJERCICIO 3
debemos cargar 8 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar
 marca del producto
 Tipo de galletita : "con sal", "sin sal", "dulces".
 cantidad de cajas: mas de 0
 cantidad de kilos por caja:mas de 0
 nombre proveedor
 origen: "nacional", "mercosur", "resto del mundo"
	a) informar el producto con la menor cantidad de kilos
	b) de las galletitas sin sal , la marca que mas kilos tiene por caja
	c) que porcentaje de kilos hay sobre el total de cada tipo
	ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)
*/

function mostrar()
{
  var i;
  i=0;
  var tipo;
  var cajas;
  var kilosporcaja;
  var nombreprovee;
  var origen;
  var banderamenorkilos;
  banderamenorkilos=true;
  var  menokiloporcaja;
  var productomenoskilos;
  var banderamaskgsinsal;
  banderamaskgsinsal=true;
  var  maskilossinsal;
  var  marcamaskilos;
  var acumkgsinsal;
  acumkgsinsal=0;
  var  acumkgconsal;
  acumkgconsal=0;
  var  acumkgdulces;
  acumkgdulces=0;
  var  kgtotales;
  var  porconsal;
  var  porsinsal;
  var  pordulces;

  for (i = 0; i < 3 ; i++)
  {
  
    tipo= prompt("Tipo de galletita : 'con sal', 'sin sal', 'dulces'");//Tipo de galletita : "con sal", "sin sal", "dulces".
		while (tipo != "con sal" && tipo != "sin sal" && tipo != "dulces" ) 
		{
			tipo= prompt("ERROR Tipo de galletita : 'con sal', 'sin sal', 'dulces'");
		}		
		cajas = parseInt(prompt("Ingrese cantidad de cajas: mas de 0"));//cantidad de cajas: mas de 0
		while( cajas<=0)
		  {
			cajas = parseInt(prompt("ERROR Ingrese cantidad de cajas: mas de 0"));
		  
		  }		
		kilosporcaja = parseInt(prompt("Ingrese cantidad de Kilos por caja: mas de 0"));//cantidad de kilos por caja:mas de 0
		while( kilosporcaja<=0)
		  {
			kilosporcaja = parseInt(prompt("ERROR - Ingrese cantidad de Kilos por caja: mas de 0"));		  
		  }
		nombreprovee= prompt("Nombre del proveeedor (Entre 3 y 10 caracteres)");//nombre proveedor
    while (nombreprovee.length<3 || nombreprovee.length>10)     {
      nombreprovee= prompt("ERROR - Ingrese Nombre del proveedor (Entre 3 y 10 caracteres)");
    }  
		origen= prompt("origen: 'nacional', 'mercosur', 'resto del mundo'");//origen: "nacional", "mercosur", "resto del mundo"
		while (origen != "nacional" && origen != "mercosur" && origen != "resto del mundo" ) 
		{
			origen= prompt("ERROR origen: 'nacional', 'mercosur', 'resto del mundo'");
		}
		switch (tipo)   //c) que porcentaje de kilos hay sobre el total de cada tipo ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)
		{
			case "con sal":
          acumkgconsal=acumkgconsal+kilosporcaja;      
				break;
			case "dulces":
          acumkgdulces=acumkgdulces+kilosporcaja;
				break;
			case "sin sal"://b) de las galletitas sin sal , la marca que mas kilos tiene por caja
        if (banderamaskgsinsal) 
      {
          banderamaskgsinsal=false;
          maskilossinsal=kilosporcaja;
          marcamaskilos=nombreprovee;
      } 
       else 
         {
             if (kilosporcaja>maskilossinsal) 
             {
              maskilossinsal=kilosporcaja;
              marcamaskilos=nombreprovee;
             }
         }
         acumkgsinsal=acumkgsinsal+kilosporcaja;
				break;		
			default:
				break;
		}
    //a) informar el producto con la menor cantidad de kilos
    if (banderamenorkilos) 
    {
        banderamenorkilos=false;
        menokiloporcaja=kilosporcaja,
        productomenoskilos=tipo;
    } 
     else 
       {
           if (kilosporcaja<menokiloporcaja) 
           {
            menokiloporcaja=kilosporcaja,
            productomenoskilos=tipo;
           }
       }
  }
  kgtotales=acumkgconsal+acumkgsinsal+acumkgdulces;
    porconsal=acumkgconsal/kgtotales*100;
    porsinsal=acumkgsinsal/kgtotales*100;
    pordulces=acumkgdulces/kgtotales*100;
	alert("a) El producto con la menor cantidad de kilos es "+productomenoskilos);
	alert("b) De las galletitas sin sal , la marca que mas kilos tiene por caja es "+marcamaskilos);
	alert("c) El porcentaje de kilos sobre el total de cada tipo es: sin sal "+porsinsal+" %, con sal "+porconsal+" % y dulces "+pordulces+" %");
  }
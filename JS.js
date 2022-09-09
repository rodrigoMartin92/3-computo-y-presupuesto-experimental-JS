/* VARIABLES INTERNAS */

var cantidadXprecio = 0
var totalDeComputados = 0

var arrayNombreCantidadPrecio = [1,2,3];

/* VARIABLES DE LISTA */

var listaDeComputados = ""
var sumatoriaDeComputados = ""
var listaTotalComputados = ""

var botonComputo = document.querySelector('#idbtnComputo')
botonComputo.addEventListener('click', recopilarDatos)

/* FUNCIONES */

function recopilarDatos(){
    var nomMat = document.querySelector('#idNombreDelMaterial').value
    var cantMat = document.querySelector('#idCantidadDelMaterial').value
    var precioMat = document.querySelector('#idPrecioDelMaterial').value

    computar(nomMat, cantMat, precioMat)    
    trabajarArray(nomMat, cantMat, precioMat)
    trabajarElementosArray(nomMat, cantMat, precioMat)

}

function computar(v1,v2,v3){
    // Toma de elementos
    var listaMat = document.querySelector('#idlistaDeMateriales')
    var sumMat = document.querySelector('#idsumatoriaDeComputados')
    var totMat = document.querySelector('#idtotalDeComputados')

    // Cálculos internos
    listaDeComputados += v1 + "<br>";

    cantidadXprecio = v2 * v3
    sumatoriaDeComputados += cantidadXprecio + "<br>"

    totalDeComputados += cantidadXprecio
    listaTotalComputados += totalDeComputados + "<br>"

    // Valores en pantalla
    listaMat.innerHTML = listaDeComputados
    sumMat.innerHTML = sumatoriaDeComputados
    totMat.innerHTML = listaTotalComputados
}

function trabajarArray(V1,V2,V3){
    //Toma de elementos
    var arrayCompleto1 = document.querySelector('#idarrayCompleto1')

    //valores en pantalla
    console.log(arrayCompleto1)
    console.log(arrayNombreCantidadPrecio)
    arrayCompleto1.innerHTML = arrayNombreCantidadPrecio

}
function trabajarElementosArray(V1,V2,V3){
    //Toma de elementos

    // Cálculos internos

    arrayNombreCantidadPrecio.push([V1,V2,V3]);

    //valores en pantalla
    console.log(JSON.stringify(arrayNombreCantidadPrecio))

}



// function reiniciar(){
//     listaDeComputados= ""
//     sumatoriaDeComputados= ""
//     totalDeComputados= ""
//     console.log("¿Borrado? = ....." + listaDeComputados);
//     console.log("¿Borrado? = ....." + sumatoriaDeComputados);
//     console.log("¿Borrado? = ....." + totalDeComputados);

//     document.getElementById('idlistaDeMateriales').innerHTML=
//     "..........." + listaDeComputados;
//     document.getElementById('idsumatoriaDeComputados').innerHTML=
//     "..........." + sumatoriaDeComputados;
//     document.getElementById('idtotalDeComputados').innerHTML=
//     "..........." + totalDeComputados;
// }
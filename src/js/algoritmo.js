/************** Ejecutar hasMutation sin POST ***************/
//podemos utilizar alguno de estos arreglos para probar la funcion hasMutation()

const adn = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]; // con mas de 2 mutaciones
const adnClean = ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"]; //sin mutaciones
const adnSemiClean = ["ATGCGA","CAGTGC","TTTTTT","AGACGG","GCGTCA","TCACTG"]; //con 1 mutacion

hasMutation(adnSemiClean);

/* Tambien puedes crear tu propio arreglo de 6 indices con una cadena de 6 strings en cada indice*/

function hasMutation(arrayP){
    let totalMutaciones = 0;
    let arrayVertical = []
    let arrayBarraInv = []
    let arrayBarra = []
    
    /***  VERIFICAMOS MUTACIONES HORIZONTALES***/
    totalMutaciones += verificarArray(arrayP)

    /***  CREAMOS ARRAY VERTICAL Y VERIFICAMOS ***/
    arrayVertical = ordenarVertical(arrayP);
    totalMutaciones += verificarArray(arrayVertical)

    /***  CREAMOS ARRAY EN "\" Y VERIFICAMOS ***/
    arrayBarraInv = algoritmo(arrayP);
    totalMutaciones += verificarArray(arrayBarraInv)

    /***  CREAMOS ARRAY EN "/" Y VERIFICAMOS ***/
    arrayBarra = algoritmo2(arrayP);
    totalMutaciones += verificarArray(arrayBarra)

    if(totalMutaciones > 1){
        console.log(`/****************************************/
        El total de mutaciones encontradas es de ${totalMutaciones},
        quiere decir que esta cadena de ADN SI esta mutada
/****************************************/`);
        return true
    }else{
        console.log(`/****************************************/
        El total de mutaciones encontradas es de ${totalMutaciones},
        por lo que esta cadena de adn no se considera mutada
/****************************************/`);
        return false
    }
}

/*************** FUNCION CORE QUE BUSCA COINCIDENCIAS EN LOS STRINGS */
function filtrarOriginal(query, array){
    return array.filter(function (a){
        return a.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
}

//FUNCION QUE VERIFICA QUE LOS DISTINTOS ARRAYS ORDENADOS
function verificarArray(arrayP){
    let a = 'aaaa'
    let t = 'tttt'
    let c = 'cccc'
    let g = 'gggg'

    let filtroA = filtrarOriginal(a, arrayP);//devuelve array vacio
    let filtroT = filtrarOriginal(t, arrayP);
    let filtroC = filtrarOriginal(c, arrayP);
    let filtroG = filtrarOriginal(g, arrayP);

    let mutaciones = 0;
    
    if(filtroA.length != 0){
        mutaciones++;
    }else if(filtroT.length != 0 ){
        mutaciones++
    }else if(filtroC.length != 0){
        mutaciones++
    }else if(filtroG.length != 0){
        mutaciones++
    }
    return mutaciones;
}

/*************** FUNCION QUE ORDENA ELEMENTOS VERTICALMENTE */
function ordenarVertical(arrayP){
    arrayInvertido = [6];
    let cadena = '';
    for(j=0; j<=5;j++){
        for(i = 0; i<=5; i++){
            cadena = cadena.concat(arrayP[i].charAt(j));
            //console.log(cadena);
            if(i==5){
                // console.log(cadena)
                arrayInvertido[j] = cadena;
                cadena = ''
            }
        }
    }
    // console.log(arrayInvertido);
    return arrayInvertido;
}

/************** FUNCION que busca diagonales en forma de" \ "  ************/
function algoritmo(arrayP){
    let arrayBarraInv = [];
    let inverso = ''
    for(i = 5; i>=0; i--){
        inverso = inverso.concat(arrayP[i])
    }
    //console.log(inverso)//obtenemos el adn invertido
    //4 5 6 6 5 4

    //sacamos el primer array de 4
    let cross4_1 = inverso.charAt(3);
    let contador = 3;
    //console.log(array4_1);
    for(i = 0; i<=2; i++){
        contador = contador +5;
        cross4_1 = cross4_1.concat(inverso.charAt(contador));
    }
    arrayBarraInv.push(cross4_1);
    // console.log(cross4_1);

    //sacamos el primer array de 5
    let cross5_1 = inverso.charAt(4);
    contador = 4;
    //console.log(array4_1);
    for(i = 0; i<=3; i++){
        contador = contador +5;
        cross5_1 = cross5_1.concat(inverso.charAt(contador));
    }
    //console.log(cross5_1);
    arrayBarraInv.push(cross5_1);

    //sacamos el primer array de 6
    let cross6_1 = inverso.charAt(5);
    contador = 5;
    //console.log(array4_1);
    for(i = 0; i<=4; i++){
        contador = contador +5;
        cross6_1 = cross6_1.concat(inverso.charAt(contador));
    }
    //console.log(cross6_1);
    arrayBarraInv.push(cross6_1);

    //sacamos el segundo array de 5
    let cross5_2 = inverso.charAt(11);
    contador = 11;
    //console.log(array4_1);
    for(i = 0; i<=3; i++){
        contador = contador +5;
        cross5_2 = cross5_2.concat(inverso.charAt(contador));
    }
    // console.log(cross5_2);
    arrayBarraInv.push(cross5_2);

    //sacamos el segundo array de 4
    let cross4_2 = inverso.charAt(17);
    contador = 17;
    //console.log(array4_1);
    for(i = 0; i<=2; i++){
        contador = contador +5;
        cross4_2 = cross4_2.concat(inverso.charAt(contador));
    }
    // console.log(cross4_2);
    arrayBarraInv.push(cross4_2);

    return arrayBarraInv;
}

/************** FUNCION que busca diagonales en forma de" / "  ************/
function algoritmo2(arrayP){
    let arrayBarra = [];
    let inverso = ''
    for(i = 5; i>=0; i--){
        inverso = inverso.concat(arrayP[i])
    }
    // console.log(inverso)//obtenemos el adn invertido
    //4 5 6 5 4


    //sacamos el primer array de 4
    let cross4_1 = inverso.charAt(33);
    let contador = 33;
    // console.log(array4_1);
    for(i = 0; i<=2; i++){
        contador = contador - 7;
        cross4_1 = cross4_1.concat(inverso.charAt(contador));
    }
    // console.log(cross4_1);
    arrayBarra.push(cross4_1);


    //sacamos el primer array de 5
    let cross5_1 = inverso.charAt(34);
    contador = 34;
    //console.log(array4_1);
    for(i = 0; i<=3; i++){
        contador = contador - 7;
        cross5_1 = cross5_1.concat(inverso.charAt(contador));
    }
    // console.log(cross5_1);
    arrayBarra.push(cross5_1);



    //sacamos el primer array de 6
    let cross6_1 = inverso.charAt(35);
    contador = 35;
    //console.log(array4_1);
    for(i = 0; i<=4; i++){
        contador = contador - 7;
        cross6_1 = cross6_1.concat(inverso.charAt(contador));
    }
    // console.log(cross6_1);
    arrayBarra.push(cross6_1);


    //sacamos el segundo array de 5
    let cross5_2 = inverso.charAt(29);
    contador = 29;
    //console.log(array4_1);
    for(i = 0; i<=3; i++){
        contador = contador -7 ;
        cross5_2 = cross5_2.concat(inverso.charAt(contador));
    }
    // console.log(cross5_2);
    arrayBarra.push(cross5_2);


    //sacamos el segundo array de 4
    let cross4_2 = inverso.charAt(23);
    contador = 23;
    //console.log(array4_1);
    for(i = 0; i<=2; i++){
        contador = contador - 7;
        cross4_2 = cross4_2.concat(inverso.charAt(contador));
    }
    // console.log(cross4_2);
    arrayBarra.push(cross4_2);

    return arrayBarra;
}

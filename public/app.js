const divResultados = document.querySelector('.resultados');
var arrayAdn = [];//arreglo para almacenar doatos del get

const url = 'http://localhost:3000/api/hasMutation';

function getAdn(){
    fetch(url)
    .then(data => data.json())//capturamos la data del JSON
    .then(adns => {//guardamos los datos en un array
        arrayAdn = adns;
        console.log('Datos recibidos desde el servidor: ')
        console.log(adns);
    });
}

//obteniendo los adns
getAdn()


/************ CREANDO EL POST ***************/
const formulario = document.querySelector('#form');
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    const datos = new FormData(formulario);
    const adnString = datos.get('adnTxt');
    let re =new RegExp ('[ATGC,]');
    let result = re.test(adnString);
    console.log(result);
    if(result == false){
        alert('debes cumplir las condiciones de texto')
    }else{
        const adnArray = adnString.split(',')
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                adn : adnArray,
            })
        })
        .then(res => res.json())
        .then(response => alert(response))
    }
})


/****************** desplegamos por pantalla ejemplos de caddenas de ADN  ******************* */
const adn = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
const adnClean = ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"];
const adnSemiClean = ["ATGCGA","CAGTGC","TTTTTT","AGACGG","GCGTCA","TCACTG"];

const p1 = document.querySelector('#cadena1')
p1.innerHTML += adn.toString()

const p2 = document.querySelector('#cadena2')
p2.innerHTML += adnClean.toString()

const p3 = document.querySelector('#cadena3')
p3.innerHTML += adnSemiClean.toString()
// const array1 = [1, 2, 'a', '1a'];


//// validacion de input
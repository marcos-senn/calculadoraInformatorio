let container = document.getElementById('container');

let displayContainer = document.createElement('div') //Creo un div donde voy a colocar la operacion y el resultado de la operacion
displayContainer.className = 'displayContainer'

let resultOutput = document.createElement('div') //Display donde va a mostrar el resultado de la operacion
resultOutput.className = 'resultOutput'

let operationOutput = document.createElement('div')  //Display donde va a mostrar la operacion realizada
operationOutput.className = 'operationOutput'

displayContainer.appendChild(resultOutput)   //se agregaron los div dentro del display container para mostrar el resultado y la operacion 
displayContainer.appendChild(operationOutput) 
container.appendChild(displayContainer)  //agrego el contenedor de los display al contenedor principal

let tableContainer = document.createElement('div') //creo un div que va a almacenar la tabla que contiene los botones
tableContainer.className = 'table-container'
container.appendChild(tableContainer) //agrego ese div al contenedor principal

let table = document.createElement('table'); //Creo la tabla que va a contener los botones
table.className = 'listContainer'
tableContainer.appendChild(table); //agrego la tabla al contenedor de la tabla


let buttonsLabels = ['(',')','%','AC',
                    '7','8','9','/',
                    '4','5','6','*',
                    '1','2','3','-',
                    '0','.','=','+'] //Array que contiene el texto de cada boton de la calculadora en el orden que quiero

let buttonCount = 0; //contador que sirve para recorrer el array y colocar como text content esos elementos en cada boton

for(let i = 0; i<5; i++){
    var row = document.createElement('tr'); //Creo las filas de la calculadora
    table.appendChild(row);

    for(let j = 0; j<4; j++){
        var col = document.createElement('td'); //Creo las columnas de la caluladora
        row.appendChild(col);  

        var button = document.createElement('button'); //Creo botones para cada celda de la tabla
        button.className = 'button' 
        button.textContent = buttonsLabels[buttonCount]

        col.appendChild(button)
        buttonCount++
        
        button.addEventListener('click', buttonClick); //agrego a cada boton de cada celda el evento click que va a ejecutar la funcion  buttonClick
    };
};

let operation = ''; //creo variables para almacenar el string de operacion y resultado que se va a mostrar en mi display
let result = '';

function buttonClick() { //funcion que se va a disparar cuando se haga click en el boton
    let buttonValue = this.textContent; //el texcontent del boton donde se haga click se almacena en variable buttonvalue
    //el elemento que ejecuta buttonclick es el button creado por lo que this hace referencia al textcontent del boton

    if (buttonValue === 'AC') { //Si el textcontent del boton es AC mis string van a estar vacios
      operation = ' ';
      result = ' ';
    } 
    else if (buttonValue === '=') { //Si el textcontent del boton es = y no esta vacio se evalua mediante eval()
      if (operation !== ''){
         result = eval(operation); // eval() evalua una expresion matematica guardad en un string y guarda el resultado en result
      };
    }
    else {
        operation += buttonValue; // concateno el textcontent del boton para mostrar la operacion realizada
      }
    operationOutput.textContent = operation; // muestro la operacion realizada en display creado al principio
    resultOutput.textContent = result;// muestro el resultado de la operacion realizada en display creado al principio
  }

//---------------cambiar theme-----------------------
let body = document.body //obtengo el elemento body en variable body
let themeButton = document.createElement('button') //Creo un boton para cambiar de el modo del theme
themeButton.className = 'themeButton' //le agrego la clase themebutton
themeButton.textContent = 'Dark theme' //agrego el text content inicial al boton
body.appendChild(themeButton) //agrego al boton como hijo de body para colocarlo al lado del container de la calculadora

function changeTheme(){ // creo una funcion para verificar si el body y el display de la calculadora tienen la clase dark-theme
if (body.classList.contains('dark-theme')) { //si contiene la clase 
  body.classList.remove('dark-theme'); //remuevo la clase del body
  themeButton.textContent = 'Dark theme'; //cambio el textcontent a modo oscuro
  displayContainer.classList.remove('dark-theme')//remuevo la clase del displat
} 
else { //si no cumplo la condicion solamente queda la opcion donde el dark-theme no esta en el body ni en el display por lo que
  body.classList.add('dark-theme'); //añado esa clase al body
  themeButton.textContent = 'Light theme'; //cambio text content a modo claro
  displayContainer.classList.add('dark-theme') //añado esa clase al display
}
}

themeButton = document.getElementsByClassName('themeButton')[0]; // objeteno el primer elemento de clase themebutton
themeButton.addEventListener('click',changeTheme) //escuchador de evento click que dispara la funcion changeTheme

 //--------------------- Footer --------------------- creo el footer para ponerle mi firma ------------------
 let footer = document.createElement('footer')
 body.appendChild(footer)    //creo un footer con clase footer y lo agrego como hijo al body
 footer.className = 'footer'
 
 let footerContent = document.createElement('div')
 footer.appendChild(footerContent) //creo un div con clase footercontent como hijo de footer que va a contener el texcontent 
 footerContent.className = 'footerContent'
 
 footerContent.textContent = 'Informatorio 2023'
 
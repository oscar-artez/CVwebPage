
// const axios = require('axios').default;// // List of sentences
// var _CONTENT = [ 
// 	"-Desarrollador Web", 
//     "-Front-End Developer", 
// 	"-Soporte técnico",
// ];

// // Current sentence being processed
// let _PART = 0;

// // Character number of the current sentence being processed 
// let _PART_INDEX = 1;

// // Holds the handle returned from setInterval
// let _INTERVAL_VAL;

// // Element that holds the text
// let _ELEMENT = document.querySelector("#TextTypeW");

// // Implements typing effect
// function Type() { 
// 	// Get substring with 1 characater added
// 	let text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
// 	_ELEMENT.innerHTML = text;
// 	_PART_INDEX++;

// 	// If full sentence has been displayed then start to delete the sentence after some time
// 	if(text === _CONTENT[_PART]) {

// 		clearInterval(_INTERVAL_VAL);
// 		setTimeout(function() {
// 			_INTERVAL_VAL = setInterval(Delete, 50);
// 		}, 1000);
// 	}
// }

// // Implements deleting effect
// function Delete() {
// 	// Get substring with 1 characater deleted
// 	let text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
// 	_ELEMENT.innerHTML = text;
// 	_PART_INDEX--;

// 	// If sentence has been deleted then start to display the next sentence
// 	if(text === '-') {
// 		clearInterval(_INTERVAL_VAL);

// 		// If current sentence was last then display the first one, else move to the next
// 		if(_PART == (_CONTENT.length - 1))
// 			_PART = 0;
// 		else
// 			_PART++;
		
// 		_PART_INDEX = 0;

// 		// Start to display the next sentence after some time
// 		setTimeout(function() {
// 			_INTERVAL_VAL = setInterval(Type, 100);
// 		}, 200);
// 	}
// }

// // Start the typing effect on load
// _INTERVAL_VAL = setInterval(Type, 100);

// ///

function Calculadora(capital, diasAtraso, bandera){
    
    let RefrendoVigente =  capital * bandera;
    
    let RefrendoAtrasado =  capital * .18 + ((diasAtraso - 1 )* 50);
    let RefrendoVigentepl =  RefrendoVigente * 8 + ((diasAtraso - 1 *50))
    console.log(RefrendoVigente);
    console.log(RefrendoVigentepl);
    console.log(RefrendoAtrasado);

}

Calculadora(20600, 263, .15);



// function Cocktail(){
// let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
// let ingrediente = "strIngredient";



// axios.get(url)
// .then(response => {
//     console.log(response.data.drinks);
//     let bebidas = response.data.drinks;
 
//      for(let i=0; i<bebidas.length -1; i++){
//         for(let u=1; u<=15; u++){
//             http://example.com/example/example/example/exampleFunction
//         }
        
//      }
// })
// .catch(e => {
//     console.log(e);
//     // Capturamos los errores
// })
// }

// Cocktail();
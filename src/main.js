 // List of sentences
 var _CONTENT = [ 
 	"-Desarrollador Web", 
     "-Front-End Developer", 
 	"-Soporte técnico",
 ];

// // Current sentence being processed
 let _PART = 0;

// // Character number of the current sentence being processed 
 let _PART_INDEX = 1;

// // Holds the handle returned from setInterval
 let _INTERVAL_VAL;

// // Element that holds the text
 let _ELEMENT = document.querySelector("#TextTypeW");

 // Implements typing effect
 function Type() { 
 	// Get substring with 1 characater added
 	let text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
 	_ELEMENT.innerHTML = text;
 	_PART_INDEX++;

 	// If full sentence has been displayed then start to delete the sentence after some time
 	if(text === _CONTENT[_PART]) {

 		clearInterval(_INTERVAL_VAL);
 		setTimeout(function() {
 			_INTERVAL_VAL = setInterval(Delete, 50);
 		}, 1000);
 	}
 }

 // Implements deleting effect
 function Delete() {
 	// Get substring with 1 characater deleted
 	let text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
 	_ELEMENT.innerHTML = text;
 	_PART_INDEX--;

 	// If sentence has been deleted then start to display the next sentence
 	if(text === '-') {
 		clearInterval(_INTERVAL_VAL);

 		// If current sentence was last then display the first one, else move to the next
 		if(_PART == (_CONTENT.length - 1))
 			_PART = 0;
 		else
 			_PART++;
		
 		_PART_INDEX = 0;

 		// Start to display the next sentence after some time
 		setTimeout(function() {
 			_INTERVAL_VAL = setInterval(Type, 100);
 		}, 200);
 	}
 }

 // Start the typing effect on load
 _INTERVAL_VAL = setInterval(Type, 100);

// Timeout Progressbar after 30 seconds  //

setTimeout(() => {
	let progressBar = document.querySelectorAll('div.progress-bar');
	for (let i = 0; i<progressBar.length; i++) {
		progressBar[i].classList.remove("progress-bar-animated", "progress-bar-striped");
	}

}, 30000);


if('serviceWorker'in navigator){
	navigator.serviceWorker.register('./src/sw.js')
	.then(reg => console.log('registro de service worker exitoso', reg))
	.catch(err => console.warn('Error al tratar de registrar Service worker', err))
}
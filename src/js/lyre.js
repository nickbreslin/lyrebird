/* global annyang, aanyangCallbacks, SpeechKITT */

let lyre = {};
lyre.event = {};

lyre.event.scroll_up = function () {
	'use strict';
	console.log('scroll up');
};

lyre.event.scroll_down = function (tag) {
	'use strict';
	console.log('scroll down: ' + tag);
};


lyre.init = function () {
	'use strict';

	if( !annyang ) {
		console.log('Annyang is not initialized.');
	}

	aanyangCallbacks();
	lyre.speechkitt();
	lyre.annyang();
};

lyre.speechkitt = function () {
	'use strict';
	
	// Tell KITT to use annyang
	SpeechKITT.annyang();

	// Define a stylesheet for KITT to use
	SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat.css');

	// Render KITT's interface
	SpeechKITT.vroom();
};

lyre.annyang = function() {
	'use strict';

	let commands = {};

	commands['scroll up']   = lyre.event.scroll_up;
	commands['scroll down'] = lyre.event.scroll_down;

	annyang.addCommands(commands);
	annyang.setLanguage('en');

	annyang.start();
};


document.addEventListener('DOMContentLoaded', function() { 
	'use strict';
	lyre.init();
});

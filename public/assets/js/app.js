/* global annyang */
/* jshint unused: false */

function aanyangCallbacks() {
    'use strict';

    annyang.debug();
    
    annyang.addCallback('result', function(phrases) {
    //    console.log('sound stop');
    //    console.log('I think the user said: ', phrases[0]);
    //    console.log('But then again, it could be any of the following: ', phrases);
    });


    annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
        console.log('MATCH: ' + userSaid); // sample output: 'hello'
        console.log('MATCH: ' + commandText); // sample output: 'hello (there)'
        console.log('MATCH: ' + phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
    });


    annyang.addCallback('resultNoMatch', function(phrases) {
        console.log('NO MATCH: I think the user said: ', phrases[0]);
        console.log('NO MATCH: But then again, it could be any of the following: ', phrases);
    });


    annyang.addCallback('soundstart', function() {
        console.log('sound detected');
    });
};

/* global annyang, aanyangCallbacks, SpeechKITT, util */

let lyre = {};
lyre.event = {};
lyre.linkIndex = 0;

lyre.event.scroll_up = function () {
	'use strict';
	console.log('scroll up');
};

lyre.event.scroll_down = function () {
	'use strict';
	console.log('scroll down: ');
};

lyre.event.select_nav = function () {
	'use strict';
	$('nav').addClass('border border-primary');
};

lyre.event.select_link = function (ele) {
	'use strict';

	let i = lyre.linkIndex;

	switch( ele ) {
		case 'first':
			i = 0;
			break;

		case 'second':
			i = 1;
			break;

		case 'third':
			i = 2;
			break;

		case 'next':
			i += 1;
			break;

		case 'previous':
			i -= 1;
			break;

		default:
			i = i;
	} 


	//util.js
	util.clamp(i, 0, $('a', 'nav').length);

	lyre.linkIndex = i;

	$('a', 'nav').eq(i).focus();
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

	commands['select nav'] = lyre.event.select_nav;
	commands['select navigation'] = lyre.event.select_nav;

	commands['select :ele link'] = lyre.event.select_link;

	annyang.addCommands(commands);
	annyang.setLanguage('en');

	annyang.start();
};


document.addEventListener('DOMContentLoaded', function() { 
	'use strict';
	lyre.init();
});
;

let util = {};

util.clamp = function (num, min, max) {
	'use strict';
  return num <= min ? min : num >= max ? max : num;
};
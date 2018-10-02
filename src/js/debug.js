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
}
'use strict'

//first button

var output = document.getElementById('temp-output');
var tempButton = document.getElementById('temp-button');
var temperature;

tempButton.addEventListener('click', function(){
    temperature = window.prompt('What is the temperature in Celsius?');
    fahr();
    waterBehave();
});

var log = function(text){
    document.write(text + '<br>');
}

function fahr() {
    fahrenheit = (temperature * 1.8) + 32;
    output.innerHTML = log('Temperature is ' + fahrenheit + 'Fahrenheits') + output.innerHTML;
}

function waterBehave() {
    if (temperature >= 100) {
        output.innerHTML = log('Water is steam in this temperature') + output.innerHTML;
    }
    else if (temperature < 100 && temperature >= 0) {
        output.innerHTML = log('Water is liquid in this temperature') + output.innerHTML;
    }
    else if (temperature < 0) {
        output.innerHTML = log('Water is frozen in this temperature') + output.innerHTML;
    }
    else {
      log('Sorry, invalid value') + output.innerHTML;
    }
}

function cel() {
    temperature = (farTemperature - 32) / 1.8;
    output.innerHTML = log('Temperature is ' + temperature + 'Celsius') + output.innerHTML;
}

// second button

var output2 = document.getElementById('far-output');
var farButton = document.getElementById('far-button');
var farTemperature;

farButton.addEventListener('click', function() {
    farTemperature = window.prompt('What is the temperature in Fahrenheit?');
    cel();
    waterBehave();
});

/* 
Aby ułatwić sobie życie, starałem się wprowadzić w drugim przycisku nową zmienną:
var celTemperature = Math.round(farTemperature - 32) / 1.8;
- zwracała NaN
*/
'use strict'
var output = document.getElementById('temp-output');
var tempButton = document.getElementById('temp-button');
var temperature;
tempButton.addEventListener('click', function(){
  temperature = window.prompt('What is the temperature in Celsius?');
    if(temperature < 0 || temperature >= 0){
      output.innerHTML = 'The temperature is ' + ((temperature * 1.8) + 32) + ' Fahrenheits' + '<br>' + output.innerHTML;
    }
    else {
      output.innerHTML = 'Sorry, invalid value';
    }
    if(temperature < 0){
      output.innerHTML = 'Water is frozen in this temperature' + '<br>' + output.innerHTML;
    }
    if(temperature >= 0 && temperature < 100){
      output.innerHTML = 'Water is liquid in this temperature' + '<br>' + output.innerHTML;
    }
    if(temperature >= 100) {
      output.innerHTML = 'Water is steam in this temperature' + '<br>' + output.innerHTML;
    }
    if(temperature >= 20 && temperature < 50) {
      output.innerHTML = 'You can wear only t-shirt with shorts' + '<br>' + output.innerHTML;
    }
  if(temperature >= 5 && temperature < 20) {
    output.innerHTML = 'You should wear light jacket' + '<br>' + output.innerHTML;
  }
  if(temperature > -30 && temperature < 5) {
    output.innerHTML = 'You must wear warm coat, hat and a scarf' + '<br>' + output.innerHTML;
  }
  if(temperature >= -218 && temperature <= -183 ) {
    output.innerHTML = 'Oxygen is liquid in this temperature' + '<br>' + output.innerHTML;
  }
  if(temperature == 36) {
    output.innerHTML = 'Its melting point of butter' + '<br>' + output.innerHTML;
  }
  if(temperature == 62) {
    output.innerHTML = 'Its optimum temperature to sous-vide a soft boiled egg' + '<br>' + output.innerHTML;
  }
  if(temperature > 71) {
    output.innerHTML = 'Its more than Earths surface temperature even recorded' + '<br>' + output.innerHTML;
  }
});

// Second button
var output2 = document.getElementById('far-output');
var farButton = document.getElementById('far-button');
var farTemperature;
farButton.addEventListener('click', function(){
  farTemperature = window.prompt('What is the temperature in Fahrenheit?');
    if(farTemperature < 0 || farTemperature >= 0){
      output2.innerHTML = 'The temperature is ' + (farTemperature - 32) / 1.8 + ' Celsius' + '<br>' + output2.innerHTML;
    }
    if(farTemperature < 0 || farTemperature >= 0){
      output2.innerHTML = 'The temperature is ' + farTemperature + ' Fahrenheit' + '<br>' + output2.innerHTML;
    }
    else {
      output2.innerHTML = 'Invalid value';
    }
    if((farTemperature - 32) / 1.8 < 0){
       output2.innerHTML = 'Water is frozen in this temperature' + '<br>' + output2.innerHTML;
    }
    if((farTemperature - 32) / 1.8 > 0 && (farTemperature - 32) / 1.8 < 100 ){
       output2.innerHTML = 'Water is liquid in this temperature' + '<br>' + output2.innerHTML;
    }
    if((farTemperature - 32) / 1.8 > 100 ){
       output2.innerHTML = 'Water is steam in this temperature' + '<br>' + output2.innerHTML;
    }
    if((farTemperature - 32) / 1.8 >= 20 && (farTemperature - 32) / 1.8 < 50) {
      output2.innerHTML = 'You can wear only t-shirt with shorts' + '<br>' + output2.innerHTML;
    }
  if((farTemperature - 32) / 1.8 >=5 && (farTemperature -32) / 1.8 < 20) {
    output2.innerHTML = 'You should wear light jacket' + '<br>' + output2.innerHTML;
  }
  if((farTemperature -32) / 1.8 > -30 && (farTemperature -32) / 1.8 < 5) {
    output2.innerHTML = 'You must wear warm coat, hat and a scarf' + '<br>' + output2.innerHTML;
  }
});

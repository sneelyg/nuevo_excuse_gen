/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var quien = ["Mi mamá ", "Mi Perro ", "El payaso ", "Cada perro ", "El búho "];
  var quehizo= ["meó ", "se comió ", "quemó ", "cocinó "];
  var quecosa = ["el auto ", "la casa ", "mi tarea ", "al perro ", "un caballo "];
  var cuando =["ayer.", "después de clase.", "mientras estaba en el baño.", "cuando pasó el temblor."];

  var excusa = quien[(Math.floor(Math.random()*(quien.length+1))] +
  quehizo[(Math.floor(Math.random()*(quehizo.length+1))] +
  quecosa[(Math.floor(Math.random()*(quecosa.length+1))] +
  cuando[(Math.floor(Math.random()*(cuando.length+1))];

  console.log(excusa);



document.querySelector(#excuse).innerHTML = excusa;

};
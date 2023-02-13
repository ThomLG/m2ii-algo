// Ecrire un programme :
// chaque indice du tableau correspond à une matiere
// chaque indice des tableaux dans le tableau correspond à des notes par matière.combien de matiere ?
// par matiere combien de notes ?
// inserer les notes.pour chaque matiere : etablir la moyenne, la note max, la note inferieur.

/********* Initialisation des tableaux ***********************************/

let bulletin = [];

/********************************************* */
nbrMatieres = Number(prompt("nombre de matières:  "));

function init() {
  for (let i = 0; i < nbrMatieres; i++) {
    bulletin.push(prompt("Saisissez le nom de la " + (i + 1) + "e matière : "));
  }
}
init();

let totalMatiere = console.log("il y a " + bulletin.length + " matière(s)");

/****************************** */

function initNotes() {
  for (let n = 0; n < bulletin.length; n++) {
    let numberNotes = Number(
      prompt("Saisissez le nombre de notes en " + bulletin[n])
    );
    bulletin[n] = [];

    for (let x = 0; x < numberNotes; x++) {
      bulletin[n].push(Number(prompt("saisissez la " + (x + 1) + "e note :")));
    }
  }
}
initNotes();

function maxMin() {
  for (i = 0; i < bulletin.length; i++) {
    alert("Note max : " + Math.max(...bulletin[i]));
  }
  for (i = 0; i < bulletin.length; i++) {
    alert("Note min : " + Math.min(...bulletin[i]));
  }
}

maxMin();

function numAverage(array) {
  // prend en argument un tableau array
  for (i = 0; i < array.length; i++) {
    let c = 0;
    let b = array[i].length;
    for (j = 0; j < array[i].length; j++) {
      c += array[i][j];
    }
    alert(c / b);
  }
}

numAverage(bulletin);

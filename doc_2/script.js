/*Ecrire un programme :qui vous demande combien de note vous voulez ?
creer un tableau de la taille demandé.
vous demande de rentrer chaque note.Indique la moyenne des notes.
La note la plus haute.
La note la plus faible.*/

let notesArray = [];

nbrNotes = Number(prompt("Combien de notes voulez-vous saisir ? :  "));

function init() {
  for (let i = 0; i < nbrNotes; i++) {
    notesArray.push(Number(prompt("Saisissez la note voulue : ")));
  }
}
init();

showNbrNotes = console.log("il y a " + notesArray.length + " notes");

let max = Math.max(...notesArray);
let min = Math.min(...notesArray);

showMaxMinNotes = alert(
  "La note la plus élevée est " + max + ", la plus faible est : " + min
);

function numAverage(array) {
  // prend en argument un tableau array
  let b = array.length;
  let c = 0;
  for (i = 0; i < b; i++) {
    // tant que i est inférieur à b (taille du tableau)
    c += Number(array[i]); // c = à la somme des éléments présents ds le tableau array
  }
  return c / b;
}

showAverage = alert("la moyenne est de " + numAverage(notesArray));

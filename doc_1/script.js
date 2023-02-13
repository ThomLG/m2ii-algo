//ecrire la fonction factorielle en recursif. on utilise aucune boucle

function factorielle(valeur)
{
    if (valeur == 0) { 
        return 1; 
    }else{ 
        return valeur * factorielle(valeur - 1); 
    }
}


// avec les ternaires : function recFactTern(n) {  return n < 0 ? "Nombre négatif caca" : n <=1 ? 1 : n*recFactTern(n-1);}





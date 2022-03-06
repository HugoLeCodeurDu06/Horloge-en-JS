//Le 6 mars 2022

var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    var today, année, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres;


    // Récupérer la date actuelle :
    today = new Date();

    // Récupérer l'année :
    année = today.getFullYear();

    // Récupérer le mois :
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre", ];
    mois = listeMois[today.getMonth()]; //getMonth() donne l'index 1 comme on est en Mars, ce qui donne la valeur "Mars" depuis nore liste

    //Récupérer le numéro du jour du mois :
    jourNumero = today.getDate(); //donne 6

    //Récupérer le jour ⚠️La semaine commence un dimanche en Javascript.
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()];


    //Afficher les heures, minutes et secondes toujours avec deux chiffres :
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

    // Récupérer les heures :
    heures = deuxChiffres(today.getHours());

    //Récupérer les minutes :
    minutes = deuxChiffres(today.getMinutes());

    // Récupérer les secondes :
    secondes = deuxChiffres(today.getSeconds());

    // Affichage dans les DIV du HTML :
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + "," + jourNumero +" " + mois + " " + année;

    //  Lancer la fonction affichage heure toutes les 1000 ms, soit toute les secondes :
    setTimeout(affichageHeure, 1000);
}

// Lancer la fonction une fois au début :
affichageHeure();

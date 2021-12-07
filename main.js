/*---------------------------------------------------------
                        Variables
-----------------------------------------------------------*/

//variables -> composants html
// TODO
var arrayCard = [];
const bouton = document.querySelectorAll("input");

//variables compteur
// TODO
var nbClick = 0;


/*---------------------------------------------------------
                    jeux de cartes
-----------------------------------------------------------*/
//cartes de coeur
let asCoeur = [11, 'as de coeur'];
let deuxCoeur = [2, '2 de coeur'];
let troisCoeur = [3, '3 de coeur'];
let quatreCoeur = [4, '4 de coeur'];
let cinqCoeur = [5, '5 de coeur'];
let sixCoeur = [6, '6 de coeur'];
let septCoeur = [7, '7 de coeur'];
let huitCoeur = [8, '8 de coeur'];
let neufCoeur = [9, '9 de coeur'];
let dixCoeur = [10, '10 de coeur'];
let valetCoeur = [10, 'valet de coeur'];
let dameCoeur = [10, 'dame de coeur'];
let roiCoeur = [10, 'roi de coeur'];

//cartes de trèfle
let asTrefle = [11, 'as de trèfle'];
let deuxTrefle = [2, '2 de trèfle'];
let troisTrefle = [3, '3 de trèfle'];
let quatreTrefle = [4, '4 de trèfle'];
let cinqTrefle = [5, '5 de trèfle'];
let sixTrefle = [6, '6 de trèfle'];
let septTrefle = [7, '7 de trèfle'];
let huitTrefle = [8, '8 de trèfle'];
let neufTrefle = [9, '9 de trèfle'];
let dixTrefle = [10, '10 de trèfle'];
let valetTrefle = [10, 'valet de trèfle'];
let dameTrefle = [10, 'dame de trèfle'];
let roiTrefle = [10, 'roi de trèfle'];

//cartes de carreau
let asCarreau = [11, 'as de carreau']; 
let deuxCarreau = [2, '2 de carreau'];
let troisCarreau = [3, '3 de carreau'];
let quatreCarreau = [4, '4 de carreau'];
let cinqCarreau = [5, '5 de carreau'];
let sixCarreau = [6, '6 de carreau'];
let septCarreau = [7, '7 de carreau'];
let huitCarreau = [8, '8 de carreau'];
let neufCarreau = [9, '9 de carreau'];
let dixCarreau = [10, '10 de carreau'];
let valetCarreau = [10, 'valet de carreau'];
let dameCarreau = [10, 'dame de carreau'];
let roiCarreau = [10, 'roi de carreau'];

//cartes de pique
let asPique = [11, 'as de pique'];
let deuxPique = [2, '2 de pique'];
let troisPique = [3, '3 de pique'];
let quatrePique = [4, '4 de pique'];
let cinqPique = [5, '5 de pique'];
let sixPique = [6, '6 de pique'];
let septPique = [7, '7 de pique'];
let huitPique = [8, '8 de pique'];
let neufPique = [9, '9 de pique'];
let dixPique = [10, '10 de pique'];
let valetPique = [10, 'valet de pique'];
let damePique = [10, 'dame de pique'];
let roiPique = [10, 'roi de pique'];

//jeux de cartes complet
let jeux = [asCoeur, deuxCoeur, troisCoeur, quatreCoeur, cinqCoeur, sixCoeur, 
septCoeur, huitCoeur, neufCoeur, dixCoeur, valetCoeur, dameCoeur, roiCoeur, 
asTrefle, deuxTrefle, troisTrefle, quatreTrefle, cinqTrefle, sixTrefle, 
septTrefle, huitTrefle, neufTrefle, dixTrefle, valetTrefle, dameTrefle, roiTrefle,  
asCarreau, deuxCarreau, troisCarreau, quatreCarreau, cinqCarreau, sixCarreau, 
septCarreau, huitCarreau, neufCarreau, dixCarreau, valetCarreau, dameCarreau, roiCarreau, 
asPique, deuxPique, troisPique, quatrePique, cinqPique, sixPique, septPique,
huitPique, neufPique, dixPique, valetPique, damePique, roiPique];
/*---------------------------------------------------------
                        Fonctions
-----------------------------------------------------------*/



//fontion qui pioche les 4 cartes et stocke leur valeur dans un array

function draw(){
    arrayCard = [];
    
    for (let i = 0; i < 4; i++){
        const rdm = Math.floor(Math.random() * jeux.length);
        jeux.splice(rdm,1);
        arrayCard.push(jeux[rdm]);
    }
    return arrayCard;
    
}

arrayCard.push(draw());


// fonction affichage en cas de victoire Yay ou défaite "nooooooo"!

function victoireOP(){

    if(arrayCard[0][0] + arrayCard[1][0] > arrayCard[2][0]+ arrayCard[3][0] && arrayCard[0][0] + arrayCard[1][0] <= 21 || arrayCard[2][1] + arrayCard[3][1] > 21) { 
        document.querySelector("#resultat").textContent = `Bravo c'est gagné ! Félicitations !`;
        document.querySelector("#resultat").setAttribute("style","font-size: 3em;");
        // alert("Bravo c'est gagné ! Félicitations !");
    } else if(arrayCard[0][0] + arrayCard[1][0] == arrayCard[2][0]+ arrayCard[3][0]) {
        document.querySelector("#resultat").textContent = `C'est une égalité ! Je sais pas comment ça se passe [insert random cringe music] !`;
        document.querySelector("#resultat").setAttribute("style","font-size: 3em;");
        // alert("Pas de chance pour cette fois, mais la banque est goatesque !");
    }else {
        document.querySelector("#resultat").textContent = `Pas de chance pour cette fois, mais la banque est beaucoup trop forte dans le hasard !`;
        
        // alert("Pas de chance pour cette fois, mais la banque est goatesque !");
    }

}


// event du bouton pour récupérer les cartes du joueur
bouton[1].addEventListener("click", function() {
    nbClick++;
    if(nbClick == 3){

        document.querySelector("#scoresJ").textContent = `scores du joueur : ${arrayCard[0][0]} `;

        document.querySelector("#valueCarteJ").textContent = `valeur de la carte du joueur est de ${arrayCard[0][0]}`;

        document.querySelector("#nomCarteJ").textContent = `Le joueur a pioché un  ${arrayCard[0][1]}`;

    } else if(nbClick == 4){

        bouton[1].setAttribute("class","btJ");
        bouton[2].setAttribute("id","reset");

        document.querySelector("#scoresJ").textContent = `scores du joueur : ${arrayCard[0][0] + arrayCard[1][0]} `;

        document.querySelector("#valueCarteJ").textContent = `valeur de la carte du joueur est de ${arrayCard[0][0]} et ${arrayCard[1][0]}`;

        document.querySelector("#nomCarteJ").textContent = `Le joueur a pioché un ${arrayCard[0][1]} puis un(e) ${arrayCard[1][1]}`;
        document.querySelector("#scoresJ").setAttribute("style","font-size: 3em;");
        document.querySelector("#scoresB").setAttribute("style","font-size: 3em;");
        
        victoireOP();
    } 
});

// event du bouton pour récupérer les cartes de la banque

bouton[0].addEventListener("click", function() {
    nbClick++;

    if(nbClick == 1){

        document.querySelector("#scoresB").textContent = `scores de la banque : ${arrayCard[0][0]} `;

    } else if(nbClick == 2){

        bouton[1].setAttribute("class","bth");
        bouton[0].setAttribute("class","btJ");

        document.querySelector("#scoresB").textContent = `scores de la banque : ${arrayCard[2][0] + arrayCard[3][0]} `;

    } 
});

//fonction reset de l'interface

bouton[2].addEventListener("click", function() {
    nbClick++;
    if(nbClick == 5){
        alert("en avant pour qui veut gagner des dollars !")
        window.location.reload();
    }
});


// euuuuuh .......

document.addEventListener("mouseleave", function(event){

if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
{

    alert("Non stp viens jouer avec nous encore un peu, tu vas surement gagner la prochaine fois, j'en suis convaincu !");

    }
});
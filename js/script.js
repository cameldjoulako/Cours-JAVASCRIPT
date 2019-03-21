/*
	Apprendre JavaScript par la pratique
	Copyright Camel Léonce Djoulako Mars 2019 - Software Engineer
 */

/*CREATION  DES VARIABLES */
var name = "Camel";
console.log(name);//affiche Camel en console
let company = "Homedeve";
console.log(company);

/* les variable de type nombre*/
var x = 15;
console.log(x);
var d = 5.8;
console.log(d);

/*convertion d'un nombre en chaine de caractere*/
var anneeNaissance = 2019;
console.log(anneeNaissance);

var anneeNaissanceToString = anneeNaissance.toString();
console.log(anneeNaissanceToString);

/*Les variables de type chaine de cacterere*/
var nomPays='Cameroun'
var nomPays = "Cameroun"
console.log(nomPays);

/*Taille d'une chaine de caractere!*/
var taille = nomPays.length;
console.log(taille);

/*Conversion d'une chaine en entier*/
var anneeNaissance = '2012';
console.log(anneeNaissance);

var anneeNaissanceNumber = parseInt(anneeNaissance);
console.log(anneeNaissanceNumber);

/*conversion d'une chaine en decimal*/
var moyenne = "12.75";
console.log(moyenne)

var moyenneNumber = parseFloat(moyenne);
console.log(moyenneNumber);

/*position d"un mot dans une chaine de caractere"*/
var nomPrenom = "Camel Djoulako";
console.log(nomPrenom);
var position = nomPrenom.indexOf("Djoulako");
console.log("Le nom se trouve en position: "+position);

/*remplacer un mot d'une chaine par un autre mot"*/
var modification = nomPrenom.replace("Camel","Léonce");
console.log("Le nouveau prenom est: "+modification);

/*concaténation de deux chaine de caractere*/

var prenom = "Camel";
var nom = "Djoulako";
nomEtPrenom = nom+" "+prenom;
console.log("Je m'appelle: "+nomEtPrenom+" et je suis Ingénieur Logiciel");


/*Les Operateurs en Javascript */

/*l'affectation*/
var langagePreferes; //creation de la variable
langagePreferes = "JAVA, PHP, JavaScript"; //afffectaion: on assigne une valeur a la variable crée
console.log("Mes langage de programmation préferé sont: "+langagePreferes);
 
 /*Opérateur arithmetique : Pour faire des Opérations sur les nombres*/
 var prixAchat = 25000;
 var prixDeVente = 30000;
 var someTotale = prixAchat + prixDeVente; //Addition
 console.log("La somme Totale est de: "+someTotale);

 var benefice = prixDeVente-prixAchat; //soustraction
 console.log("Mon bénéfice est de: "+benefice);
 
 //soustraction
 var a=10;
 var b= 5;
 resultat = a-b;
 console.log(+a+"-"+b+" = "+resultat);

 //Multiplication
 resultat= a*b;
 console.log(+a+"*"+b+" = "+resultat);

//division
resulat = a/b;
console.log(+a+"/"+b+" = "+resultat);

//Modulo
var totalPoints = 220;
var coef = 16;
var reste = totalPoints%coef;
console.log("Reste de la division de "+totalPoints+" par "+coef+" = "+reste);

//incrémentation
var nombre =0;
console.log("Nombre vaut: "+nombre);
nombre++; // equivalent a x=x+1 : 
console.log("Nombre vaut: "+nombre);
nombre--; //x = x-1
console.log("Nombre vaut: "+nombre);


//post incrementation : il affecte d'abord la valeur courante puis s'incremente ensuite
var note = 15;
var x=1;
console.log("Note: "+note);
console.log("x: "+x);
note = x++; 
console.log("Valeur de x: "+x);
console.log("Note: "+note);

//préincrementation
var note = 10;
var x=10;
console.log("Note: "+note);
console.log("x: "+x);
note = ++x; //incrémentation puis affectation
console.log("Valeur de x: "+x);
console.log("Note: "+note);

//simplification d'écriture
var x = 10;
var some =15;
console.log("some: "+some);

some +=x //some = some+x
console.log("some: "+some);

some -=x //some = some-x
console.log("some: "+some);

some *=x; //some= some*x
console.log("some: "+some);

some /=x; //some = some/x
console.log("some: "+some);


/*Les booléen et oprérateur de comparaison*/

var x = 10;
var bool = (x=="10");//true
console.log(bool);

var langage="Javascript"; 
var monBolean = (langage=="Javascript"); //comparaison
console.log(monBolean);

//stricte comparaison: vérifie la valeur et son type
var x = 10;
var bool = (x==="10");//false
console.log(bool);
/*Autres comparaison:
	!= diffferent
	<
	<=
	>
	>=
*/

/*Test Multiple using && et || */
 /*
 test de 2 condition avec && : reourne vrai dans le cas ou les deux partie sont vraie*/
 var lang1="Java";
 var lang2 = "JavaScript";
 var myboolean = (lang1=="Java" && lang2=="JavaScript");//true
 console.log(myboolean);

 var myboolean = (lang1=="HTML" && lang2=="PHP");//false
 console.log(myboolean);

 /*Test avec || : vrai si l'une des parties gauche ou droite es vrai*/
 var x= 10;
 var y= 5;
 monBoll = (x>y || y<x);//true
 console.log(monBoll);

 /*
	 Les structures conditionnelle:
	  
	 if (conditionvrai){
	 	//instructions à executé si condition vrai
	 }elseif(condition2){
		//instruction si condition 1 pas vrai mais condition 2 vrai
	 }
	 else{
	 	//instructions à executé si condition1et2 fausse
	 }
 */

var bestLanguage="Java";
if(bestLanguage==="Javascript"){
	console.log("Java est le meilleur langage de developpement logiciel de bureau");
}else{
	console.log("Pas un bon langage pour le dev logiciel bureau")
}

/*le switch : traité plusieurs cas
	switch(variable){
		case 1:
			break;
		cas 2:
			break;
		.
		.
		default:
		//instruction a faire par defaut


	}
*/
var langage = "Shell";
switch(langage){
		case "JavaScript":
			console.log("Top 1 des langages du web");
			break;
		case "PHP":
			console.log("Language le plus utilisé pour le développement des sitees web");
			break;
		case "Java":
			console.log("Meilleur langage pour développer des application desktop de bureau");	
		default:
			console.log("Non repertorier");
	}

/*
	Les boucles:  repeter un ensemble d'instrructions
 */

//boucle while
var age=0;
while(age<5){
	console.log(age);
	age++;
}

//do while : on entre au moin 1 fois dans la boucle
note = 15;
do{
	console.log("note: "+note);
	note--;
}while(note>10);

/*

	boucle for
	partie1: initialisation de la variable (une fois au debut)
	partie2: condition à vérifier a chaque fois
	partie3: faite apres execution du code
*/
let sommef=0;
var i=1;
for(i;i<=10;i++){
	console.log(sommef);
	sommef+=i;

}
console.log(sommef);
console.log("");


/*
	Les fonctions en JavaScript
	Syntaxe:
	 function nomDeFonction(Param1, param2,...){
		instruction1;
		.
		.
		.
		instruction n;
	 }

 */

function direBonjour(monNom){
	return console.log("Bonjour "+monNom);
}

var affiche = direBonjour("Camel Djoulako");//appel de la fonction: utilisation

function addition(x,y){
	return x+y;
}

var add = addition(41,55);
console.log(add);

function soustraction(x,y){
	return x-y;
}

var substract = soustraction(41,55);
console.log(substract);
console.log("");

/*
	Les Scopes: portées des variables
	-les fonctions ont un scope locale: Lorsqu'on declare une variable dans une fonction,
	 celle ci est détrute a la fin de l'execution de la fonction.
 	
 */

/*
	Les tableaux en JavaScript
	var nomDuTableay = [val1, val2, ..., valn];
 */

var webLanguage = ["Java", "JavaScript", "PHP", "HTML", "CSS"];
console.log("Tableau de langage");
console.log("webLanguage");
console.log("");

//taille du tableau
var tailleTab = webLanguage.length;
console.log("Tableau de taille: "+tailleTab);
console.log("");


//access a un element du tableau
var lang2 = webLanguage[1];
console.log("Langage 2: "+lang2);
console.log("");

//parcour et affichage des elements du tableau avec la boucle for
console.log("Liste des elts duTableau");
for (var i=0; i<webLanguage.length; i++) {
	console.log(i+1+" "+webLanguage[i]);
}
console.log("");

//ajout d'un élement au tableau
webLanguage.push("Java");
console.log("Liste apres ajout");
for (var i=0; i<webLanguage.length; i++) {
	console.log(i+1+" "+webLanguage[i]);
}
 console.log("");

//enlever la derniere valeur du tableau
webLanguage.pop();
console.log("Liste apres retrait");
for (var i=0; i<webLanguage.length; i++) {
	console.log(i+1+" "+webLanguage[i]);
}
console.log("");

//recuperer une sous partie du tableau
var best = webLanguage.slice(0,3);
console.log("Sous partie du tableau");
console.log(best);
console.log("");

//tableau avec des element de type different
console.log("Tableau de plusieurs de type");
var tab = ["Java", 12, 15, true];
console.log(tab);

//Tableau de tableau
var tabM = [   "Homedeve",
	48,
	[1, 2, 5, 8],
	[1, ["Java", "PHP"]],
	true,
	"Camel Djoulako"
]

//affichons le Langage PHP a parir du tableau de tableau
console.log(tabM);
console.log("Recuperation de PHP: ");

var php = tabM[3][1][1];
console.log(php);
console.log("");

/*
	Les Objets en javascript
	syntaxe:
	var nomDeLobjet = {
		proprieté1: valeur1;		
		proprieté2: valeur2;	
		.
		.
		.	
		proprietén: valeurn;	
		method1: function(){}
		motheod2: function(){}
		.
		.
		methodn	: function(){}
	}
 */

var Developpeur = {
		nom: 				"Came Djoulako",
		anneExperience:     2,
		marqueOrdinateur: 	"Packard-Bell: Acer Brand",
		langagePreferes: 	["PHP","JavaScript","Java"],
		frameworksLibs: 	["Bootstrap","Jquery","Laravel","React"],
		cms:            	"wordpress"
}
console.log("Notre objet:");
console.log(Developpeur);

//Acceder a une proprieté de l'objet
var nomDeveloppeur = Developpeur.nom;
console.log("Notre développeur s'appelle: "+nomDeveloppeur);
console.log("");

//2e méthode pour acceder grace a la notaion [nomProprieté]
var framework = Developpeur.frameworksLibs[0];
console.log("J'aime utilisé: "+framework);

//Parcourir tous les proprietés de l'objet et afficher avec for(var variable in Objet)
for(var dev in Developpeur){
	console.log(Developpeur[dev]);
}
console.log("");

//Creation d'un objet avec l'instruction new
var personne = new Object();
personne.nom = "Donald";
personne.taille= 1.1;
personne.age = 15;
console.log(personne);
personne.changerNom = function(nom){
	this.nom = nom;
	console.log(personne.nom);
}

console.log("Nom avant: ");
console.log(personne.nom);
console.log("");

console.log("Apres changement du nom: ");
personne.changerNom("Arnold");
console.log(personne.nom);

console.log("Appel de la methode: ");
personne.changerNom("Camel");

/*
	Définition d'une fonction constructeur pour créer des objets de même type
*/
function Developpeurs(nom, anneExperience, langages, frameworks, cms){
	this.nom = nom;
	this.anneExperience = anneExperience;
	this.langages = langages;
	this.frameworks;
	this.cms= cms;
} 
console.log(" ");
//creation de deux Développeur différents

console.log("Création du développeur JUN'S");
var juns = new Developpeurs("Juns", 1, ["HTML", "CSS","JavaScript","PHP"], ["React", "NodeJs", "Laravel"], "wordpress");
console.log(juns);
console.log(" ");

console.log("Création du développeur Camel");
var camel = new Developpeurs("Camel", 2, ["JAVA", "JavaScript","PHP"], ["React", "Laravel"], "wordpress");
console.log(camel);
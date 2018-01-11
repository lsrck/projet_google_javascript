document.querySelector("button").onclick = function(apparition) 
{
document.getElementById("cacher").style.display = "block";
document.querySelector("button").style.display = "none";
}




document.getElementById("boutonrecherche").onclick = function(recherchegoogle) 
{
	let laRecherche = document.getElementById("recherche").value;
	window.location = "https://www.google.fr/search?q=" + laRecherche;
}






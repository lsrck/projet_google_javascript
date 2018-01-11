document.querySelector("button").onclick = function() 
{
document.getElementById("cacher").style.display = "block";
document.querySelector("button").style.display = "none";
}

document.getElementById("boutonrecherche").onclick = function() 
{
	let laRecherche = document.getElementById("recherche").value;
	window.location = "https://www.google.fr/search?q=" + laRecherche;
}

function popup () {
window.alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
}
setTimeout(popup, 2000)
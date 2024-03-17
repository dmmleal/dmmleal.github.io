function toogle(visibleLayer)
{

 if (document.getElementById(visibleLayer).style.display == "none") {
 	document.getElementById(visibleLayer).style.display = "";
 	document.getElementById(visibleLayer + "Show").style.display = "none";
 }
 else {
  	document.getElementById(visibleLayer).style.display = "none";
 	document.getElementById(visibleLayer + "Show").style.display = "";
 }
}
var dn = document.getElementById("dn");
var info = document.getElementById("info");
dn.addEventListener("mouseover", () => {
  info.className = "infohover";
}, false)
dn.addEventListener("mouseout", () => {
  info.className = "info";
}, false);

document.getElementById("dn").setAttribute('onclick', 'location.href = "fotografia.html"'); 


document.getElementById("selector1").setAttribute('onclick', 'location.href = "coimbracor.html"'); 
document.getElementById("selector2").setAttribute('onclick', 'location.href = "coimbragaleria.html"'); 


var selector2 = document.getElementById("selector2");
var selector1 = document.getElementById("selector1");
selector2.addEventListener("mouseover", () => {
  selector1.className = "selector1change";
}, false)
selector2.addEventListener("mouseout", () => {
  selector1.className = "selector-1";
}, false);

document.getElementById("selector3").setAttribute('onclick', 'location.href = "coimbracor.html"'); 
document.getElementById("selector4").setAttribute('onclick', 'location.href = "coimbragaleria.html"');

var selector4 = document.getElementById("selector4");
var selector3 = document.getElementById("selector3");
selector4.addEventListener("mouseover", () => {
  selector3.className = "selector3change";
}, false)
selector4.addEventListener("mouseout", () => {
  selector3.className = "selector-3";
}, false);




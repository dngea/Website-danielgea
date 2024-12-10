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
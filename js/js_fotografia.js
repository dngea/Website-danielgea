

var dn = document.getElementById("dn");
var info = document.getElementById("info");
dn.addEventListener("mouseover", () => {
  info.className = "infohover";
}, false)
dn.addEventListener("mouseout", () => {
  info.className = "info";
}, false);

document.getElementById("dn").setAttribute('onclick', 'location.href = "index.html"'); 
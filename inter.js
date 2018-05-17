
var sport=document.getElementById('sports').getElementByTag('option');
var col=document.getElementById('college');
for(var i=0;i< sport.length();i++){
	sport[i].addEventListener("click",toggle);
}
alert("abc");
function toggle() {
	alert("abc");
}
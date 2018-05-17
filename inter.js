
$(document).on('change', '.div-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});
$(document).ready(function(){
    $('.div-toggle').trigger('change');
});

var cricket1=document.getElementById("cricket");
var football1=document.getElementById("football");
var badminton1= document.getElementById("badminton");

function cricket(){
	cricket1.style.display="block";
	football1.style.display="none";
	badminton1.style.display="none";	

}
function football(){
	cricket1.style.display="none";
	football1.style.display="block";
	badminton1.style.display="none";	

}
function badminton(){
	cricket1.style.display="none";
	football1.style.display="none";
	badminton1.style.display="block";	

}
function showall(){
	cricket1.style.display="block";
	football1.style.display="block";
	badminton1.style.display="block";
}
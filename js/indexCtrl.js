

$(document).ready(function(){ 
　　var width_contentELement = "-"+$(".contentELement").width()/2+"px";
var height_contentELement = "-"+$(".contentELement").height()/2+"px";
var width_mainElement = $(".mainElement").width();
$(".contentELement").css({"margin-left":width_contentELement})
$(".contentELement").css({"margin-top":height_contentELement})
}); 
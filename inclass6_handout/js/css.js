$(function() {
var bgcol = $("li:first-child").css('backgroundColor');
$("ul").append("Color: " + bgcol);
$("li").css({"background-color": "#c5a996", "border": "solid white 1px", "color":"black", "text-shadow":"none", "font-family":"Georgia"});
});
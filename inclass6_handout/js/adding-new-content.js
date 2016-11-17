$(function() {
$("ul").before('<p> Just updated </p>');
$('li.hot').prepend("+");

var $newli = $('<li><em> Gluten-free </em> soy sauce </li>');
$('ul:last').after($newli);   
});
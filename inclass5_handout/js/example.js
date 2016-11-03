/**
 * File: /usr/cs/undergrad/2016/jrothmel/public_html/inclass5_handout/js/example.js
 * Student in: 91.61 GUI Programming I
 * Jacob Rothmel jacob_rothmel@student.uml.edu
 * edited on: 11/02/16
 * Used W3Schools and lots of google / stack overflow.
 *
 * This file contains javascript to add 2 li elements, classes, and a span.
 **/
// ADD NEW ITEM TO END OF LIST
var ul = document.getElementsByTagName("UL")[0];
var postli = document.createElement("li");
postli.appendChild(document.createTextNode("cream"));
ul.appendChild(postli);

// ADD NEW ITEM START OF LIST
var preli = document.createElement("li");
preli.appendChild(document.createTextNode("kale"));
ul.insertBefore(preli, ul.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var liElements = document.querySelectorAll('li:not(.cool)');

Array.prototype.forEach.call(liElements, function(li, index, list) {
    // first argument ('li' ): the current array-element,
    // second argument ('index'): unused, the index of the current
    // array-element in the array,
    // third argument ('list'): the array itself

    // adding the 'cool' class-name to the list of classes
    // of the current node:
    li.classList.add('cool');
});


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var header = document.getElementsByTagName("h2")[0];
var span = document.createElement("span");

//dynamically count list items
var ul = document.getElementsByTagName("UL")[0];
var i = 0,
    itemCount = 0;
while (ul.getElementsByTagName('li')[i++])
    itemCount++;

span.appendChild(document.createTextNode(itemCount));
header.appendChild(span);
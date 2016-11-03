
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
Array.prototype.forEach.call(liElements, function (li, index, list) {
        // first argument ('li' ): the current array-element,
        // second argument ('index'): unused, the index of the current
        // array-element in the array,
        // third argument ('list'): the array itself

        // adding the 'locked' class-name to the list of classes
        // of the current node:
        li.classList.add('cool');
    });


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

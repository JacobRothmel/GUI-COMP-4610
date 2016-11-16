/**
 * File: /usr/cs/undergrad/2016/jrothmel/public_html/hw6/js/user_table.js
 * Student in: 91.61 GUI Programming I
 * Jacob Rothmel jacob_rothmel@student.uml.edu
 * edited on: 11/01/16
 * Used W3Schools and lots and lots of google.
 *
 * This file contains javascript functions for use in creating a dynamic multiplication table.
 **/
function getFormValues() {
    var x1 = parseFloat(document.getElementById("xstart").value);
    var x2 = parseFloat(document.getElementById("xend").value);
    var y1 = parseFloat(document.getElementById("ystart").value);
    var y2 = parseFloat(document.getElementById("yend").value);
    buildTable(x1, x2, y1, y2);
}

/**
 * This function builds a multiplication table sized based on user input.
 * @xst Number; x-axis start
 * @xnd Number; x-axis end
 * @yst Number; y-axis start
 * @ynd Number; y-axis end
 **/
function buildTable(xst, xnd, yst, ynd) {
    //display message showing what values were entered
    document.getElementById("tablemessage").innerHTML = "You entered  x-start:" + xst + ", x-end: " + xnd + ", y-start: " + yst + ", y-end: " + ynd;

    //build headers
    var tabHtml = "<tr><th></th>";
    for (i = xst; i <= xnd; i++) {
        tabHtml += "<th>" + i + "</th>";
    }
    tabHtml += "</tr>";

    //populate table
    for (i = yst; i <= ynd; i++) {
        tabHtml += "<tr><td>" + i.toString() + "</td>";
        for (j = xst; j <= xnd; j++) {
            var mul = i * j;
            tabHtml += "<td>" + mul.toString() + "</td>";

        }
        tabHtml += "</tr>";
    }
    document.getElementById("thetable").innerHTML = tabHtml;
}
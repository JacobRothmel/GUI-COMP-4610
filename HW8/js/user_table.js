/**
 * File: /usr/cs/undergrad/2016/jrothmel/public_html/hw6/js/user_table.js
 * Student in: 91.61 GUI Programming I
 * Jacob Rothmel jacob_rothmel@student.uml.edu
 * edited on: 11/01/16
 * Used W3Schools and lots and lots of google.
 *
 * This file contains javascript functions for use in creating a dynamic multiplication table.
 **/
/**
 * This function gets user input values and calls the functions to generate the table html.
 **/
function getFormValues() {
    var x1 = parseFloat(document.getElementById("xstart").value);
    var x2 = parseFloat(document.getElementById("xend").value);
    var y1 = parseFloat(document.getElementById("ystart").value);
    var y2 = parseFloat(document.getElementById("yend").value);
    return buildTable(x1, x2, y1, y2);
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
    document.getElementById("tablemessage").innerHTML = "You last entered  x-start:" + xst + ", x-end: " + xnd + ", y-start: " + yst + ", y-end: " + ynd;
    var num_tabs = $("div#tabletabs ul li").length + 1;
    var tid = '"table"' + num_tabs;
    //build headers
    var tabHtml = "<table id=" + tid + ">" + "<tr><th></th>";
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
    return tabHtml + "</table>";
}

/**
 * This function makes the table in a new tab.
 **/
function makeatable() {
    var num_tabs = $("#tabletabs ul li").length + 1;

    $("div#tabletabs ul").append(
        "<li><a href='#tab" + num_tabs + "'>Table " + num_tabs + "</a></li>"
    );
    $("div#tableArea").append(
        "<div id='tab" + num_tabs + "'>" + getFormValues() + "</div>"
    );
    $("div#tabletabs").tabs("refresh").tabs({
        active: num_tabs - 1
    });
}
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
 * This function gets and validateData() on the values from the form. 
 * It then calls buildTable() to build the table if input is valid.
 **/
function getFormValues() {
    var x1 = parseFloat(document.getElementById("xstart").value);
    var x2 = parseFloat(document.getElementById("xend").value);
    var y1 = parseFloat(document.getElementById("ystart").value);
    var y2 = parseFloat(document.getElementById("yend").value);

    var isvalid = validateData(x1, x2, y1, y2);
    if (isvalid)
        buildTable(x1, x2, y1, y2, isvalid);
}

/**
 * This function validates user input. Conditions for valid data are:
 * 1. x1, x2, y1, y2 exist
 * 2. x1 < x2
 * 3. y1 < y2
 * If any of these conditions are not met then the data is invalid.
 * @x1 Number; x-axis start
 * @x2 Number; x-axis end
 * @y1 Number; y-axis start
 * @y2 Number; y-axis end
 * Returns Bool true if data is valid; Bool false otherwise.
 **/
function validateData(x1, x2, y1, y2) {
    var isvalid = true;
    //validation block
    //if anything is invalid the table will not be build and error message displayed.
    //the html forces input to a number and defaults to 1.
    //check x values
    if (x1 == "") {
        isvalid = false;
        document.getElementById("tablemessage").innerHTML += "Please enter a number > 0 for x-axis start.<br>";
        document.getElementById("xstart").style.backgroundColor = "red";
    }
    if (x2 == "") {
        isvalid = false;
        document.getElementById("tablemessage").innerHTML += "Please enter a number > 0 for x-axis end.<br>";
        document.getElementById("xend").style.backgroundColor = "red";
    } else if (x1 > x2) {
        isvalid = false;
        document.getElementById("tablemessage").innerHTML += "x-axis start must be smaller than x-axis end.<br>";
        document.getElementById("xstart").style.backgroundColor = "red";
        document.getElementById("xend").style.backgroundColor = "red";
    } else if (x1 == x2) {
        isvalid = false;
        document.getElementById("tablemessage").innerHTML += "x-axis start not be equal to x-axis end.<br>";
        document.getElementById("xstart").style.backgroundColor = "red";
        document.getElementById("xend").style.backgroundColor = "red";
    }

    //check y values
    if (y1 == "") {
        isvalid = false;
        document.getElementById("tablemessage").innerHTML += "Please enter a number > 0 for y-axis start.<br>";
        document.getElementById("ystart").style.backgroundColor = "red";
    }
    if (y2 == "") {
        isvalid = false;
        document.getElementById("tablemessage").innerHTML += "Please enter a number > 0 or y-axis end.<br>";
        document.getElementById("yend").style.backgroundColor = "red";
    } else if (y1 > y2) {
        isvalid = false;
        document.getElementById("tablemessage").innerHTML += "y-axis start must be smaller than y-axis end.<br>";
        document.getElementById("ystart").style.backgroundColor = "red";
        document.getElementById("yend").style.backgroundColor = "red";
    } else if (y1 == y2) {
        isvalid = false;
        document.getElementById("tablemessage").innerHTML += "y-axis start not be equal to y-axis end.<br>";
        document.getElementById("ystart").style.backgroundColor = "red";
        document.getElementById("yend").style.backgroundColor = "red";
    }
    if (!isvalid)
        document.getElementById("tablemessage").innerHTML += "Hit reset and try again. <br>"
    return isvalid;
}

/**
 * This function builds a multiplication table sized based on user input.
 * @xst Number; x-axis start
 * @xnd Number; x-axis end
 * @yst Number; y-axis start
 * @ynd Number; y-axis end
 * @isvalid Bool; tells if data is valid
 **/
function buildTable(xst, xnd, yst, ynd, isvalid) {
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

/**
 * This function refreshes the page.
 **/
function refreshPage() {
    location.reload();
}
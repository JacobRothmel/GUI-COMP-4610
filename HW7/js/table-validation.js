/**
 * File: /usr/cs/undergrad/2016/jrothmel/public_html/hw6/js/user_table.js
 * Student in: 91.61 GUI Programming I
 * Jacob Rothmel jacob_rothmel@student.uml.edu
 * edited on: 11/01/16
 * Used W3Schools and lots and lots of google.
 *
 * This file contains jquery validation rules for the 
 * multiplication table. 
 **/
$(document).ready(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "tableform"

    $('#tableform').submit(function(e) {
        e.preventDefault();
    }).validate({
        // Specify validation rules
        rules: {
            xstart: {
                required: true,
                min: 1,
                minlength: 1
            },
            xend: {
                required: true,
                min: 1,
                minlength: 1,
                greaterThan: "#xstart"
            },
            ystart: {
                required: true,
                min: 1,
                minlength: 1
            },
            yend: {
                required: true,
                min: 1,
                minlength: 1,
                greaterThan: "#ystart"
            }
        },
        // Specify validation error messages
        messages: {
            xstart: {
                required: "Please a start point for the x-axis",
                minlength: "Value should be 1 or greater",
                min: "Value should be 1 or greater"
            },
            xend: {
                required: "Please a end point for the x-axis",
                minlength: "Value should be 1 or greater.",
                min: "Value should be greater than 0",
                greaterThan: "X-End must be >= X-Start"
            },
            ystart: {
                required: "Please a start point for the y-axis",
                minlength: "Value should be 1 or greater",
                min: "Value should be 1 or greater"
            },
            yend: {
                required: "Please a end point for the y-axis",
                minlength: "Value should be 1 or greater",
                min: "Value should be 1 or greater",
                greaterThan: "Y-End must be >= Y-Start"
            }
        },

        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            if ($('#tableform').valid() == true) {
                getFormValues();
            }
        },
        invalidHandler: function(form, validator) {
            alert('Please correct errors and submit again.');
            return false;
        }
    });
    // Add greaterThan validation rule. 
    jQuery.validator.addMethod("greaterThan", function(value, element, params) {
        return isNaN(value) && isNaN($(params).val()) || (Number(value) >= Number($(params).val()));
    }, 'Must be greater than {0}.');

});
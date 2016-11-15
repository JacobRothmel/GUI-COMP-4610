// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='tableform']").validate({
    // Specify validation rules
    rules: {
      xstart: {
          required: true,
          min: 1,
          minlength: 1
      } ,
      xend:{
          required: true,
          min: 1,
          minlength: 1,
          greaterThan: "#xstart"
      } ,
      ystart:{
          required: true,
          min: 1,
          minlength: 1
      } ,
      yend:{
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
        minlength: "You starting point should be between > 0.  ",
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
      form.submit();
    }
  });

   // Add greaterThan validation rule. 
  jQuery.validator.addMethod("greaterThan", function(value, element, params) {   
    return isNaN(value) && isNaN($(params).val()) 
        || (Number(value) >= Number($(params).val())); 
},'Must be greater than {0}.');    
});


$(document).ready(function(){
    
   

    $("#log-in-form").validate({
        rules:{
            email:{
                required:true,
                email:true   
            },
            password:{
                required:true,
                minlength:8,
                maxlength:10,
                strongPassword:true
            }
            
        }
    });
    $.validator.addMethod("strongPassword",function (value, element) {
        // Use a regular expression or other logic to check password strength
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
     },
     " password must be at least 8 characters and include at least one lowercase letter, one uppercase letter, and one digit."
  ); 
})
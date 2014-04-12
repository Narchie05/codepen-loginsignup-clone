/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.api.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

    var user = {
    username: null,
    password: null
     };

console.log (user.username)

    var signup = {
        name:null,
        email:null,
        username:null,
        password:null
      };

    $(".login-form-btn").click(function() {
        $(".login-form").show();
        $(".signup-form").hide();
    });
    $(".signup-form-btn").click(function() {
        $(".signup-form").show();
        $(".login-form").hide();
    });
    // click login , submit user object to login api

    $(".btn-signup").click(function(){
        signup.name = $("#signup-name-field").val();
        signup.email = $("#signup-email-field").val();
        signup.username = $("#signup-username-field").val();
        signup.password = $("#signup-password-field").val();

        var signupresponse = codepen.api.signup(signup);
        console.log (signupresponse);

    });




        $(".btn-login").click(function() {
           user.username = $("#login-username-field").val();
           user.password = $("#login-password-field").val();

            var response = codepen.api.login(user);
            console.log (response);
                if (!response.success){
                    alert(response.error);
                }
                else {
                alert  ("Good Job")
            };





         });






});
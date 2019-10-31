var Password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
var button = document.querySelector('button');//document.getElementsByTagName('button');

button.addEventListener("click",valid);

function valid(){
    if ( Password.value == confirmPassword.value){
        Password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
    }
    else{
        Password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }
}

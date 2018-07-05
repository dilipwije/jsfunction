function validation(){
    var valueInput = document.forms["registerForm"]["fullName"].value;
    if (valueInput == "") {
        var alertMessage = document.getElementsByClassName.innerHTML("required");
        return alertMessage;
    }
}
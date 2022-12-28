function checkEmail(){
    var mail = document.getElementById("email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!filter.test(mail.value)){
        document.getElementById("show").innerHTML = "Please provide a valid email address";
        return false
    }else{
        document.getElementById("show").innerHTML = "";
    }
}
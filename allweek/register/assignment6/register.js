window.onload = pageLoad;
function pageLoad() {
    var form = document.getElementById("myForm")
    
    form.onsubmit = validateForm;
}

function validateForm() {
    var passwordarrays = [] = document.forms["myForm"]["password"];
    var x = document.getElementById("errormsg");
    if (passwordarrays[0].value != passwordarrays[1].value) {
        x.innerHTML = "wrongpassword";
       

        return false;
    }
}
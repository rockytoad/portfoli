window.onload = loginLoad;
function loginLoad(){
	
    var form = document.getElementById("myLogin")
    form.onsubmit = checkLogin;
}

function checkLogin(){
    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);
    var loginID  = document.forms["myLogin"]["username"];
	const username = urlParams.get('username');
	var loginpass  = document.forms["myLogin"]["password"];
    const password = urlParams.get('password');
	
	if(username != loginID.value ||password != loginpass.value ){
        alert("wrong username or password");
		
        return false;
		
    }
	else{
		alert("welcome")
	}
	

}
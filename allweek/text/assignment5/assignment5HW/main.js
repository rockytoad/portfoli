

var x = 0;
function postFunction(){
 var newtext = document.getElementById("text1").value;
 
 if(x == 0){
    document.getElementById("topic1").innerHTML = newtext;
 }
 else if(x == 1){
    document.getElementById("comment1").innerHTML = newtext;
 }
 else if(x == 2){
    document.getElementById("comment2").innerHTML = newtext;
 }
x+=1;
 
   
}

function clearFunction(){
    document.getElementById("text1").value = ""
   document.getElementById("topic1").innerHTML = ""
   document.getElementById("comment1").innerHTML = ""
   document.getElementById("comment2").innerHTML = ""

   x=0;

}
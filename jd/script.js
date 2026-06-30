function login(){

let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234"){

window.location="home.html";

}

else{

alert("Invalid Login");

}

}

function searchDress(){

let dress=document.getElementById("searchInput").value.toLowerCase();

let result=document.getElementById("result");

if(dress=="shirt")

result.innerHTML="Shirt Available";

else if(dress=="jeans")

result.innerHTML="Jeans Available";

else if(dress=="hoodie")

result.innerHTML="Hoodie Available";

else

result.innerHTML="Dress Not Found";

}
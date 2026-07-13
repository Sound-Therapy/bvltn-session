function hideAll(){

document.getElementById("homePage").classList.add("hidden");
document.getElementById("loginPage").classList.add("hidden");
document.getElementById("producerPage").classList.add("hidden");

}

function goHome(){

hideAll();

document.getElementById("homePage").classList.remove("hidden");

}

function showLogin(){

hideAll();

document.getElementById("loginPage").classList.remove("hidden");

}

function login(){

const pw=document.getElementById("password").value;

if(pw==="010305"){

hideAll();

document.getElementById("producerPage").classList.remove("hidden");

}
else{

alert("Wrong password.");

}

}

function startSession(){

alert("Recording page will be built next.");

}


window.alert('Hello & Welcome!');
showName();

function showName(){
    var nName= prompt("What's Your Name?");
    document.getElementById("Name").innerText = "Hi " + nName + "!";
}
window.addEventListener("load", init, false);

let kosar;

function init(){
    kosarBetolto();  
}

kosar=JSON.parse(sessionStorage.getItem("kosar"));

console.log(kosar);

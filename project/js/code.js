window.addEventListener("load", init, false);

function $(id){
    return document.getElementById(id);
}

function init(){
    $("fooldalNav").addEventListener("click", fooldalValto, false);
    $("menuNav").addEventListener("click", menuValto, false);
    $("szallitasNav").addEventListener("click", szallitasValto, false);
    $("kosarNav").addEventListener("click",kosarValto,false);
    $("card1price").addEventListener("click", kosarba, false);
    $("card2price").addEventListener("click", kosarba, false);
    $("card3price").addEventListener("click", kosarba, false);
    $("card4price").addEventListener("click", kosarba, false);
    $("card5price").addEventListener("click", kosarba, false);
    $("card6price").addEventListener("click", kosarba, false);
    $("card7price").addEventListener("click", kosarba, false);
    $("card8price").addEventListener("click", kosarba, false);
    $("card9price").addEventListener("click", kosarba, false);
    $("card10price").addEventListener("click", kosarba, false);
    $("card11price").addEventListener("click", kosarba, false);
    $("card12price").addEventListener("click", kosarba, false);
    $("card13price").addEventListener("click", kosarba, false);
    $("card14price").addEventListener("click", kosarba, false);
    $("card15price").addEventListener("click", kosarba, false);
    $("card16price").addEventListener("click", kosarba, false);
}

let kosar=[];

function kosarba(e){
    let card = e.target.id+"";
    card = card.substring(0, 6)
    if(card.charAt(card.length-1)=='p'){
        card=card.substring(0,5);
    }

    let etel = peldanyosito(card)
    let vanBenne= kosarScanner(etel.nev);

    if( vanBenne > -1){
        kosar[vanBenne].mennyiseg++;
    }else{
        kosar.push(etel);
    }

    let osszesen=0;

    for(let i = 0; i < kosar.length; i++){
        osszesen +=kosar[i].mennyiseg;
    }

    $("badge").innerText=osszesen;

    console.log(kosar);
}

function kosarScanner(name){
    let index = -1;

    for(let i = 0; i < kosar.length; i++){
        if(kosar[i].nev==name){
            index = i;
        }
    }

    return index;
}

function peldanyosito(cardId){
    let etel = {
        nev: $(cardId+"name").innerText,
        ar: $(cardId+"price").value.split(" ")[0],
        mennyiseg: 1
    }

    return etel;
}

function fooldalValto(){
    navReset();
    $("fooldal").style.visibility="visible";
    $("fooldalNavLi").className="nav-item active";
}

function menuValto(){
    navReset();
    $("menu").style.visibility="visible";
    $("menuNavLi").className="nav-item active";
}

function szallitasValto(){
    navReset();
    $("szallitas").style.visibility="visible";
    $("szallitasNavLi").className="nav-item active";
}

function kosarValto(){
    navReset();
    $("kosar").style.visibility="visible";
    $("kosarNavLi").className="nav-item active";
}

function navReset(){
    $("fooldal").style.visibility="hidden";
    $("menu").style.visibility="hidden";
    $("szallitas").style.visibility="hidden";
    $("kosar").style.visibility="hidden";
    $("fooldalNavLi").className="nav-item";
    $("menuNavLi").className="nav-item";
    $("szallitasNavLi").className="nav-item";
    $("kosarNavLi").className="nav-item";
}
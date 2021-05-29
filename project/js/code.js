window.addEventListener("load", init, false);

function $(id){
    return document.getElementById(id);
}

function init(){
    $("fooldalNav").addEventListener("click", fooldalValto, false);
    $("menuNav").addEventListener("click", menuValto, false);
    $("szallitasNav").addEventListener("click", szallitasValto, false);
    $("kosarNav").addEventListener("click",kosarValto,false)
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
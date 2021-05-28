window.addEventListener("load", init, false);

function $(id){
    return document.getElementById(id);
}

function init(){
    let fooldalNav = $("fooldalNav");
    let menuNav = $("menuNav");
    let szallitasNav= $("szallitasNav");
    fooldalNav.addEventListener("click", fooldalValto, false);
    menuNav.addEventListener("click", menuValto, false);
    szallitasNav.addEventListener("click", szallitasValto, false);
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

function navReset(){
    $("fooldal").style.visibility="hidden";
    $("menu").style.visibility="hidden";
    $("szallitas").style.visibility="hidden";
    $("fooldalNavLi").className="nav-item";
    $("menuNavLi").className="nav-item";
    $("szallitasNavLi").className="nav-item";
}




function $(id){
    return document.getElementById(id);
}

function kosarBetolto(){
    if(sessionStorage.getItem("kosar") != null){
        kosar=JSON.parse(sessionStorage.getItem("kosar"));
        $("badge").innerText=kosarMeret();
    }
}

function kosarMeret(){
    let osszesen=0;

    if(kosar.length!=0){
        let i=0;
        while(i<kosar.length){
            osszesen+= kosar[i].mennyiseg;
            i++;
        }
    }

    return osszesen;
}
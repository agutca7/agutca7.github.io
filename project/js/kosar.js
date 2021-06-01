window.addEventListener("load", init, false);

let kosar=[];

function init(){
    kosarBetolto();
    kosarRender();
    $("kosarTablazat").addEventListener("change", kosarFrissito, false);
}

function kosarFrissito(){
    for(let i = 0;i <kosar.length;i++){
        kosar[i].mennyiseg=$("mennyisegTd"+i).value;
    }
    sessionStorage.setItem("kosar", JSON.stringify(kosar));
    $("badge").innerText=kosarMeret();

    if(kosarMeret()==0){
        $("rendel").disabled=true;
    }else{
        $("rendel").disabled=false;
    }

    $("fizetendo").innerText=kosarOsszeg()+" Yang";
}

function kosarRender(){
    if(kosar.length!=0){
        for(let i = 0; i < kosar.length; i++){
            $("kosarTablazat").innerHTML+='<tr> <th scope="row" id="'+ i +'">'+ (i+1) +'</th> <td>'+ kosar[i].nev +'</td> <td>'+ kosar[i].ar +' Yang</td> <td><input type="number" value="'+ kosar[i].mennyiseg +'" min="0" onKeyDown="return false" id="mennyisegTd'+ i +'"></td> </tr>';
        }
        $("kosarTablazat").innerHTML+='<tr> <th scope="row" colspan="2">Összesen</th> <td id="fizetendo">'+ kosarOsszeg() +' Yang</td> <td><input type="button" value="Megrendel" id="rendel"></td> </tr>';
    }else{
        window.alert("Üres a kosarad!")
    }
}

function kosarOsszeg(){
    let vegosszeg=0;

    if(kosar.length!=0){
        for(let i = 0;i < kosar.length; i++){
            vegosszeg+=kosar[i].ar*kosar[i].mennyiseg;
        }
    }

    return vegosszeg;
}

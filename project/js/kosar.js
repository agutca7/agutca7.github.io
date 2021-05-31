window.addEventListener("load", init, false);

let kosar=[];

function init(){
    kosarBetolto();
    kosarRender();
}

console.log(kosar);

function kosarRender(){
    if(kosar.length!=0){
        for(let i = 0; i < kosar.length; i++){
            $("kosarTablazat").innerHTML+='<tr> <th scope="row" id="'+ i +'">'+ (i+1) +'</th> <td>'+ kosar[i].nev +'</td> <td>'+ kosar[i].ar +' Yang</td> <td><input type="number" value="'+ kosar[i].mennyiseg +'" min="0"></td> </tr>';
        }
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

const val1 = '<img src="values/1.png" alt=""></img>';
const val2 = '<img src="values/2.png" alt=""></img>';
const val3 = '<img src="values/3.png" alt=""></img>';
const val4 = '<img src="values/4.png" alt=""></img>';
const val5 = '<img src="values/5.png" alt=""></img>';
const player1 = document.querySelector(".div-player1-points");
const player2 = document.querySelector(".div-player2-points");
const button_p1_plus = document.getElementById("but-p1-plus");
const button_p1_minus = document.getElementById("but-p1-minus");
const button_p2_plus = document.getElementById("but-p2-plus");
const button_p2_minus = document.getElementById("but-p2-minus");
const namePlayer1 = document.querySelector(".name-player1");
const namePlayer2 = document.querySelector(".name-player2");
const button_menu = document.getElementById("button-menu");
const inputPlayer2 = document.getElementById("input-player2");
var cont1 = 0;
var cont2 = 0;

function switchValue (num){
    switch (num) {
        case 1:
            return val1;
        case 2:
            return val2;
        case 3:
            return val3;
        case 4:
            return val4;
        case 5:
            return val5;
    }
}
function valuesPlus(cont, player){
    if (cont < 6){
        player.innerHTML= switchValue(cont);
    }else if (cont < 11){
        valueCont = cont - 5
        player.innerHTML= val5;
        player.innerHTML+= switchValue(valueCont);
    }else if (cont < 16){
        valueCont = cont - 10
        player.innerHTML= val5;
        player.innerHTML+= val5;
        player.innerHTML+= switchValue(valueCont);
    }else if (cont < 18){
        valueCont = cont - 15
        player.innerHTML= val5;
        player.innerHTML+= val5;
        player.innerHTML+= val5;
        player.innerHTML+= switchValue(valueCont);
    }else{
        player.innerHTML= "Ganaste Reyyyyyyyyyyy";
        winner();
    }
}
function returnZero(num){

    if(num < 0){
        return 0;
    }else{
        return num;
    }
}

function winner(){
    if(cont1 > cont2){
        alert(textPlayer1 + " es el ganador");
    }else{
        alert(textPlayer2 + " es el ganador");
    }
}
button_p1_plus.addEventListener("click", ()=>{
    cont1 = returnZero(cont1+=1);
    valuesPlus(cont1, player1);
})

button_p2_plus.addEventListener("click", ()=>{
    cont2 = returnZero(cont2+=1);
    valuesPlus(cont2, player2);
})

button_p1_minus.addEventListener("click", ()=>{
    cont1 = returnZero(cont1-=1);
    valuesPlus(cont1, player1);
})

button_p2_minus.addEventListener("click", ()=>{
    cont2 = returnZero(cont2-=1);
    valuesPlus(cont2, player2);
})

button_menu.addEventListener("click", ()=>{
    // const inputPlayer1 = document.getElementById("input-player1");
    const textPlayer1 = document.getElementById("iplayer1").value;
    const textPlayer2 = document.getElementById("iplayer2").value;
    const menu = document.getElementById("menu-game");
    menu.style.cssText = "display: none";
    const game = document.getElementById("game");
    game.style.cssText = "display: flex";
    namePlayer1.innerHTML= textPlayer1;
    namePlayer2.innerHTML= textPlayer2;

})


// textPlayer1 = prompt("Nombre de jugador 1");
// textPlayer2= prompt("Nombre de jugador 2");





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
const buttonReset = document.getElementById("button-restart");
const buttonRestart = document.getElementById("button-volverJugar");
const game = document.getElementById("game");
const buttomAudio = new Audio("//tomi-villarreal.github.io/anotadorTruco/sounds/button.mp3");
const winnerAudio = new Audio("//tomi-villarreal.github.io/anotadorTruco/sounds/winner.mp3");
const buttonPoint30 = document.getElementById("button-points-30");
const buttonPoint18 = document.getElementById("button-points-18");

var cont1 = 0;
var cont2 = 0;
var numPoint = 0;

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
    if (numPoint == 30){
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
        }else if (cont < 21){
            valueCont = cont - 15
            player.innerHTML= val5;
            player.innerHTML+= val5;
            player.innerHTML+= val5;
            player.innerHTML+= switchValue(valueCont);
        }else if (cont < 26){
            valueCont = cont - 20
            player.innerHTML= val5;
            player.innerHTML+= val5;
            player.innerHTML+= val5;
            player.innerHTML+= val5;
            player.innerHTML+= switchValue(valueCont);
        }else if (cont <= 30){
            valueCont = cont - 25
            player.innerHTML= val5;
            player.innerHTML+= val5;
            player.innerHTML+= val5;
            player.innerHTML+= val5;
            player.innerHTML+= val5;
            player.innerHTML+= switchValue(valueCont);
            if(cont == 30){
                winner();
            }
        }

    }else if (numPoint == 18){
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
        }else if (cont <= 18){
            valueCont = cont - 15
            player.innerHTML= val5;
            player.innerHTML+= val5;
            player.innerHTML+= val5;
            player.innerHTML+= switchValue(valueCont);
            if(cont == 18){
                winner();
            }
        }
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
    
    showMenuSecondary();
    var text = document.getElementById("h2-menu-restart");
    if(cont1 > cont2){
        text.innerHTML = namePlayer1.innerHTML + " es el ganador";
    }else{
        text.innerHTML = namePlayer2.innerHTML + " es el ganador";
    }
    winnerAudio.play();
}

function verifyPoints(num){
    // // Hecho con formulario
    // const form1 = document.getElementById("input-player1");
    // const form2 = document.getElementById("input-player2");
    // if (form1.checked) {
    //     // Si la opción 1 está seleccionada, mostramos su valor
    //     // alert("La opción seleccionada es: " + form1.value);
    //     numPoint = form1.value;
    //     startGame("menu-game");

    //   }
    //   // Verificamos si la opción 2 está seleccionada
    //   else if (form2.checked) {
    //     // Si la opción 2 está seleccionada, mostramos su valor
    //     // alert("La opción seleccionada es: " + form2.value);
    //     numPoint = form2.value;
    //     startGame("menu-game");

    //   }
    //   // Si no se seleccionó ninguna opción, mostramos un mensaje de error
    //   else {
    //     alert("Debes seleccionar una opción");
    //   }

    if(num == 0){
        alert("Seleccione una cantidad de puntos");
    }else{
        return true;
    }
}

function verifyPlayers(p1,p2){
    if(p1 != "" && p2 != ""){
        namePlayer1.innerHTML= p1;
        namePlayer2.innerHTML= p2;
        return true;
    }else{
        alert("Ingrese nombre de los players");
    }
}

function startGame(menu){
    var menu = document.getElementById(menu);
    menu.style.cssText = "display: none";
    game.style.cssText = "display: flex";
}

function stopGame(){
    game.style.cssText = "display: none";
}

function resetGame(){
    var menu = document.getElementById("id-menu-restart");
    var menu2 = document.getElementById("menu-game");
    menu.style.cssText = "display: none";
    menu2.style.cssText = "display: flex";

}

function showMenuSecondary(){
    var menu = document.getElementById("id-menu-restart");
    menu.style.cssText = "display: flex";

}

function unShowMenuSecondary(){
    var menu = document.getElementById("id-menu-restart");
    menu.style.cssText = "display: none";

}

function showMainMenu(){
    var menu = document.getElementById("menu-game");
    menu.style.cssText = "display: flex";

}

function clearPoints(){
    cont1 = 0
    cont2 = 0
    player1.innerHTML= "";
    player2.innerHTML= "";

}

//Eventos

button_p1_plus.addEventListener("click", ()=>{
    cont1 = returnZero(cont1+=1);
    valuesPlus(cont1, player1);
    buttomAudio.load();

    buttomAudio.play();
})

button_p2_plus.addEventListener("click", ()=>{
    cont2 = returnZero(cont2+=1);
    valuesPlus(cont2, player2);
    buttomAudio.load();

    buttomAudio.play();

})

button_p1_minus.addEventListener("click", ()=>{
    cont1 = returnZero(cont1-=1);
    valuesPlus(cont1, player1);
    buttomAudio.load();

    buttomAudio.play();

})

button_p2_minus.addEventListener("click", ()=>{
    cont2 = returnZero(cont2-=1);
    valuesPlus(cont2, player2);
    buttomAudio.load();
    buttomAudio.play();

})

button_menu.addEventListener("click", ()=>{
    // const inputPlayer1 = document.getElementById("input-player1");
    const textPlayer1 = document.getElementById("iplayer1").value;
    const textPlayer2 = document.getElementById("iplayer2").value;
    if(verifyPoints(numPoint) && verifyPlayers(textPlayer1, textPlayer2)){
        startGame("menu-game");
    }

})

buttonRestart.addEventListener("click", ()=>{
    startGame("id-menu-restart");
    clearPoints();

})

buttonReset.addEventListener("click", ()=>{
    clearPoints();
    unShowMenuSecondary();
    stopGame();
    showMainMenu();
    
})

buttonPoint30.addEventListener("click", ()=>{
    buttonPoint30.style.cssText = "background-color: green";
    buttonPoint18.style.cssText = "background-color: softgrey";
    numPoint = 30;
    buttomAudio.play();

})

buttonPoint18.addEventListener("click", ()=>{
    buttonPoint18.style.cssText = "background-color: green";
    buttonPoint30.style.cssText = "background-color: softgrey";
    numPoint = 18;
    buttomAudio.play();

})


// textPlayer1 = prompt("Nombre de jugador 1");
// textPlayer2= prompt("Nombre de jugador 2");





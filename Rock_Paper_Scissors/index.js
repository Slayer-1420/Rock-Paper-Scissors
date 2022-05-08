function myGame(){

    var r1= Math.floor(((Math.random()*3)+1));
    var r2= Math.floor(((Math.random()*3)+1));
    var a="";
    var b="";

    if(r1===1){
        a="rock.png";
    }
    else if(r1===2){
        a="scissors.png"
    }
    else if(r1===3){
        a="paper.png"
    }

    if(r2===1){
        b="rock.png";
    }
    else if(r2===2){
        b="scissors.png"
    }
    else if(r2===3){
        b="paper.png"
    }
    document.getElementsByClassName("img1")[0].setAttribute("src",a);
    document.getElementsByClassName("img2")[0].setAttribute("src",b);
    if(r1===r2){
        document.querySelector("h1").innerHTML="Draw";
    }
    else if(r1===1){
        if(r2===3){
            document.querySelector("h1").innerHTML="Player2 Wins🚩";
        }
        else{
            document.querySelector("h1").innerHTML="🚩Player1 Wins";
        }
    }
    else if(r1===2){
        if(r2===1){
            document.querySelector("h1").innerHTML="Player2 Wins🚩";
        }
        else{
            document.querySelector("h1").innerHTML="🚩Player1 Wins";
        }
    }
    else if(r1===3){
        if(r2===2.){
            document.querySelector("h1").innerHTML="Player2 Wins🚩";
        }
        else{
            document.querySelector("h1").innerHTML="🚩Player1 Wins";
        }
    }
}
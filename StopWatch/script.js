//creating variable

let hour = 0;
let min = 0;
let sec = 0;
let milli = 0;

let timer = false; //initially times stop

function start(){
    timer = true;
    myFun();
}

function stop(){
    timer = false;
    myFun();
}

function reset(){
    //all should zero for this method-
    location.reload();
}

//craeting a function

function myFun(){
    if(timer == true){
        milli = milli + 1;
        if(milli == 100){
            sec = sec + 1;
            milli = 0; //assignment
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hour = hour + 1;
            min = 0;
        }

        //making new variable for 00:00:00
        let getmilli = milli
        let getSec = sec;
        let getmin = min;
        let gethour = hour;


       if(milli<10){
        getmilli = "0" + milli;
       }

        if(sec<10){
           getSec = "0" + sec;
        }

        if(min<10){
            getmin = "0" + min;
        }
        if(hour<10){
            gethour = "0" + hour;
        }

        setTimeout("myFun()", 10);
        document.getElementById("milli").innerHTML=getmilli;
        document.getElementById("sec").innerHTML=getSec;
        document.getElementById("min").innerHTML=getmin;
        document.getElementById("hour").innerHTML=gethour;
    }
}


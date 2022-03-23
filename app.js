//Functions
function askname() {
    var name = prompt("What is your name")
    return name
}

function greeting(a) {
    alert(`Welcome to the Twenty Game , ${a}`)
}

function randN() {
    var randomN = Math.floor(Math.random() * 10) + 1;
    return randomN
}

function finalscore() {
    alert(`The total is score for computer is ${computertotalcount}, the total score for user is ${usertotalcount}`)
}

function finalCount() {
    alert(`The total is score for computer is ${computertotalcount}, the total score for user is ${usertotalcount}`)
}

function wincondition() {
    if (computertotalcount < 0){
        alert(" The computer win")
    }else if (usertotalcount < 0){
        alert("The user win")
    }else(alert("It's a draw!"))
}


function computeraction() {
    do {
        //Random number 
        var ranN = Math.floor(Math.random() * 11)


        alert(` The number computer draw is ${ranN}`);
        
        
        //Computer count
        //add computercount
        computertotalcount = computertotalcount + ranN;
        //Computer Total
        alert(`The total computer count is ${computertotalcount}`)
    }while(computertotalcount < 16)
}


function useraction() {
    do {
        var userranN = Math.floor(Math.random() * 11)
        
        alert(`The number you draw is ${userranN}`)
        //Random number
        
        //User count

        usertotalcount = usertotalcount + userranN;

        alert(`Your total number is ${usertotalcount}`)

        var userres = prompt(" Do you want to keep draw the number? press y to keep drawing")
    }while (userres == "y" )
}

function countCompare() {
    var userCountCompare = usertotalcount - 20;
    var computerCountCompare = computertotalcount - 20;
}

//Variable 
var usertotalcount = 0;

var computertotalcount = 0;

//Start
greeting(askname());

do{
    alert("The computer will the draw the number first")

    computeraction();

    alert(" Now is your turn!")

    useraction();

    finalCount();

    wincondition();

    countCompare();

    computertotalcount = 0;

    usertotalcount = 0;

    var useragain = prompt("Do you want to play agian? press y to play again!");
}while(useragain == "y");



    

    
//Twenty

alert("Welcome to the game twenty, in this game you and the computer will draw a number from 1 - 10 and who ever get the combined number closest to 20 wins. ")

//Variable

var usertotalcount = 0;

var computertotalcount = 0;

//Computer Draw number

do{
    alert("The computer will draw the number first")

    alert(` The number computer draw is ${ranN}`)
    do {
        //Random number 
        var ranN = Math.floor(Math.random() * 11)
        //Computer count
        //add computercount
        computertotalcount = computertotalcount + ranN;
        //Computer Total
        alert(`The total computer count is ${computertotalcount}`)
    }while(computertotalcount < 16)


    alert("Now its User's turn")

    do {
        alert(`The number you draw is ${ranN}`)
        //Random number
        var ranN = Math.floor(Math.random() * 11)

        alert(`The number you draw is ${ranN}`)
        //User count

        usertotalcount = usertotalcount + ranN;

        var userres = prompt(" Do you want to keep draw the number? press y to keep drawing")

    }while (userres == "y")

    var useragain = prompt("Do you want to play agian? press y to play again!");

    if (computertotalcount > usertotalcount ){
        alert(" The computer win")
    }else (alert("The user win!"))  
}while(useragain == y);

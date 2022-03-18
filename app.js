//Twenty

alert("Welcome to the game twenty, in this game you and the computer will draw a number from 1 - 10 and who ever get the combined number closest to 20 wins. ")

//Variable

var usertotalcount = 0;

var computertotalcount = 0;

//Computer Draw number

do{
    alert("The computer will draw the number first")

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


    alert("Now its User's turn")

    do {
        var userranN = Math.floor(Math.random() * 11)
        
        alert(`The number you draw is ${userranN}`)
        //Random number
        
        //User count

        usertotalcount = usertotalcount + userranN;

        alert(`Your total number is ${usertotalcount}`)

        var userres = prompt(" Do you want to keep draw the number? press y to keep drawing")
    }while ((userres == "y" ) && (usertotalcount == 20))

    

    alert(`The total is score for computer is ${computertotalcount}, the total score for user is ${usertotalcount}`)

    if (computertotalcount > usertotalcount ){
        alert(" The computer win")
    }else (alert("The user win!"))  

    var useragain = prompt("Do you want to play agian? press y to play again!");

    }while(useragain == "y");

    
    

//The user should enter his name
let userName = '';
//the magic ball's will greet the user
userName ? console.log(`Hello ${userName}!`) :
console.log('Hello!');
//The user can enter his question
let userQuestion = '';
//Displaying the greetings
console.log(`${userName} asked: ${userQuestion}`);
//Initializing the random number generating variable
let randomNamber = Math.floor(Math.random()*8);
//Initialiazing the eightball variable
 let eightBall = '';
//Assigning a value to eightBall variable whith a switch function
switch (randomNamber) {
    case 0 :
         eightBall = 'It is certain';
    break;
    case 1 :
        eightBall = 'It is decidedly so';
    break;
    case 2 :
        eightBall ='Reply hazy try again';
    break;
    case 3 :
        eightBall = 'Cannot predict now';
    break;
    case 4 :
        eightBall = 'Do not count on it';
    break;
    case 5 :
        eightBall = 'My sources say no';
    bnreak;
    case 6 :
        eightBall = 'Outlook not so good';
    break;
    case 7 :
        eightBall = 'Signs point to yes';
    break;
    default : 
        eightBall = 'Nothing to say';
    break;
}
//Displaying the results
console.log(`Magic Eight Ball's answer: ${eightBall}`);
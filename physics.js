const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){

    //you will configure your series of questions inside here.
if(str == motion){
  terminal.question("which variable are you looking for?")
    }
else if (str==energy){
  terminal.question("which variable are you solving for?")
}
 else ("Sorry, I can't calculate that yet...")


});

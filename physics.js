const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");

}
function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let i=0;i<strcma.length;i++){
        strcma[i] = Number(strcma[i]);
    }
    return strcma;
}

terminal.question("What type of equation are you looking for?",function(str){
    //you will configure your series of questions inside here.
    if(str == "motion"){
        terminal.question("which variable are you solving for",function(str1){
            printOptions()
            terminal.question("type your variables",function(strcma){
                strcma = convertToArray(strcma);

                if(str1=="a"){
                    console.log(motion.accelerate(strcma[1],strcma[3]));
                }

                if(str1=="d"){
                    console.log(motion.distance(strcma[2],strcma[1],strcma[3]))
                }
                if(str1=="t"){
                    console.log(motion.time(strcma[0],strcma[1]))
                }
                if(str1=="v"){
                    console.log(motion.velocity(strcma[0],strcma[3]))
                }

            });
        })
    }
    else if(str == "energy"){
        terminal.question("which variable are you solving for?"),function(str2){
            if(str2=="ke"){
                console.log(energy.kineticEnergy(strcma[4],strcmaa[1]))
            }
            if(str2=="m"){
                console.log(energy.mass(strcma[5],strcma[1]))
            }
            if(str2=="v"){
                console.log(energy.velocity(strcma[5],strcma[4]))
            }
        }
    }
    else{
        console.log ("I'm sorry I don't know how to calculate that yet...")
    }
});

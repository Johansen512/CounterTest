const EndTime = 1608764401; 
function update ()  {
var ts = Math.round((new Date()).getTime() / 1000);
//console.log("halloTEST" + ts);
let seconds = EndTime - ts;
var numdays = Math.floor(seconds / 86400);

var numhours = Math.floor((seconds % 86400) / 3600);

var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);

var numseconds = ((seconds % 86400) % 3600) % 60;

 
document.querySelector (".tidTilbageNu").innerHTML = "Juleaften om:" + " " + numdays + " dage " + numhours + " timer " + numminutes + " minutter " + numseconds + " sekunder"

function secondsToString()

{  
numdays + " days " + numhours + " hours " + numminutes + " minutes " + numseconds + " seconds";

}

}

setInterval(update, 1000);

console.log (update)
function takeANumber(katzDeliLine, name){ 
  
   katzDeliLine.push(`${name}`);
   
   //returns a string w name and the length of the inputted array;
   return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
    let i=0;
    while (i<katzDeliLine.length){
      i++;
    }if (i===0){
    return "There is nobody waiting to be served!";
    } else {
      return (`Currently serving ${katzDeliLine.shift()}.`);
    }
}

var line = [];
function currentLine(katzDeliLine){
  let i=0;
  while (i<katzDeliLine.length){
    line.push(' '+[i+1]+`. `  + katzDeliLine[i]);
    i++;
  }
    if (katzDeliLine.length === 0){
    return "The line is currently empty.";
   } else {
    return ("The line is currently:"+line);
   }
}
function value_points(pos, numberEgality, duration, numberTeam, playerPerTeam, calculationMethod) {
  if(pos > numberTeam || pos < 1){
    return 0;
  }
  var result = 0;
  if(calculationMethod == "AVG"){
    numberEgality = numberEgality;
  }
  else if(calculationMethod == "MAX"){
    numberEgality = 1;
  }
  else if(calculationMethod == "MIN"){
    pos = pos + numberEgality;
    numberEgality = 1;
  }
  number_same_pos = Math.min(Math.max(numberEgality, 1), 256);
  for(i=0; i<number_same_pos; i++)
  {
    var a = Math.log(numberTeam * (playerPerTeam / 2.0) + 15.0 + playerPerTeam) / Math.log(25.0);
    var b = Math.log(1.0 + Math.pow(duration, 2)) / Math.log(1.05);
    var c = 100.0 / (90.0 + 10.0 * playerPerTeam);
    var d = Math.exp( -1.0 / 4.0 * ( (pos + i - 1) * Math.pow((16.0 / numberTeam), 0.5) + 5.0));

    if(pos + i > numberTeam / 2){
        result += 0;
    } 
    else if(pos + i == numberTeam / 2){
        result += 1;
    }
    else{
        result += Math.max(Math.round(a * b * c * d), 1);
    }
  }
  return Math.round(result / number_same_pos);
}

function value_points_tab(pos, numberEgality, duration, numberTeam, playerPerTeam, calculationMethod) {
  var output = "";
  for(j=0; j<numberTeam; j++)
  {
    output = output + " " + value_points(j + 1, 0, duration, numberTeam, playerPerTeam, "AVG");
  }
  return output;
}

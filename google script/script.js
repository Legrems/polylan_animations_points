function value_points(pos, numberEgality, duration, number_team, player_per_team, calculation_method) {
    if(pos > number_team || pos < 1){
        return 0;
    }
    var result = 0;
    if(calculation_method == "AVG"){
        numberEgality = numberEgality + 1;
    }
    else if(calculation_method == "MAX"){
        numberEgality = 1;
    }
    else if(calculation_method == "MIN"){
        pos = pos + numberEgality;
        numberEgality = 1;
    }
    number_same_pos = Math.min(Math.max(numberEgality, 1), 256);
    for(i=0; i<number_same_pos; i++)
    {
        var a = Math.log(number_team * (player_per_team / 2.0) + 15.0 + player_per_team) / Math.log(25.0);
        var b = Math.log(1.0 + Math.pow(duration, 2)) / Math.log(1.05);
        var c = 100.0 / (90.0 + 10.0 * player_per_team);
        var d = Math.exp( -1.0 / 4.0 * ( (pos + i - 1) * Math.pow((16.0 / number_team), 0.5) + 5.0));

        if(pos + i > number_team / 2){
                result += 0;
        } 
        else if(pos + i == number_team / 2){
                result += 1;
        }
        else{
                result += Math.max(Math.round(a * b * c * d), 1);
        }
    }
    return Math.round(result / number_same_pos);
}

function value_points_tab(pos, numberEgality, duration, number_team, player_per_team, calculation_method) {
    var output = "";
    if(numberEgality != 0){
     return "Egality must be 0 for the array"; 
    }
    for(j=0; j<number_team; j++)
    {
        output = output + " " + value_points(j + 1, numberEgality, duration, number_team, player_per_team);
    }
    return output;
}
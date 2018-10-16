import math

def value_points(pos, numberEgality, duration, number_team, player_per_team, calculation_method):
    """Calcul de la formule hyper wzf pour les points. Prends en compte les égalités. Dans le cas ou
    number_same_pos != 1, il faut la moyenne avec tous les points des pos entre pos et pos + number_same_pos
    """
    if pos > number_team or pos < 1:
        return 0
    result = 0
    if(calculation_method == "AVG"):
        numberEgality = numberEgality + 1
    elif(calculation_method == "MAX"):
        numberEgality = 1
    elif(calculation_method == "MIN"):
        pos = pos + numberEgality;
        numberEgality = 1
    number_same_pos = min(max(numberEgality, 1), 256)
    for i in range(number_same_pos):
        a = math.log(number_team * (player_per_team / 2.0) + 15.0 + player_per_team, 25.0)
        b = math.log(1.0 + math.pow(duration, 2), 1.05)
        c = 100.0 / (90.0 + 10.0 * player_per_team)
        d = math.exp( -1.0 / 4.0 * ( (pos + i - 1) * math.pow((16.0 / number_team), 0.5) + 5.0))

        if pos + i > number_team / 2:
            result += 0
        elif pos + i == number_team / 2:
            result += 1
        else:
            result += max(round(a * b * c * d), 1)
    return round(result / number_same_pos)

def value_points_tab(numberEgality, duration, numberTeam, playerPerTeam, calculation_method):
    output = "";
    if(numberEgality != 0):
        return "Egality must be 0 for the array"; 
    for j in range(numberTeam):
        output = "{} {}".format(output, value_points(j + 1, numberEgality, duration, numberTeam, playerPerTeam, calculation_method))
    return output
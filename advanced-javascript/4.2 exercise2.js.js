//#1 change this function into a ternary and assign it to variable called experiencePoints
var experiencePoints = winBattle() ? 10 : 1;


//Using this function, answer the questions below:
function moveCommand(direction) { 
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommant("forward"); you encounter a monster

//#3 return value when moveCommant("back"); you arrived home

//#4 return value when moveCommant("right"); you found a river

//#5 return value when moveCommant("left"); please enter a valid direction

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function describeWeather(weather) {
    let message;

    switch (weather) {
        case "sunny":
            message = "It's bright and beautiful outside!";
            break;
        case "rainy":
            message = "Don't forget your umbrella.";
            break;
        case "cloudy":
            message = "It looks like it might rain later.";
            break;
        case "snowy":
            message = "Bundle up! It's snowing.";
            break;
        case "windy":
            message = "Hold onto your hat, it's windy!";
            break;
        default:
            message = "I don't know that weather type!";
    }

    return message;
}

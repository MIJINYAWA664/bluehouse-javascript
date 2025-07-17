var database = [
    {
        username: "salisu",
        password: "adamu"
    },
    {
        username: "david",
        password: "light"
    },
    {
        username: "yagami",
        password: "boys"
    }
];

var newsfeed = [
    {
        username: "Tboy",
        timeline: "Javascript is hard"
    },
    {
        username: "John",
        timeline: "good morning"
    },
    {
        username: "David",
        timeline: "Happy new month"
    }
];

var usernamePrompt = prompt("enter username");
var passwordPrompt = prompt("enter password");

function isUserValid (username,password){
    for(i = 0; i < database.length; i++){
        if(username === database[i].username && password === database[i].password){
            return true; 
        }
    }
    return false;
}

function signIn (username,password){
    if(isUserValid (username,password)){
        console.log(newsfeed);
    } else {
        alert("wrong details");
    }
}
signIn(usernamePrompt,passwordPrompt)
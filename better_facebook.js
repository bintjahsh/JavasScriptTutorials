var database = [
    {
        username: "Zainab", 
        password: "Newbie"
    },
];

var newsfeed = [
    {
        username: "Titilope",
        timeline: "Amazing sunset",
    },
    {
        username: "Olurode",
        timeline: "Destination Gembu!",
    },
    {
        username: "Bukola",
        timeline: "I am on the way to success",
    }
];
var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


// This function displays the newsfeed if the username and password match what's in the database.
function signIn(user, pass){
    if (user === database[0].username && pass === database[0].password){
         console.log(newsfeed);
    } else {
         alert("Wrong username or password");
}
};
signIn(usernamePrompt, passwordPrompt);

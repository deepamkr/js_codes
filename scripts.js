var database = [
    {
    username: "deepam",
    password: "1234"
    }

];
var newsFeed=[

    {username: "Bobby",
    timeline: "Javascript is sooo cool!",
    },
    {
        username: "sally",
        timeline: "today is my birthday!"
    }
];

var userNamePrompt= prompt("What is your username?");
var passwordPrompt= prompt("What is your password?");

function signIN(user,pass){
    if(user === database[0].username && pass=== database[0].password)
    {
        console.log(newsFeed);
    }
    else
    alert("Wrong username or password");
}
signIN(userNamePrompt,passwordPrompt);
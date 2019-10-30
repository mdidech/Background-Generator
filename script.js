

var username=prompt("enter your username");
var password=prompt('enter your password');
var users=[
    {username:"mdidech",
    password:"1234"
},
{username:"mourad",
    password:"5678"
},
{username:"karim",
    password:"ab123"
}
]

function userIsValid(user,pass){
    for(i=0;i<users.length;i++){
        if(users[i].username==user && users[i].password==pass){
            return true;
        }
    } 
    return false;
}
function signIn(user,pass){
    if(userIsValid(user,pass)){
            console.log("Hello",users[i].username);
        } else {
            alert('wrong user');
        }
        
}

signIn(username,password)

let passwordbox= document.getElementById("password");
let password;
let length=12;

let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let numbers="1234567890";
let symbols="!@#$%^&*()";

let allchars= uppercase+lowercase+numbers+symbols;
function createpassword(){
    password=" ";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];  //here we are doing password+ = so that empty string me ye concatenate ho jaye
    password+= lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password=symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
      password+= allchars[Math.floor(Math.random()*allchars.length)];
    }

    passwordbox.value=password;
}

function copypassword(){
    passwordbox.select();
    document.execCommand("copy"); //this is the logic of javascript copy something and paste it anywhere
}

function clearpassword(){
    passwordbox.value=" ";
}



//function login(username, password) {
    if (username === 10 && password === 8) {
        return true;
    }

let loginCount = 0
while (loginCount < 3) {
    username = prompt("Enter number")
    password = prompt("Lucky number")
    if (login(username,password) != true) {
        console.log("congratulation")
        loginCount ++;
    }
}

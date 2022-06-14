const form = document["myForm"];
const input = form.password;

document.addEventListener("submit", function(e){
	e.preventDefault();
	try{
		if(input.value.length < 5){
			throw ("Password too short")
		} else {
			console.log("success!")
		}
		
		}
	catch(err) {
			console.log(err)
	}
})
//extra practice below

//1a
function sum(x, y) {
    //check data types first and throw error
    if (typeof x !== "number" || typeof y !== "number") {
        throw ("One of your parameters is not a number");
    } else {
        return x + y;
    };
}
try {
    console.log(sum(1, 2));
}
catch (err) {
    console.log(err);
}

//1b
// first you write a function, and within it have a program that will test to make sure something specific didn't go wrong, and have it throw an error if the error is detected
var user = { username: "sam", password: "123abc" };
function login(username, password) {
    if (username !== user.username || password !== user.password) {
        throw ("Credentials not valid");
    } else {
        throw ("Login successful.");
    }
}
// after the function put in place a try catch program that calls the function and then catches the error which then console logs the error that was thrown from inside of the function
try {
    login("sam", "123acb");
}
catch (err) {
    console.log(err);
}

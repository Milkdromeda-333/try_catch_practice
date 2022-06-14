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

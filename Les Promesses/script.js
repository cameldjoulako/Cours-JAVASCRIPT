console.log("Les promisses en Javascript");

function faire(){
	return new Promise((resolve, rejet) =>{
		console.log("C'est fait");
		//réusssir une fois sur deux
		if (Math.random()>.5) {
			resolve("reussite");
		}else{
			reject("Echec");
		}
	}
		)
}


const promise = faire();
console.log(promise);
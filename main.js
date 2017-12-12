//Firebase Config
var config = {
    apiKey: "AIzaSyAki9_tfbBCEQKxsQH5KpgmIN8gHCEc_6Y",
    authDomain: "portfolioform-15d55.firebaseapp.com",
    databaseURL: "https://portfolioform-15d55.firebaseio.com",
    projectId: "portfolioform-15d55",
    storageBucket: "portfolioform-15d55.appspot.com",
    messagingSenderId: "16099512357"
  };
  firebase.initializeApp(config);

//Reference Messages Collection
var messageRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
	e.preventDefault();
	
	//Get values
	let name = getInputValue('name');
	let email = getInputValue('email');
	let message = getInputValue('message');

	console.log(name);

	//Save Message
	saveMessage(name, email, message);

	//Show alert message
	document.querySelector('.alert').style.display = "inline";

	//Hide Alert after 3 seconds
	setTimeout(function(){
		document.querySelector('.alert').style.display = "none";
	}, 3000)

	//Clear form data afterwards
	document.getElementById('contactForm').reset();
}

//Function to get input values
function getInputValue(id){
	return document.getElementById(id).value;
}


//Function to save message to firebase
function saveMessage(name, email, message){
	let newMessage = messageRef.push();
	newMessage.set({
		name: name,
		email: email,
		message: message
	});
}
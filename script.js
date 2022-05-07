// const button = document.getElementsByTagName("button")[0];
// const input =document.getElementsByTagName("input")[0];
// const ul = document.querySelector("ul");

// const inputLength=()=> input.value.length;

// const listItem=()=>{
// 	const li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value="";
// }

// const buttonEvent=()=>{
// 	if(inputLength()>0){
//  		listItem()
// 	}
// }

// const inputEvent=(event)=>{
// 	if(inputLength()>0 && event.keyCode===13){
// 		listItem() 
// 	}
// }

// button.addEventListener("click", buttonEvent);

// input.addEventListener("keypress", inputEvent);



// let Data = [
// 	{
// 		userName:"moses",
// 		userPasword:"mos"
// 	},
// 	{
// 		userName:"rose",
// 		userPasword:"ros"
// 	},
// 	{
// 		userName:"john",
// 		userPasword:"123"
// 	}
// ]

// let Feedback = [
// 	{
// 		userName:"moses",
// 		timeLine:"i love singing"
// 	},
// 	{
// 		userName:"rose",
// 		timeLine:"i like java script"
// 	},
// 	{
// 		userName:"john",
// 		timeLine:"the program is too much for me"
// 	}
// ]

// let userNamePrompt = prompt("enter your user name");
// let userPassWordPrompt = prompt("enter your user password");

// const anotherSignIn=(user,pass)=>{
// 	for(var i=0; i<Data.length; i++){
// 		if(userNamePrompt===Data[i].userName &&
// 			userPassWordPrompt===Data[i].userPasword){
// 			return true;
// 		}
// 	}
// 	return false;
// }

// const signIn=(user,pass)=>{
// 	if(anotherSignIn(user,pass)){
// 			console.log(Feedback);
// 		}else{
// 			alert("wrong username and password")
// 		}
// }

// signIn(userNamePrompt,userPassWordPrompt);

const color1 =document.querySelector(".color1");
const color2 =document.querySelector(".color2");
const h3=document.querySelector("h3");
const body=document.querySelector("body");

gradient=()=>{
	body.style.background="linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+")";
	h3.textContent= body.style.background+";";
}

color1.addEventListener("input", gradient);

color2.addEventListener("input", gradient);


// class Player{
// 	constructor(name,type){
// 		this.name=name;
// 		this.type=type;
// 	}
// 	introduce(){
// 		console.log(`Hi i am ${this.name}, I'm a ${this.type}`)
// 	}
// }

// class Wizard extends Player{
// 	constructor(name, type){
// 		super(name, type)
// 	}
// 	player(){
// 		console.log(`WEEEEEE i'm a ${this.type}`);
// 	}
// }

// const wizard1=new Wizard("Shelly", "Healer");
// const wizard2=new Wizard("Shawn", "Dark Magic"); 


// class Player{
// 	constructor(name, type, character){
// 		this.name=name;
		// this.type=type;
// 		this.character=character;
// 	}
// 	introduce(){
// 		console.log(`My name is ${this.name} and i a ${this.type}`)
// 	}
// }

// class Wizard extends Player{
// 	constructor(name, type, character){
// 		super(name, type, character)
// 	}
// 	player(){
// 		console.log(`yessssss i am a ${this.type} with two ${this.character}`)
// 	}
// }

// const wizard1=new Wizard("Shelly","Healer","Blade");
// const wizard2=new Wizard("shawn", "Builder","Hammer");



const dataBase=[
	{
		username: "mobolaji",
		password: "123"
	},
	{
		username: "mobolaji",
		password: "123"
	}
]

const Feedback=[
	{
		username: "mobolaji",
		timeLine: "i love ECMA script..."
	},
	{
		username: "mobolaji",
		timeLine: "i love javaScript..."
	}
]

const userNamePrompt=prompt("enter username");
const userPassWordPrompt=prompt("enter userpassword");
















//Number 2
let person = {
	name: 'Michael',
	age: 27,
	gender: 'M'
};



const personDetails = (person)=>{

	for(let key in person){
	console.log(key + " : " + person[key]);

}
}


personDetails(person);




//Number 1

let book = {
	title: 'The Great Gastby',
	author: 'F.Scott Fitzgerald',
	yearPublished: 1925

};

const {title} = book;
const {author} = book;
console.log(title + " by " + author);



//Number 5


let someone = {
firstName: 'Michael',
lastName: 'Unknown',
age: 21

};

const details = (someone)=>{
for (let key in someone){
}console.log(someone);

}

details(someone);


//Number 4

let firstName = "Michael";
let secondName = "Unknown";

const result =(firstName, secondName)=>{
let fullname = firstName + secondName;
return fullname;
}
console.log(result(firstName, secondName))








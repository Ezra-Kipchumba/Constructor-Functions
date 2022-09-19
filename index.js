function isPerson(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getBirthYear = () => this.dob.getFullYear();
}





// Instantiate 

const person = new isPerson("Ezra", "Kipchumba", "16-01-2002");
const person2 = new isPerson("Noela", "Kaku", "23-04-2003");

console.log(person.lastName);
console.log(person2.firstName);
function isPerson(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getBirthYear = () => this.dob;
    this.getFullName = () => `${this.firstName} ${this.lastName}`;
}





// Instantiate 

const person = new isPerson("Ezra", "Kipchumba", "16-01-2002");
const person2 = new isPerson("Noela", "Kaku", "23-04-2003");

console.log(person.getBirthYear());
console.log(person2.getFullName());

// To be continued on static and class constructors 


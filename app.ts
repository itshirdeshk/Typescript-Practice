// Type Alias
// Used to make custom types

// type User = {
//     name: string;
//     age: number;
//     address?: string // Using '?', we can make a property optional
// }

// const user: User = {
//     name: "Hirdesh",
//     age: 20
// }

// function login(userData: User): User {
//     return userData
// }

// type ID = number;
// type ID = number | string; // ID can be of type number or string

// const userId: ID = 123;




// Interfaces
// interface Transaction {
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// }

// interface BankAccount {
//     accountNumber: number;
//     accountHolder: string;
//     balance: number;
//     isActive: boolean,
//     transactions: Transaction[]
// }

// const transaction1: Transaction = {
//     payeeAccountNumber: 123,
//     payerAccountNumber: 124
// }

// const transaction2: Transaction = {
//     payeeAccountNumber: 123,
//     payerAccountNumber: 125
// }

// const bankAccount: BankAccount = {
//     accountNumber: 123,
//     accountHolder: "John Doe",
//     balance: 4000,
//     isActive: true,
//     transactions: [transaction1, transaction2]
// }




// Extending Interfaces
// interface Book {
//     name: string;
//     price: number;
// }

// // interface Ebook {
// //     name: string;
// //     price: number;
// //     fileSize: number;
// //     format: string
// // }

// interface Ebook extends Book{
//     // name: string;
//     // price: number;
//     fileSize: number;
//     format: string
// }

// const book: Ebook = {
//     name: "Atomic Habits",
//     price: 300,
//     fileSize: 300,
//     format: "pdf"
// }



// Merging Interfaces
// interface Book {
//     name: string
// }

// interface Book {
//     price: number
// }

// const book: Book = {
//     name: "Atomic Habits",
//     price: 150
// }



// Union
// type ID = number | string;

// function printId(id: ID) {
//     // Narrowing
//     if (typeof id === 'string') {
//         console.log(id.toUpperCase());
//     } else {
//         console.log(id);
//     }
// }

// Typescript automatically determine the return type of the function.
// function getFirstThree(x: string | number[]) {
//     return x.slice(0, 3)
// }

// console.log(getFirstThree("Hello"));
// console.log(getFirstThree([1, 2, 3, 4, 5]));




// Generics

// function logString(arg: string) {
//     console.log(arg);
//     return arg;
// }
// function logNumber(arg: number) {
//     console.log(arg);
//     return arg;
// }

// So, basically here every data is repeating except the type.
// So, we can create a function that do the same task according to the type.
// For this, we can use Generic.

// function logAnything<T>(arg: T): T {
//     console.log(arg);
//     return arg;
// }

// logAnything([1, 2])

// // Another Example
// interface HasAge {
//     age: number
// }

// function getOldest(people: HasAge[]): HasAge {
//     return (people.sort((a, b) => b.age - a.age))[0]
// }

// const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 10 },]

// getOldest(people);

// interface Player {
//     name: string;
//     age: number;
// }

// const players: Player[] = [
//     { name: "John", age: 30 },
//     { name: "Joe", age: 40 },
//     { name: "Jane", age: 10 },
// ]

// Normally, this will work because getOldest function check for age property in Player interface but we can't get the name property of Player.
// const person = getOldest(players);

// For this, we can use assertion (this is one of the method but it is not a recommended method)
// const person = getOldest(players) as Player;

// // Another method is by using Generics
// function getOldestGeneric<T extends HasAge>(people: T[]): T {
//     return (people.sort((a, b) => b.age - a.age))[0]
// }

// const player = getOldestGeneric(players);

// Another Example - 2

// interface IPost {
//     name: string;
//     id: number;
//     description: string
// }

// interface IUser {
//     id: number;
//     name: string;
//     age: number;
// }

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }

// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }

// const fetchData = async <ResultData>(path: string): Promise<ResultData> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }

// (async () => {
//     // const data = await fetchPostData('/posts');
//     // const users = await fetchUsersData('/posts');
//     const users = await fetchData<IUser[]>('/posts');
// })()


// Duck typing or Structural Typing

// interface ICredentials {
//     username: string,
//     password: string
// }

// function login(credentials: ICredentials): boolean {
//     console.log(credentials);
//     return true
// }

// const user = {
//     username: "XYZ",
//     password: "123",
//     isAdmin: true
// }

// // Here as we can notice, we don't assign the type to the object and also it passed to function without error despite having an extra property isAdmin.

// // So it's a feature of typescript that if it find two objects have same struture then it treats both same.
// login(user)




// interface IAuth {
//     username: string;
//     password: string;
//     login(username: string, password: string) : void;
// }

// const auth: IAuth= {
//     username: "XYZ",
//     password: "123",
//     login(username, password) {}
// }
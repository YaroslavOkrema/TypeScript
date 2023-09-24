const sayHi = () => console.log('Hi');

sayHi();

const sumArgs = (a: number, b: number): number => a + b;

//Object
type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

const user: User = {
    name: 'John',
    age: 35,
    isAdmin: false
}

//Arrays 
const stringArray: string[] = ['a', 'b', 'c'];
// stringArray.push(1) //error

const anyTypesArray: any[] = ['a', 1, true, {a: 1}];

//Tuples 
const numericTuple = [1, 2] as const;
//numericTuple.push(3); //error

//Functions 
function printMsg(msg: string): void {
    console.log(msg);
}

//Arrow 
const printMsg2 = (msg: string): void => {
    console.log(msg);
}

//Functions optional parameters
function printMsg3(msg: string, additionalMsg?: string): void {
    console.log(`${msg}${additionalMsg}`);
}

//Functions default parameters
function printMsg4(msg: string, additionalMsg: string = 'default string'): void {
    console.log(`${msg}${additionalMsg}`);
}

printMsg4('1st');
printMsg4('1st', '2nd');

//Functions interface
interface ISumFunc {
    (a: number, b: number): number;
}

let sum: ISumFunc;

sum = (a: number, b: number) => a + b; //okay 

//sum = (a: string, b: number) => a + b; //error
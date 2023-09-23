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